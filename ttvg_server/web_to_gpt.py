from flask import Flask, request, send_file
import openai

openai.api_key = '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'

# api key 
#       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
#       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

app = Flask(__name__)
data = ""
messages = [ {
    "role": "system", 
    "content": "You are a good assistant but not a human kind."
    } ]


@app.route("/user_intput", methods=['POST'])
def user_input():
    data =  request.json
    return {"value":"SERVER get input: "+ data}

if __name__ == "__main__":
    # app.run(debug=True )
    chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )
    reply = chat.choices[0].message.content
    print(f"ChatGPT: {reply}")
