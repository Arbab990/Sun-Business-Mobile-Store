from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    new_contact = Contact(name=data['name'], email=data['email'], phone=data['phone'])
    db.session.add(new_contact)
    db.session.commit()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    
    # For now, just print the data to the terminal
    print(f"Name: {name}, Email: {email}, Phone: {phone}")
    return jsonify({"message": "Form submitted successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
