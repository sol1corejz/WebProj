from config import SQLITE_FILE_NAME
from flask import Flask

app = Flask(__name__)

#app.config['SQLALCHEMY_DATABASE_URI'] = \
#    "postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}".format(**DB_CONFIG)

app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{SQLITE_FILE_NAME}"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
