import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Meena@123",
    database="meena"
)

print("Database connected successfully")

