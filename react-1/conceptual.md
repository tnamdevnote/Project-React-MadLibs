### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a javascript library that is used to build a modern web applications.

- What is Babel?
  Babel is another javascript modules used to transcompile modern js syntax into browser-compatible versions, which are mostly outdated.
  It is also used to translate JSX syntax into vanilla javascript.

- What is JSX?
  JSX is a syntax used to build a react component. It is comprised of html elements and javascript codes.

- How is a Component created in React?
  A react component is created in two different ways: first way is to declare an instance of class. This is called class components. Declaring a class component requires render() funtions that returns some JSX.

Perhaps the simplest way to declare a component is to use javascript function. This is called functional component. Functional component does not require render function, and simply return a JSX inside it.

- What are some difference between state and props?
  State is used to store some important information about a given component. It only tracks the information of that component and nothing outside of it. Props is more like a piece of data that is communicated between components - often time it is passed down from parent component to childe component.

- What does "downward data flow" refer to in React?
  In react, props must be defined at the parent-component level and passed down to child component. It cannot be the other way around. Child component may have access to the parent's prop, but it cannot change the props within itself.

- What is a controlled component?
  Controlled component is a component that manages and controls mutable states of HTML elements, such as <input/>, <textarea/>, and <select/>, with the function returned to useState(). React is the one who controls what gets typed inside input box, for instance, or what is displayed.

- What is an uncontrolled component?

- What is the purpose of the `key` prop when rendering a list of components?
  When rendering a list of components, react keeps track of each of them by assigning internal ids.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Modigying an array (adding/removing elements) will reassign indexes and this will conflict with the key stored in react component.

- Describe useEffect. What use cases is it used for in React components?
  useEffect is a react hook that manages any actions that needs to occur once the component is rendered, modified, or removed.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef returns a mutable object with a key of "current". Mutating the ref value does not cause a re-render.

- When would you use a ref? When wouldn't you use one?
  useRef() is typically used when you need to access an underlying DOM element to manipulate the HTML element attributes.
  It is also used to setting up / clearing timers in React

- What is a custom hook in React? When would you want to write one?
  This is a javascript hook that typically uses built-in hooks. It can be reusable across different components. Custom hooks are generally used
  when same business logic is required across multiple components. It is also used to declutter business logic in a single component.
