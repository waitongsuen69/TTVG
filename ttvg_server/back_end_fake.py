from flask import Flask, request

app = Flask(__name__)

@app.route("/user_intput", methods=['POST'])
def user_input():
    data =  request.json
    print(data)
    return 0

if __name__ == "__main__":
    app.run(debug=True )
