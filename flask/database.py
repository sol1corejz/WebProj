from application import app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import and_, or_
from sqlalchemy.sql import func
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from config import DEFAULT_AVATAR

db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    avatar = db.Column(db.String(300), nullable=True)
    password = db.Column(db.String(500), nullable=False)

    def as_dict(self):
        return {'id': self.id,
                'avatar': self.avatar if self.avatar else DEFAULT_AVATAR,
                'name': self.name}

    def __repr__(self):
        return f"<users {self.id}>"


class Friends(db.Model):
    first_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                         primary_key=True)
    second_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                          primary_key=True)

    def __repr__(self):
        return f"<friends {self.first_id} : {self.second_id}>"


class Messages(db.Model):
    id_from = db.Column(db.Integer, db.ForeignKey('users.id'),
                        primary_key=True)
    id_to = db.Column(db.Integer, db.ForeignKey('users.id'),
                      primary_key=True)
    time = db.Column(db.DateTime(timezone=False), primary_key=True,
                     default=func.now())
    text = db.Column(db.Text, nullable=False)

    def as_dict(self):
        return {'id_from': self.id_from,
                'id_to': self.id_to,
                'time': self.time.timestamp(),
                'text': self.text}

    def __repr__(self):
        return f"<Messages {self.id_from} -> {self.id_to}>"


def add_user(name, email, password):
    try:
        if (Users.query.filter(Users.email == email)).all():
            return False
        u = Users(name=name, email=email,
                  password=generate_password_hash(password))
        db.session.add(u)
        db.session.flush()
        db.session.commit()
        return True
    except Exception as e:
        db.session.rollback()
        print(e)
        print('Не удалось добавить пользователя')
        return False
    finally:
        db.session.remove()


def add_message(id_from, id_to, text):
    try:
        if len(Users.query.filter(or_(Users.id == id_from,
                                      Users.id == id_to)).all()) != 2:
            return False

        m = Messages(id_from=id_from, id_to=id_to,
                     text=text)
        db.session.add(m)
        db.session.flush()
        db.session.commit()
        return True
    except Exception as e:
        db.session.rollback()
        print(e)
        print('Не удалось добавить сообщение')
        return False
    finally:
        db.session.remove()


def add_friends(first_id, second_id):
    try:
        if len(Users.query.filter(or_(Users.id == first_id,
                                      Users.id == second_id)).all()) != 2 or \
                len(
                    Friends.query.filter(or_(
                        and_(Friends.first_id == first_id, Friends.first_id == second_id),
                        and_(Friends.first_id == second_id, Friends.first_id == first_id))
                    ).all()
                ) != 0:
            return False

        f = Friends(first_id=first_id, second_id=second_id)
        db.session.add(f)
        db.session.flush()
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print(e)
        print('Не удалось добавить сообщение')
        return False
    finally:
        db.session.remove()


def renew_name(user_id, new_name):
    try:
        user = Users.query.get(user_id)
        if not user:
            return False
        user.name = new_name
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        print('Не удалось обновить имя')
        return False
    finally:
        db.session.remove()


def renew_avatar(user_id, new_avatar):
    try:
        user = Users.query.get(user_id)
        if not user:
            return False
        user.avatar = new_avatar
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        print('Не удалось обновить фото')
        return False
    finally:
        db.session.remove()


def get_user(user_in_list):
    try:
        if not user_in_list:
            return False
        return user_in_list[0]
    except Exception as e:
        print(e)
        print('Не удалось получить пользователя')
    finally:
        db.session.remove()


def get_user_by_email(email):
    return get_user(Users.query.filter(Users.email == email).all())


def get_user_by_id(user_id):
    return  get_user(Users.query.filter(Users.id == user_id).all())


def get_messages(id_1, id_2):
    try:
        if len(Users.query.filter(or_(Users.id == id_1,
                                      Users.id == id_2)).all()) != 2:
            return []
        return Messages.query.filter(or_(
            and_(Messages.id_from == id_1, Messages.id_to == id_2),
            and_(Messages.id_from == id_2, Messages.id_to == id_1))
        ).order_by(Messages.time).all()
    except Exception as e:
        print(e)
        print('Не удалось получить сообщения')
        return []
    finally:
        db.session.remove()


def get_friends(user_id):
    try:
        if not Users.query.filter(Users.id == user_id).all():
            return []
        return Friends.query.filter(or_(Friends.first_id == user_id,
                                    Friends.second_id == user_id)).all()
    except Exception as e:
        print(e)
        print('Не удалось получить друзей')
        return []
    finally:
        db.session.remove()


def check_user(email, password):
    try:
        if len(Users.query.filter(Users.email == email).all()) < 1:
            return False
        return check_password_hash(
            Users.query.filter(Users.email == email).one().password,
            password)
    except Exception as e:
        print(e)
        print('Не удалось получить друзей')
        return []
    finally:
        db.session.remove()
