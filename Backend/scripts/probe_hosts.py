import requests
hosts=['127.0.0.1','localhost']
endpoints=[
 ('GET','/'),
 ('GET','admin/'),
 ('GET','api/'),
 ('POST','api/token/'),
 ('POST','api/token/refresh/'),
 ('GET','api/rooms/'),
 ('GET','api/bookings/'),
 ('POST','api/bookings/'),
 ('POST','api/register/'),
 ('POST','api/create-payment-intent/'),
 ('GET','api/users/'),
 ('POST','api/users/'),
]
for host in hosts:
    print('\n=== Host:',host,'===')
    for method,ep in endpoints:
        url = f'http://{host}:8000/{ep.lstrip("/")}'
        try:
            if method=='GET':
                r=requests.get(url,timeout=5)
            else:
                r=requests.post(url,json={'test':'x'},timeout=5)
            print(f"{host} {method:4} {ep:25} -> {r.status_code}")
        except Exception as e:
            print(f"{host} {method:4} {ep:25} -> ERR: {e}")
