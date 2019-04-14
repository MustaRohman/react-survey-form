# React-Survey-Form

## Requirements and Specification
We’d like you to build a small Node.js application, and a 2-step HTML/JS survey which POSTs data to the back-end.
### Survey Form
Using React, build a simple 2 step, mobile optimised survey form with the following steps:
#### Step 1
- [ ] Title
- [ ] Name
- [ ] Date of Birth

#### Step 2
- [ ] Current location
- [ ] Current date / time 
- [ ] User feedback 
- [ ] Submit button
Users should complete the first step before the second step is shown.
When the form is submitted, a thank you message should be shown, and the contents of the form should be sent to the API you’ll create.

#### API & Server
The form should be served by a small Node.js Express application. This application should:
- [ ] Serve the survey HTML from the root URL /
- [ ] Expose a “submit survey” API endpoint, to which the survey should be POSTed.
- [ ] When a survey is submitted, simply log the details to the console
   
You should:
- [ ] Use a CSS preprocessor to generate the CSS, e.g. Sass, Less
- [ ] Use a build tool such as webpack to build the front-end
- [ ] Build the form for mobile, as a single page app
- [ ] Implement a user-friendly design
- [ ] Provide a basic README.md file at the root of the project describing how to run it, and what tools you used
- [ ] Publish your work as a git repository (Github, Bitbucket) for us to review
- [ ] After installing dependencies, the project should start with `npm start`

What we’re looking for:
We will check your work using Chrome’s built in emulator, using the “Apple iPhone 6” setting.
- [ ] Did you read and follow the instructions?
- [ ] Does it work out of the box, after following the readme?
- [ ] Code formatting, variable naming (be clean, be consistent!)
- [ ] Useful comments
- [ ] Git commit messages
- [ ] Put a comment in the footer of your HTML that says “I read the instructions”


**Getting started**
```bash
npm i
```

- Development
```bash
npm run dev
```

- Production (serve)
```bash
npm start
```

 
Based on this very helpful article [https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658]

