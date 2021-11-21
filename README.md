# whyisbabycrying
Project focuses on creating a web app that records baby's cry, tags them according to what they needed, and attempts to make predictions using machine learning

# Goal 
- As a user I can click record which would being recording audio. I can then stop the recording. I am then asked to categorize what the baby wanted by different categories:
- 1. hungry/thirsty
- 2. wants to play
- 3. diaper change
- 4. cold
- Once there is enough data when in recording mode there will be a top banner that makes a prediction for what the baby wanted.

## Challenge of the data 
- convert audio to text? 
  - digitizing audio is always not loseless 
  - 1 minute of crying is how much space?


## Things we need to figure out
- recording audio
- converting audio into some form of text based data
- running ml model to create predictions
  - https://github.com/BrainJS/brain.js#brainjs
  - /frontend/bigBrain
- webworker 

# Architecture design
- Frontend
  - React
  - Javascript
  - Cached frontend data
