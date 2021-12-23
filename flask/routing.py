from application import app
import database as db
from flask import request, jsonify, make_response
from flask_login import login_user


@app.route('/get_messages', methods=['POST'])
def get_messages():
    try:
        id_first = request.get_json().get('myId')
        id_second = request.get_json().get('userId')
        messages = [m.as_dict() for m in db.get_messages(id_first, id_second)]
        status_code = 200
    except KeyError:
        messages = []
        status_code = 400
    response = make_response({'messages': messages}, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/get_user', methods=['POST'])
def get_user():
    try:
        email = request.get_json().get('email')
        user_id = request.get_json().get('id')
        friend = db.get_user_by_email(email)
        if friend:
            friend = friend.as_dict()
            db.add_friends(user_id, friend['id'])
            status_code = 200
        else:
            friend = {}
            status_code = 400
    except KeyError:
        friend = {}
        status_code = 400
    response = make_response(friend, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/login', methods=['POST'])
def login():
    ret = {}
    try:
        req_json = request.get_json()
        email = req_json.get('email')
        password = req_json.get('password')
        status_code = 200 if db.check_user(email, password) else 400
        if status_code == 200:
            user = db.get_user_by_email(email).as_dict()
            user_id = user['id']
            pairs = db.get_friends(user_id)
            if pairs:
                ids1, ids2 = zip(*[[p.first_id, p.second_id] for p in pairs])
                ids = set(ids1 + ids2)
                friends = [db.get_user_by_id(fid).as_dict()
                           for fid in ids if fid != user_id]
            else:
                friends = []
            ret = {'user': user,
                   'friends': friends}
    except KeyError:
        status_code = 400
    response = make_response(ret, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/register', methods=['POST'])
def register():
    try:
        req_json = request.get_json()
        name = req_json.get('name')
        email = req_json.get('email')
        password = req_json.get('password')
        status_code = 200 if db.add_user(name, email, password) else 400
    except KeyError:
        status_code = 400
    response = make_response({}, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/renew_name', methods=['POST'])
def renew_name():
    try:
        req_json = request.get_json()
        user_id = req_json.get('id')
        new_name = req_json.get('name')
        status_code = 200 if db.renew_name(user_id, new_name) else 400
    except KeyError:
        status_code = 400
    response = make_response({}, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/renew_avatar', methods=['POST'])
def renew_avatar():
    try:
        req_json = request.get_json()
        user_id = req_json.get('id')
        new_avatar = req_json.get('avatar')
        status_code = 200 if db.renew_avatar(user_id, new_avatar) else 400
    except KeyError:
        status_code = 400
    response = make_response({}, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/send_message', methods=['POST'])
def add_message():
    try:
        id_form = request.get_json().get('id_from')
        id_to = request.get_json().get('id_to')
        text = request.get_json().get('text')
        status_code = 200 if db.add_message(id_form, id_to, text) else 400
    except KeyError:
        status_code = 400
    response = make_response({}, status_code)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.teardown_appcontext
def shut_down_connection(exception=None):
    if exception:
        print(exception)
    db.db.session.remove()
