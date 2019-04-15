# React-Survey-Form

## Requirements and Specification
We’d like you to build a small Node.js application, and a 2-step HTML/JS survey which POSTs data to the back-end.
### Survey Form
Using React, build a simple 2 step, mobile optimised survey form with the following steps:
#### Step 1
- [x] Title
- [x] Name
- [x] Date of Birth

#### Step 2
- [x] Current location
- [x] Current date / time 
- [x] User feedback 
- [x] Submit button
Users should complete the first step before the second step is shown.
When the form is submitted, a thank you message should be shown, and the contents of the form should be sent to the API you’ll create.

#### API & Server
The form should be served by a small Node.js Express application. This application should:
- [x] Serve the survey HTML from the root URL /
- [x] Expose a “submit survey” API endpoint, to which the survey should be POSTed.
- [x] When a survey is submitted, simply log the details to the console
   
You should:
- [x] Use a CSS preprocessor to generate the CSS, e.g. Sass, Less
- [x] Use a build tool such as webpack to build the front-end
- [x] Build the form for mobile, as a single page app
- [x] Implement a user-friendly design
- [x] Provide a basic README.md file at the root of the project describing how to run it, and what tools you used
- [x] Publish your work as a git repository (Github, Bitbucket) for us to review
- [x] After installing dependencies, the project should start with `npm start`

What we’re looking for:
We will check your work using Chrome’s built in emulator, using the “Apple iPhone 6” setting.
- [x] Did you read and follow the instructions?
- [x] Does it work out of the box, after following the readme?
- [x] Code formatting, variable naming (be clean, be consistent!)
- [x] Useful comments
- [x] Git commit messages
- [x] Put a comment in the footer of your HTML that says “I read the instructions”


**Getting started**
- Git clone or download the zip folder
- cd into directory 
- Install dependencies
```bash
npm i
```
- Production (serve)
```bash
npm start
```
- Open browser and navigate to localhost:3000
- Development
```bash
npm run dev
```
 
Based on this very helpful article [https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658]

