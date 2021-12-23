import db_operations
from database import db
from application import app
from config import DEBUG
from flask_cors import CORS
import routing

db_operations.create_db()
db.create_all()
if DEBUG:
    client = app.test_client()

CORS(app)

if __name__ == '__main__':
    app.run(debug=DEBUG)
