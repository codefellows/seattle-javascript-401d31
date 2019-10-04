# LAB - Full Stack API Resources

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

## Assignment

---

### Add Routing and Route Model control logic to your API.

Your API should now be able to accept and receive requests on the various routes / models that your application provides.  You must implement the following:

- Create, Read, Update, Destroy for every resource your API provides.
  - Your auth middleware should be used in order to 
- Your routes must be authenticated, only token bearers should be able make successful requests.

---

### Add Data Fetching and Resource management to your React App.

Your front end should be able to request data from your API and be able to manage values your API returns.  You must implement the following:

- You must use either Redux or the Context API to manage app state.
  - Resources values must be stored in a consistent app state.
  - No user data should be stored.
- You must have methods that make requests to your API.
- You must have a consistent method for updating your App state.

### Testing
* Tests for Auth routes should be implemented.
  * Signup and Signin routes should have tests.
  * Auth middleware should have a test. 
  * Routes to different resources should have tests.
* Tests for Auth components must be implemented.
  * Components should render.

### Stretch Goals:
- Create A User Role Model that stores API capabilites assign Role IDS to new Users.
- Implement Thunks in your redux store for asynchronous javascript events.

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
