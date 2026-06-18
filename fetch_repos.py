import urllib.request
import json

url = "https://api.github.com/users/MVRAMAIAH/repos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        for repo in data:
            print(f"Name: {repo['name']}")
            print(f"Desc: {repo['description']}")
            print(f"Lang: {repo['language']}")
            print(f"URL: {repo['html_url']}")
            print("---")
except Exception as e:
    print(e)
