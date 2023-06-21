from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
import torch
import os
#for image transfer


model_id = "stabilityai/stable-diffusion-2-1"

pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe = pipe.to("cuda")
for i in range(10):
    image = pipe("a cat with blue eye").images[0]
    name = "test/"+str(i)+".png"
    image.save(name)
    