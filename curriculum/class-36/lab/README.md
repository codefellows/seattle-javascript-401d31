# LAB -  Full Stack Application Configuration

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

### Initialize your API

Create an Initialized repository for the API that you want to work out out for the remainder of class. This should follow the guidelines of your project from your proposal.

- This should be an Express application running in a Node environment.
- Define any models / routes / and middleware that your API needs to function properly.
  - Both Auth and CRUD should be represented.
  - These don't need to be exhaustive, just make sure your have MVP functionality outlined in your API.
- Document any environment variables that your API needs to run locally.
  - Are there any API keys that need to be used, does mongo and express need any configuration variables?
- Have at least 1 route that sends a response on '/', can be an error or self made message

### Initialize your React App

Create an initialized repository for your React application that you will be adding to for the remainder of class.  This should be setup to function as per the guidelines from your proposal.

- This should be a `create-react-app` powered by `react-scripts`.
- Must be able to run on `npm start`.
- Should render something when running in development mode and browser pointed to the proper origin on '/'.
- Properly document your application in the README.

## Submission

Submit a PR for both repositories.

###### Testing
* Tests are not required for this lab

###### Stretch Goals:
* Deploy your applications on Heroku.

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
