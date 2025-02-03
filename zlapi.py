
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Transfer Link API! Use the /backend/weixin/transfer endpoint to convert links."

@app.route('/backend/weixin/transfer', methods=['POST'])
def transfer_link():
    # 从请求中获取参数
    member_id = request.args.get('member_id')
    external = request.args.get('external')
    source = request.args.get('source')
    product = request.args.get('product')
    content = request.form.get('content')

    # 设置请求头部
    headers = {
        'Host': 'page.tangguobaohe.com',
        'Proxy-Connection': 'keep-alive',
        'X-PLATFORM': 'android',
      #  'X-TOKEN': '30e517757dbe8d47204e7644c3c0f44e',
       # 'X-DEVTYPE': 'no',
        #'User-Agent': 'Mozilla/5.0 (Linux; Android 10; V2034A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*',
       # 'X-USERID': '1199012',
       'X-AGENT': 'JellyBox/8.8.8 (Android, F888, 10)',
       # 'X-Requested-With': 'XMLHttpRequest',
        #'X-NETTYPE': 'WIFI',
        #'X-DEVID': 'No-dev',
        'X-APPID': '2407255655',
        #'Origin': 'http://page.tangguobaohe.com',
        'Referer': 'http://page.tangguobaohe.com/share/chainurl',
        #'Accept-Encoding': 'gzip, deflate',
        #'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
       # 'Cookie': 'PHPSESSID=eln8cdcondr2822n3koj9gk7j4'
    }
    # 构造请求URL                                                自己  member_id=1199012
    url = f"http://page.tangguobaohe.com/backend/weixin/transfer?member_id=1199012&external=&source=batch&product=true"

    # 发送请求
    response = requests.post(url, headers=headers, data={'content': content})

    # 返回响应
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)  # 生产环境中应禁用 debug 模式