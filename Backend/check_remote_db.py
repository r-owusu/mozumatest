import pymysql, json, decimal
try:
    conn = pymysql.connect(
        host='shuttle.proxy.rlwy.net',
        port=44191,
        user='root',
        password='sRvoRfqRvGqdUqMlStsfDxrmhWXQKfNH',
        database='railway',
        connect_timeout=7
    )
    cur = conn.cursor()
    cur.execute("SELECT id, name, description, price_per_night, max_guests, available FROM core_room;")
    rows = cur.fetchall()
    print('REMOTE core_room rows count =', len(rows))
    for r in rows:
        # convert decimals to string for pretty JSON printing
        rec = {
            "id": r[0],
            "name": r[1],
            "description": r[2],
            "price_per_night": str(r[3]) if isinstance(r[3], decimal.Decimal) else r[3],
            "max_guests": r[4],
            "available": bool(r[5])
        }
        print(json.dumps(rec, ensure_ascii=False))
    cur.close()
    conn.close()
except Exception as e:
    import traceback
    print('FAILED:', type(e).__name__, e)
    traceback.print_exc()
