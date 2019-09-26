# LAB - Context API

Create a React application that wraps the entire `<App/>` with a context provider, created using Context API. Then, create multiple components that act as consumers to your context, using it in various ways.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


### Practice - Make a counter app with Context
You have been provided, in the `starter-code/practice` folder, a working counter application, written using standard React Component State which needs to be refactored to be Context driven, and modular.

* Create a Counter Provider Context component, which exposes the following state:
  * `count` - A number (default to 0)
  * `increment` - A reference to a function that increases the count
  * `decrement` - A reference to a function that decreases the count
* In the index.js, import CounterContext and wrap `<App />` in it, so that all child components can optionally subscribe to it as consumers.
* Your `<App />` component should simply pull in and render the following child components ...
* Create the following child components that register as a `.Consumer` to the provided context.
  * `<Counter />` - Renders the current value of `count` from the Counter Provider
    * Create this as a **class** component
    * Use the `contextType` static declaration to gain access to context.
  * `<Incrementer />` - Renders a button that, when clicked, calls the `increment()` method in the `Counter Provider`
    * Create this as a **function** component
    * Use `<CounterContext.Consumer>` as a wrapper in your `render()` method to attach to context, along with the function to pull and use context, rendering your output.
  * `<Decrementer />` - Renders a button that, when clicked, calls the `decrement()` method in the `Counter Provider`
    * Create this as a **function** component
    * Use the `useContext` hook to attach to and use context
* Provide good styling. Use the css-in-js methodology within the components themselves.

  
### Testing
* Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  * Can they see context?
  * Can they interact via published functions?

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
