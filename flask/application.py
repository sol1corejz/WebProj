from flask_sqlalchemy import SQLAlchemy
from config import DB_CONFIG
from flask import Flask
from flask_login import LoginManager

app = Flask(__name__)
# "postgresql+psycopg2://postgres:12345@localhost:5432/messanger"
app.config['SQLALCHEMY_DATABASE_URI'] = \
    "postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}".format(**DB_CONFIG)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


