import urllib.request
import json
url = "https://alfa-leetcode-api.onrender.com/fb1dKeCGeH/solved"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        print(response.read().decode())
except Exception as e:
    print(e)
