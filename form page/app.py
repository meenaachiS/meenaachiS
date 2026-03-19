import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Meena@123",
    database="meena"
)

print("Connected successfully")


from flask import Flask, request, redirect
import mysql.connector

app = Flask(__name__)

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Meena@123",
    database="meena"
)

cursor = db.cursor()

@app.route('/submit', methods=['POST'])
def submit():

    firstname = request.form['firstname']
    lastname = request.form['lastname']
    mobile = request.form['mobile']
    email = request.form['email']
    nationality = request.form['nationality']
    gender = request.form['gender']

    query = """
    INSERT INTO users (firstname, lastname, mobile, email, nationality, gender)
    VALUES (%s,%s,%s,%s,%s,%s)
    """

    values = (firstname, lastname, mobile, email, nationality, gender)

    cursor.execute(query, values)
    db.commit()

    return redirect("thankyou.html")

if __name__ == "__main__":
    app.run(debug=True)

