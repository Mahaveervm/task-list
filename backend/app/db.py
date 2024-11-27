import pymysql

def get_db_connection():
    return pymysql.connect(
        host='localhost',
        user='mahaveer',  # Replace with your MySQL username
        password='gayle@13',  # Replace with your MySQL password
        database='task_manager',  # Replace with your database name
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor,
        ssl_disabled=True  # Optional: Disable SSL if not required
    )