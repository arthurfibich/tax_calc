import requests
import json
#from firebase import firebase

# firebase = firebase.FirebaseApplication(
#    'https://tax-calc-56038.firebaseapp.com', None)
#result = firebase.get('Scenarios')
# print(result)

file = open('./crawl_result.json', 'w')


def crawl(current):
    r = requests.get(
        f'https://www.bundeshaushalt.de/rest/2012/soll/ausgaben/einzelplan/{current+("/" if current else "")}')
    req_dict = r.json()
    # for key, val in req_dict.items():
    #    print(key)
    #    print(val)
    try:
        print(req_dict['detail']['address'])
    except:
        pass
    res = dict()
    if 'childs' in req_dict:
        for child in req_dict['childs']:
            res.update({child['a']: crawl(child['a'])})
    return res


file.write(json.dumps(crawl('')))
