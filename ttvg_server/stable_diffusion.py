from flask import Flask, request, send_file

app = Flask(__name__)

@app.route("/prompt", methods=['GET', 'POST'])
def prompt():
    data = 'wrong mess'
    if request.method == 'POST':
        data =  request.json
        print(data)
        return {"value":data}
    else :
        return {"value":data}

@app.route("/output_image",methods=['GET'])
def output_image():
    return send_file('cat.jpg', mimetype='image/jpeg')

if __name__ == "__main__":
    app.run(debug=True )
