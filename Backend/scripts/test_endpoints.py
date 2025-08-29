import os
import requests
from urllib.parse import urljoin

base = os.environ.get('API_BASE', 'http://127.0.0.1:8000/')
endpoints = [
    ('GET', 'admin/'),
    ('GET', 'api/'),
    ('POST', 'api/token/'),
    ('POST', 'api/token/refresh/'),
    ('GET', 'api/rooms/'),
    ('GET', 'api/bookings/'),
    ('POST', 'api/bookings/'),
    ('POST', 'api/register/'),
    ('POST', 'api/create-payment-intent/'),
    ('GET', 'api/users/'),
    ('POST', 'api/users/'),
]


def get_local_token():
    """If API_TOKEN not provided, try to obtain one using local admin creds.
    This is only for local testing and will try username=admin / password=Secret123.
    """
    token = os.environ.get('API_TOKEN')
    if token:
        print('Using API_TOKEN from environment')
        return token
    try:
        url = urljoin(base, 'api/token/')
        r = requests.post(url, json={'username': 'admin', 'password': 'Secret123'}, timeout=5)
        if r.status_code == 200:
            print('Obtained local access token using admin/Secret123')
            return r.json().get('access')
        else:
            print('Could not obtain token automatically:', r.status_code, r.text[:200])
    except Exception as e:
        print('Token fetch error:', e)
    return None


def short(s, n=300):
    return (s[:n] + '...') if s and len(s) > n else s


def main():
    token = get_local_token()
    headers = {}
    if token:
        headers['Authorization'] = f'Bearer {token}'

    results = []
    for method, ep in endpoints:
        url = urljoin(base, ep)
        try:
            # discover allowed methods
            try:
                opt = requests.options(url, headers=headers, timeout=5)
            except Exception:
                opt = None
            allow = opt.headers.get('Allow') if opt is not None and opt.headers is not None else None

            # choose whether to run the intended method based on Allow
            allowed = None
            if allow:
                allowed = [m.strip().upper() for m in allow.split(',')]

            resp = None
            if allowed is None or method in (allowed or []):
                if method == 'GET':
                    resp = requests.get(url, headers=headers, timeout=5)
                else:
                    payload = {'username': 'test_user', 'password': 'test_pass'}
                    resp = requests.post(url, json=payload, headers=headers, timeout=5)
            else:
                # attempt once anyway to capture status
                if method == 'GET':
                    resp = requests.get(url, headers=headers, timeout=5)
                else:
                    resp = requests.post(url, json={'dummy': 'data'}, headers=headers, timeout=5)

            status = resp.status_code if resp is not None else 'ERR'
            body = resp.text if resp is not None else ''
            results.append((method, ep, status, short(body), allow))
        except Exception as e:
            results.append((method, ep, 'ERR', str(e), None))

    for method, ep, status, body, allow in results:
        print(f"{method:4} {ep:30} {status}")
        if allow:
            print(f"  Allowed: {allow}")
        print(f"  {body}\n")


if __name__ == '__main__':
    main()
