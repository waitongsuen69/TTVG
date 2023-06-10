from flask import Flask, request, send_file
# import openai
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
import torch
import os

model_id = "stabilityai/stable-diffusion-2-1"

app = Flask(__name__)
data = ""

#openai api
# openai.api_key = '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'
# messages = [ {
#     "role": "system", 
#     "content": "You are a good assistant but not a human kind."
#     } ]


@app.route("/user_intput", methods=['POST'])
def user_input():
# diffuser
    data =  request.json
    
    pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
    pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
    pipe = pipe.to("cuda")

    prompt = data #set prompt to user input
    image = pipe(prompt).images[0]
    image_path = 'result_image/{data[:10]}~.png'
    image.save(f'{image_path}')
    
    # return {"value":"SERVER get input: "+ data}
    return send_file(image_path, mimetype='image/png')
    
if __name__ == "__main__":
    app.run(debug=True )

#openai api
    # chat = openai.ChatCompletion.create(
    #         model="gpt-3.5-turbo", messages=messages
    #     )
    # reply = chat.choices[0].message.content
    # print(f"ChatGPT: {reply}")
