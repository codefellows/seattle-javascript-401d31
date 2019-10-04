# LAB - Full Stack Auth

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

You should have two fully configured projects as part of your Full Stack Application.  **From this point forward you should have fully configured project directories.** Your PRs now must include:

- `.travis.yml`
  - This must trigger a build on travis, and that build must be passing.
- `.eslintrc.json`
  - This should be used when you run `npm run lint` and should be passing when you submit your PR. 
- `.gitignore`
  - Sensitive files and runtime build files must be ignored from your repo.
- `README.md`
  - You should have a working UML for your app. One for your API, one for your front end client.
  - You must have a url to your deployed application.
- `JSDocs` / `styleguidist`
  - Your applications must be documented using the proper documentation methodology.

## Assignments
### Implement Auth on your API

---

Your API needs to have functionality for Authenticating and Authorizing requests, The following will be required on your API server:

- A User model
  - Your API needs a User model to handle all Auth related data.
  - Your model must generate a Token.

- Basic Auth
  - You must have a way for users to request a token using User credentials.
  - Either using a form for sending hashed usernames and passwords or using an Oauth service.  Both of which lead to fetching of a User object, and token generation.

- Bearer Auth
  - You must have a way to Authenticate tokens passed in an Authorization header.


### Implement Auth in your React Application

---

Your React App must have A way to authenticate users and handle tokens.  The following features are required for your front end Interfaces:

- Authentication form
  - You should have a form that either lets users submit basic auth credentials or an Oauth form for submitting Oauth credentials to an Auth service.

- Authentication Data
  - Your Interface should save your token somewhere.
  - Your Interface should change some behavior depending on if a token is present.

###### Testing
* Tests for Auth routes should be implemented.
  * Signup and Signin routes should have tests.
* Tests for Auth components must be implemented.
  * Components should render.

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
