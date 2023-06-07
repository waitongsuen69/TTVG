from flask import Flask, request

app = Flask(__name__)


@app.route("/prompt", methods=['GET', 'POST'])
def prompt():
    data = 'wrong mess'
    if request.method == 'POST':
        data =  request.args.get('prompt')
        print(data)
        return {"value":data}
    else :
        return {"value":data}
    
if __name__ == "__main__":
    app.run(debug=True ) 