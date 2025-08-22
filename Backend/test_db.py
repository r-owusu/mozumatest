import pymysql, traceback

try:
    conn = pymysql.connect(
        host='shuttle.proxy.rlwy.net',
        port=44191,
        user='root',
        password='sRvoRfqRvGqdUqMlStsfDxrmhWXQKfNH',
        database='railway',
        connect_timeout=7
    )
    print("CONNECTED: pymysql OK")
    conn.close()
except Exception as e:
    print("FAILED:", type(e).__name__, e)
    traceback.print_exc()
