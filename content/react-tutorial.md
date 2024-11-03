---
title: React Tutorial
slug: react-tutorial
description: This is a react tutorial
date: 10/10/2024
author: Mark
image: /blogimg/img3.jpg
---

## Q. What is React.js?

React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an opensource, component-based, front-end library responsible only for the application view layer.
The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript
object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS
on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and
helps to maintain larger apps.
Reference:

↥

### Q. How React works?

React implements a virtual DOM that is basically a DOM tree representation in Javascript. So when it needs to read or write to the
DOM, it will use the virtual representation of it. Then the virtual DOM will to find the most efficient way to update the browsers
DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the
DOM to match the React elements. The reason for this is that JavaScript is very fast and it is worth keeping a DOM tree in it to
speedup its manipulation.
↥
## Q. List some of the major advantages and limitations
of React?
Advantages:
 It relies on a virtual-dom to know what is really changing in UI and will re-render only what has really changed, hence
better performance wise
 JSX makes components/blocks code readable. It displays how components are plugged or combined with.
 React data binding establishes conditions for creation dynamic applications.
 Prompt rendering. Using comprises methods to minimise number of DOM operations helps to optimise updating process
and accelerate it. Testable. React native tools are offered for testing, debugging code.
 SEO-friendly. React presents the first-load experience by server side rendering and connecting event-handlers on the side
of the user:
o React.renderComponentToString is called on the server.
o React.renderComponent() is called on the client side.
o React preserves markup rendered on the server side, attaches event handlers.
Limitations:
 Learning curve. Being not full-featured framework it is requered in-depth knowledge for integration user interface free
library into MVC framework.
 View-orientedness is one of the cons of ReactJS. It should be found 'Model' and 'Controller' to resolve 'View' problem.
 Not using isomorphic approach to exploit application leads to search engines indexing problems.
↥
## Q. Why does React emphasize on unidirectional data
flow?
It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the
application. In essence, this means child components are not able to update the data that is coming from the parent component. In
React, data coming from a parent is called props.
In React this means that:
 state is passed to the view and to child components
 actions are triggered by the view
 actions can update the state
 the state change is passed to the view and to child components
The view is a result of the application state. State can only change when actions happen. When actions happen, the state is updated.
One-way data binding provides us with some key advantages
 Easier to debug, as we know what data is coming from where.
 Less prone to errors, as we have more control over our data.
 More efficient, as the library knows what the boundaries are of each part of the system.
In React, a state is always owned by one component. Any changes made by this state can only affect the components below it, i.e
its children. Changing state on a component will never affect its parent or its siblings, only the children will be affected. This is the
main reason that the state is often moved up in the component tree so that it can be shared between the components that need to
access it.
↥
## Q. How to declare constant in react?
```bash showLineNumbers
// Constants.js
export const POSTURL = "http://localhost:3000/api/v1/patterns";
export const DELETEURL = "http://localhost:3000/api/v1/patterns/";
export const DeleteButton = require("./images/delete-icon.png");
export const LoadingWheel = require("./images/loading-wheel.gif");
// App.js
import \* as Constants from "./Constants";
const employee = {
emp_id: 10,
name: "Nakul Agate",
email: "nakul.agate@email.com"
};
class App extends React.Component {
render() {
return (

 <div>
 <div>Employee Details :{JSON.stringify(employee)}</div>
 <div><img src={Constants.LoadingWheel} alt="Loading..." /></div>
 </div>
 );
 }
}
⚝
```
↥
## Q. What is Destructuring in React?
Destructuring is a convenient way of accessing multiple properties stored in objects and arrays. It was introduced to JavaScript by 
ES6 and has provided developers with an increased amount of utility when accessing data properties in Objects or Arrays.
When used, destructuring does not modify an object or array but rather copies the desired items from those data structures into 
variables. These new variables can be accessed later on in a React component.



Example:
```bash showLineNumbers
/**
* Destructuring in React
*/
import React from "react";
export default function App() {
 // Destructuring
 const [counter, setcounter] = React.useState(0);
 return (
 <>
 <button onClick={() => setcounter(counter + 1)}> Increment </button>
 <button onClick={() => setcounter(counter > 0 ? counter - 1 : 0)}>
 Decrement
 </button>
 <h2>Result: {counter}</h2>
 </>
 );
}
⚝
↥
```
## Q. Why is it necessary to start component names with 
a capital letter?
In JSX, lower-case tag names are considered to be HTML tags. However, lower-case tag names with a dot (property accessor) aren't.
When an element type starts with a lowercase letter, it refers to a built-in component like or and results in a 
string <div> or <span> passed to React.createElement. Types that start with a capital letter like compile 
to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.
 <component /> compiles to React.createElement('component') (html tag)
 <Component /> compiles to React.createElement(Component)
 <obj.component /> compiles to React.createElement(obj.component)
↥

### Q. What are fragments?
Fragments allows to group a list of children without adding extra nodes to the DOM.

Example:
```bash
class App extends React.Component {
 render() {
 return (
 <React.Fragment>
 <ChildA />
 <ChildB />
 <ChildC />
 </React.Fragment>
 )
 }
}
```
### Benefits:
It's a tiny bit faster and has less memory usage (no need to create an extra DOM node). This only has a real benefit on very 
large and/or deep trees, but application performance often suffers from death by a thousand cuts. This is one cut less.
 Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationship, and adding divs in the middle 
makes it hard to keep the desired layout while extracting logical components.
The DOM inspector is less cluttered.

## Q. What is Virtual DOM?
In React, for every DOM object, there is a corresponding "virtual DOM object". A virtual DOM object is a representation of a DOM 
object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power 
to directly change what's on the screen.
Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a 
change in the state of our application, virtual DOM gets updated first instead of the real DOM.
⚝ Virtual DOM Example

### Q. What is the difference between ShadowDOM and 
VirtualDOM?
1. Document Object Model:
It a way of representing a structured document via objects. It is cross-platform and language-independent convention for 
representing and interacting with data in HTML, XML, and others. Web browsers handle the DOM implementation details, so we can 
interact with it using JavaScript and CSS.
2. Virtual DOM:
Virtual DOM is any kind of representation of a real DOM. Virtual DOM is about avoiding unnecessary changes to the DOM, which are 
expensive performance-wise, because changes to the DOM usually cause re-rendering of the page. It allows to collect several 
changes to be applied at once, so not every single change causes a re-render, but instead re-rendering only happens once after a set 
of changes was applied to the DOM.
3. Shadow DOM:
Shadow DOM is mostly about encapsulation of the implementation. A single custom element can implement more-or-less complex 
logic combined with more-or-less complex DOM. Shadow DOM refers to the ability of the browser to include a subtree of DOM 
elements into the rendering of a document, but not into the main document DOM tree.
Difference:
The virtual DOM creates an additional DOM. The shadow DOM simply hides implementation details and provides isolated scope for
web components.
↥
## 2. REACT SETUP
Q. How to set up a react project with create react app?
Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no 
configuration. This tool is wrapping all of the required dependencies like Webpack, Babel for React project itself.
Requirements:
The Create React App is maintained by Facebook and can works on any platform, for example, macOS, Windows, Linux, etc. To 
create a React Project using create-react-app, you need to have installed the following things in your system.
 Node version >= 14
 Visual Studio Code Editor

Installation:
```bash
npx create-react-app my-app
cd my-app
npm start
```
Output:
Running any of these commands will create a directory called my-app inside the current folder. Inside that directory, it will generate 
the initial project structure and install the transitive dependencies:
```bash
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
└── src
 ├── App.css
 ├── App.js
 ├── App.test.js
 ├── index.css
 ├── index.js
 ├── logo.svg
 ├── serviceWorker.js
 └── setupTests.js
 ```

## Q. What are the features of create react app?
Create React App is a command-line program that lets us create a new React project easily and build the project into artifacts that 
we can deploy. It is created by the React team and creates a scaffold to the app.
Below are the list of some of the features provided by create react app.
 React, JSX, ES6, Typescript and Flow syntax support.
 Autoprefixed CSS
 CSS Reset/Normalize
 Live-editing CSS and JS in local development server.
 A fast interactive unit test runner with built-in support for coverage reporting
 A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
 An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.
 
## Q. What does eject do in create react app?
The create-react-app commands generate React App with an excellent configuration and helps you build your React app with the 
best practices in mind to optimize it. However, running the eject script will remove the single build dependency from your project. 
That means it will copy the configuration files and the transitive dependencies (e.g. Webpack, Babel, etc.) as dependencies in 
the package.json file. If you do that, you'll have to ensure that the dependencies are installed before building your project.
After running the eject, commands like npm start and npm run build will still work, but they will point to the copied scripts so you 
can tweak them. It won't be possible to run it again since all scripts will be available except the eject one.
↥
## Q. How to put React in production mode?
Create a simple hello-world-app using create-react-app.
npx create-react-app hello-world-app
Modify the App.js file as shown below.
```bash showLineNumbers
import './App.css';
function App() {
 return (
 <div className="App">
 <header className="App-header">
 <h1>Hello world app</h1>
 </header>
 </div>
 );
}
export default App;
```
Run the app local server by running the following command
npm start
On the local server (http://localhost:3000) you can see a simple React app displaying a "hello world" message. The next step is to 
make this app production-ready for deployment. Inside the root directory run the following command:
npm run build
This creates a build directory inside the root directory, which bundles your React app and minifies it into simple HTML, CSS, and 
JavaScript files. This build folder serves your app via a simple en point, index.html, where your entire React app resides. Running 
your app via a remote server means running this index.html file on the server.

## Q. What are the common folder structures for React?
React doesn't have opinions on how you put files into folders. That said there are a few common approaches popular in the 
ecosystem you may want to consider.
1. Grouping by features or routes:
One common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.
common/
 Avatar.js
 Avatar.css
 APIUtils.js
 APIUtils.test.js
feed/
 index.js
 Feed.js
 Feed.css
 FeedStory.js
 FeedStory.test.js
 FeedAPI.js
profile/
 index.js
 Profile.js
 ProfileHeader.js
 ProfileHeader.css
 ProfileAPI.js
2. Grouping by file type:
Another popular way to structure projects is to group similar files together, for example:
api/
 APIUtils.js
APIUtils.test.js
 ProfileAPI.js
 UserAPI.js
components/
 Avatar.js
 Avatar.css
 Feed.js
 Feed.css
 FeedStory.js
 FeedStory.test.js
 Profile.js
 ProfileHeader.js
 ProfileHeader.css
↥
## Q. What are the popular React-specific linter?
1. ESLint:
ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React 
is an npm package called eslint-plugin-react.
npm install -g eslint-plugin-react
This will install the plugin we need, and in our ESLint config file, we just need a few extra lines.
"extends": [
 "eslint:recommended",
 "plugin:react/recommended"
]
"scripts": {
 "start": "react-scripts start",
 "build": "react-scripts build",
 "test": "react-scripts test --env=jsdom",
 "eject": "react-scripts eject",
 "lint": "eslint src/**/*.js src/**/*.jsx"
}
### 2. eslint-plugin-jsx-a11y:
It will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with alt text 
and tabindex, for example, will not be picked up by regular plugins.
↥
## Q. What is the browser support for react applications?
By default, Create React App generated project supports all modern browsers. Support for Internet Explorer 9, 10, and 11 requires 
polyfills. For a set of polyfills to support older browsers, use react-app-polyfill.
The browserslist configuration controls the outputted JavaScript so that the emitted code will be compatible with the browsers 
specified.
Example:
// package.json
"browserslist": {
 "production": [
 ">0.2%",
 "not dead",
 "not op_mini all"
 ],
 "development": [
 "last 1 chrome version",
 "last 1 firefox version",
 "last 1 safari version"
 ]
}
↥
## Q. Explain the use of Webpack and Babel in React?
1. Babel:
Babel is a JS transpiler that converts new JS code into old ones. It is a very flexible tool in terms of transpiling. One can easily add 
presets such as es2015, es2016, es2017, or env; so that Babel compiles them to ES5. Babel allows us to have a clean, maintainable code 
using the latest JS specifications without needing to worry about browser support.
2. Webpack:
Webpack is a modular build tool that has two sets of functionality — Loaders and Plugins. Loaders transform the source code of a 
module. For example, style-loader adds CSS to DOM using style tags. sass-loader compiles SASS files to CSS. babel-loader transpiles 
JS code given the presets. Plugins are the core of Webpack. They can do things that loaders can't. For example, there is a plugin 
called UglifyJS that minifies and uglifies the output of webpack.
3. create-react-app:
create-react-app, a popular tool that lets you set up a React app with just one command. You don't need to get your hands dirty 
with Webpack or Babel because everything is preconfigured and hidden away from you.
Example: Quick Start
npx create-react-app my-app
cd my-app
npm start

## Q. What is the difference between ReactDOM and 
React?
The ReactDOM module exposes DOM-specific methods, while React has the core tools intended to be shared by React on different 
platforms (e.g. React Native).
React package contains: React.createElement(), React.createClass(), React.Component(), React.PropTypes(), React.Children()
ReactDOM package contains: ReactDOM.render(), ReactDOM.unmountComponentAtNode(), ReactDOM.findDOMNode(), and reactdom/server that including: ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().
Example:
/**
* React vs ReactDOM
*/
import { createRoot } from "react-dom/client";
export default function App() {
 return <h1>Hello React</h1>;
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
⚝
↥
Q. What is ReactDOM?
ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient 
way of managing DOM elements of the web page.
ReactDOM provides the developers with an API containing the following methods
 render()
 findDOMNode()
 unmountComponentAtNode()
 hydrate()
 createPortal()
1. render():
ReactDOM.render(element, container, callback)
Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for 
stateless components). If the React element was previously rendered into container, this will perform an update on it and only 
mutate the DOM as necessary to reflect the latest React element. If the optional callback is provided, it will be executed after the
component is rendered or updated.
⚝
2. hydrate():
ReactDOM.hydrate(element, container, callback)
This method is equivalent to the render() method but is implemented while using server-side rendering. This function attempts to 
attach event listeners to the existing markup and returns a reference to the component or null if a stateless component was 
rendered.
⚝
3. unmountComponentAtNode():
ReactDOM.unmountComponentAtNode(container)
This function is used to unmount or remove the React Component that was rendered to a particular container. It returns true if a 
component was unmounted and false if there was no component to unmount.
⚝
4. findDOMNode():
ReactDOM.findDOMNode(component)
If this component has been mounted into the DOM, this returns the corresponding native browser DOM element. This method is 
useful for reading values out of the DOM, such as form field values and performing DOM measurements.
⚝
5. createPortal():
ReactDOM.createPortal(child, container)
createPortal allow us to render a component into a DOM node that resides outside the current DOM hierarchy of the parent 
component.
⚝
↥
## 3. REACT JSX
Q. What is JSX?
JSX ( JavaScript Expression ) allows us to write HTML elements in JavaScript and place them in the DOM without 
any createElement() or appendChild() methods. JSX converts HTML tags into react elements. React uses JSX for templating instead 
of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.
 It is faster because it performs optimization while compiling code to JavaScript.
 It is also type-safe and most of the errors can be caught during compilation.
 It makes it easier and faster to write templates.
When JSX compiled, they actually become regular JavaScript objects. For instance, the code below:
const hello = <h1 className = "greet"> Hello World </h1>
will be compiled to
const hello = React.createElement {
 type: "h1",
 props: {
 className: "greet", 
 children: "Hello World"
 }
}
Example:
export default function App() {
 return (
 <div className="App">
 <h1>Hello World!</h1>
 </div>
 );
}
⚝

## Q. How JSX prevents Injection Attacks?
React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's
not explicitly written in your application. Everything is converted to a string before being rendered.
For example, you can embed user input as below,
export default class JSXInjectionExample extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 userContent: `JSX prevents Injection Attacks Example 
 <script src="http://example.com/malicious-script.js></script>`
 };
 }
 render() {
 return (
 <div>User content: {this.state.userContent}</div>
 );
 }
}
// Output
User content: JSX prevents Injection Attacks Example
<script src="http://example.com/malicious-script.js></script>

## Q. What are the benefits of new JSX transform?
The React 17 release provides support for a new version of the JSX transform. There are three major benefits of new JSX transform,
 It enables you to use JSX without having to import React.
 The compiled output relatively improves the bundle size.
 The future improvements provides the flexibility to reduce the number of concepts to learn React.
↥
## Q. Is it possible to use React without rendering HTML?
It is possible with latest version (>=16.2). Below are the possible options:
render() {
 return false
}
render() {
 return null
}
render() {
 return []
}
render() {
 return <React.Fragment></React.Fragment>
}
render() {
 return <></>
}
Note that React can also run on the server side so, it will be possible to use it in such a way that it doesn't involve any DOM 
modifications (but maybe only the virtual DOM computation).

## Q. How to write comments in React and JSX?
Writing comments in React components can be done just like comment in regular JavaScript classes and functions.
React comments:
function App() {
 // Single line Comment
 /*
 * multi
 * line
 * comment
 **/
 return (
 <h1>My Application</h1>
 );
}
JSX comments:
export default function App() {
 return (
 <div>
 {/* A JSX comment */}
 <h1>My Application</h1>
 </div>
 );
}

## Q. How to add custom DOM attributes in JSX?
Custom attributes are supported natively in React 16. This means that adding a custom attribute to an element is now as simple as 
adding it to a render function, like so:
Example:
```bash
// 1. Custom DOM Attribute
render() {
 return (
 <div custom-attribute="some-value" />
 );
}
// 2. Data Attribute ( starts with "data-" )
render() {
 return (
 <div data-id="10" />
 );
}
// 3. ARIA Attribute ( starts with "aria-" )
render() {
 return (
 <button aria-label="Close" onClick={onClose} />
 );
}
```

## Q. How many outermost elements can be there in a 
JSX expression?
A JSX expression must have only one outer element. For Example:
```bash
const headings = (
 <div id = "outermost-element">
 <h1>I am a heading </h1>
 <h2>I am also a heading</h2>
 </div>
)
```
## Q. How to loop inside JSX?
You can simply use Array.prototype.map with ES6 arrow function syntax.
Example:
```bash
/**
* Loop inside JSX
*/
const animals = [
 { id: 1, animal: "Dog" },
 { id: 2, animal: "Bird" },
 { id: 3, animal: "Cat" },
 { id: 4, animal: "Mouse" },
 { id: 5, animal: "Horse" }
];
export default function App() {
 return (
 <ul>
 {animals.map((item) => (
 <li key={item.id}>{item.animal}</li>
 ))}
 </ul>
 );
}
``` 
## Q. How do you print false values in JSX?
In React, boolean values (true and false), null, and undefined are valid children, but these values will not be rendered in UI if you 
put them directly inside {} in JSX.
For example, all these JSX expressions will result in the same empty div:
```bash
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
If you want a value like false, true, null, or undefined to show in the output, you have to convert it to a string first.
<div>{String(true)}</div>
<div>{String(false)}</div>
<div>{String(undefined)}</div>
<div>{String(null)}</div>
In the output, this will render true, false, undefined, and null respectively.
```

### Q. How to use React label element?
If you to render a <label> element bound to a text input using the standard for attribute, then it produces HTML missing that 
attribute and prints a warning to the console.
<label for={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
Since for is a reserved keyword in JavaScript, use htmlFor instead.
<label htmlFor={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
↥
Q. How to use InnerHtml in React?
The innerHTML is risky because it is easy to expose users to a cross-site scripting (XSS) attack. React 
provides dangerouslySetInnerHTML as a replacement for innerHTML. It allows to set HTML directly from React by 
using dangerouslySetInnerHTML and passing an object with a __html key that holds HTML.
Example:
```bash
function App() {
 return (
 <div
 dangerouslySetInnerHTML={{
 __html: "<h2>This text is set using dangerouslySetInnerHTML</h2>"
 }}
 ></div>
 );
 }
```

## Q. How to show and hide elements in React
1. Returning Null:
```bash
const AddToCart = ({ available }) => {
 if (!available) return null
 return (
 <div className="full tr">
 <button className="product--cart-button">Add to Cart</button>
 </div>
 )
}
```
2. Ternary Display:
When you need to control whether one element vs. another is displayed, or even one element vs. nothing at all (null), you can use 
the ternary operator embedded inside of a larger portion of JSX.
```bash
<div className="half">
 <p>{description}</p>
 {remaining === 0 ? (
 <span className="product-sold-out">Sold Out</span>
 ) : (
 <span className="product-remaining">{remaining} remaining</span>
 )}
</div>
```
### In this case, if there are no products remaining, we will display "Sold Out"; otherwise we will display the number of products remaining.

3. Shortcut Display:
It involves using a conditional inside of your JSX that looks like checkIfTrue && <span>display if true</span>. Because if 
statements that use && operands stop as soon as they find the first value that evaluates to false, it won't reach the right side (the JSX) 
if the left side of the equation evaluates to false.
```bash
<h2>
 <span className="product--title__large">{nameFirst}</span>
 {nameRest.length > 0 && (
 <span className="product--title__small">{nameRest.join(" ")}</span>
 )}
</h2>
```
4. Using Style Property:
```bash
<div style={{ display: showInfo ? "block" : "none" }}>info</div>

```
## 4. REACT COMPONENTS
Q. What are React components?
Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a 
JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a 
section of the UI (User Interface) should appear.
In React, a Stateful Component is a component that holds some state. A Stateless component, by contrast, has no state. Note that 
both types of components can use props.
1. Stateless Component:
```bash
import React from 'react'
const ExampleComponent = (props) => {
 return <h1>Stateless Component - {props.message}</h1>;
};
const App = () => {
 const message = 'React Interview Questions'
 return (
 <div>
 <ExampleComponent message={message} />
 </div>
 );
};
export default App;
```

### The above example shows a stateless component named ExampleComponent which is inserted in the <App/> component. The ExampleComponent just comprises of a <h1> element. Although the Stateless component has no state, it still receives data via props from a parent component.
2. Stateful Component:
```bash
import React, { useState } from 'react'
const ExampleComponent = (props) => {
 const [email, setEmail] = useState(props.defaultEmail)
 const changeEmailHandler = (e) => {
 setEmail(e.target.value)
 }
 return (
 <input type="text" value={email} onChange={changeEmailHandler} />
 );
}
const App = () => {
 const defaultEmail = "suniti.mukhopadhyay@gmail.com"
 return (
 <div>
 <ExampleComponent defaultEmail={defaultEmail} />
 </div>
 );
};
export default App;
```
### The above example shows a stateful component named ExampleComponent which is inserted in the <App/> component. The ExampleComponent contains a <input>. First of all, in the ExampleComponent, we need to assign defaultEmail by props to a local state by a useState() hook in ExampleComponent.Next, we have to pass email to value property of a input tag and pass a function changeEmailHandler to an onChange() event for a purpose keeping track of the current value of the input.

## Q. What is the difference between Component and Container in React?
The presentational components are concerned with the look, container components are concerned with making things work.
For example, this is a presentational component. It gets data from its props, and just focuses on showing an element
/**
* Presentational Component
* 
```bash
**/
const Users = props => (
 <ul>
 {props.users.map(user => (
 <li>{user}</li>
 ))}
 </ul>
)
```
On the other hand this is a container component. It manages and stores its own data, and uses the presentational component to
display it.
```bash
/**
* Container Component
* 
**/
class UsersContainer extends React.Component {
 constructor() {
 this.state = {
 users: []
 }
 }
 componentDidMount() {
 axios.get('/users').then(users =>
 this.setState({ users: users }))
 )
 }
 render() {
 return <Users users={this.state.users} />
 }
}
```
### Q. How to import and export components using 
React.js?
// Importing combination
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Wrapping components with braces if no default exports
import { Button } from './Button';
// Default exports ( recommended )
import Button from './Button';
class DangerButton extends Component {
 render()
 {
 return <Button color="red" />;
 }
}
export default DangerButton;
// or export DangerButton;

By using default you express that's going to be member in that module which would be imported if no specific member name is 
provided. You could also express you want to import the specific member called DangerButton by doing so: import { DangerButton 
} from './comp/danger-button'; in this case, no default is needed

## Q. What is difference between declarative and imperative in React.js?
1. Imperative programming:
It is a programming paradigm that uses statements that change a program's state.
```bash
const string = "Hi there , I'm a web developer";
let removeSpace = "";
for (let i = 0; i < i.string.length; i++) {
 if (string[i] === " ") removeSpace += "-";
 else removeSpace += string[i];
}
console.log(removeSpace);
```
In this example, we loop through every character in the string, replacing spaces as they occur. Just looking at the code, it doesn't say 
much. Imperative requires lots of comments in order to understand code. Whereas in the declarative program, the syntax itself 
describes what should happen and the details of how things happen are abstracted way.
2. Declarative programming:
It is a programming paradigm that expresses the logic of a computation without describing its control flow.
Example:
```bash
const { render } = ReactDOM
const Welcome = () => (
 <div id="App">
 //your HTML code 
 //your react components
 </div>
)
render(
<App />,
document.getElementById('root')
)
```
React is declarative. Here, the Welcome component describes the DOM that should be rendered. The render function uses the 
instructions declared in the component to build the DOM, abstracting away the details of how the DOM is to be rendered. We can 
clearly see that we want to render our Welcome component into the element with the ID of 'target'.

## Q. What is the difference between Element and Component?
1. React Element:
It is a simple object that describes a DOM node and its attributes or properties. It is an immutable description object and you can 
not apply any methods on it.
```bash
const element = <h1>React Element Example!</h1>;
ReactDOM.render(element, document.getElementById('app'));
2. React Component:
It is a function or class that accepts an input and returns a React element. It has to keep references to its DOM nodes and to the 
instances of the child components.
function Message() {
 return <h2>React Component Example!</h2>;
}
ReactDOM.render(<Message />, document.getElementById('app'));
```
## Q. How to conditionally render components in react?
Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In 
React, it allows us to render different elements or components based on a condition.
1. Element Variables:
You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output 
doesn't change.
```bash
function LogInComponent(props) {
 const isLoggedIn = props.isLoggedIn;
 if (isLoggedIn) {
 return <UserComponent />;
 }
 return <GuestComponent />;
}
ReactDOM.render(
 <LogInComponent isLoggedIn={false} />,
 document.getElementById('root')
);
```
2. Inline If-Else with Conditional Operator:
```bash
render() {
 const isLoggedIn = this.state.isLoggedIn;
 return (
 <div>
 {isLoggedIn
 ? <LogoutButton onClick={this.handleLogoutClick} />
 : <LoginButton onClick={this.handleLoginClick} />
 }
 </div>
 );
}

```
## Q. How to conditionally add attributes to React 
components?
Inline conditionals in attribute props
/**
* Conditionally add attributes
*/
```bash
import React from "react";
export default function App() {
 const [mood] = React.useState("happy");
 const greet = () => alert("Hi there! :)");
 return (
 <button onClick={greet} disabled={"happy" === mood ? false : true}>
 Say Hi
 </button>
 );
}
```
## Q. How would you prevent a component from rendering?
React shouldComponentUpdate() is a performance optimization method, and it tells React to avoid re-rendering a component, 
even if state or prop values may have changed. This method only used when a component will stay static or pure.
The React shouldComponentUpdate() method return true if it needs to re-render or false to avoid being re-render.
Syntax:
```bash
shouldComponentUpdate(nextProps, nextState){ }
```
## Example:
* Prevent a component from rendering

```bash
export default class App extends React.Component {
 constructor() {
 super();
 this.state = {
 countOfClicks: 0
 };
 this.handleClick = this.handleClick.bind(this);
 }
 handleClick() {
 this.setState({
 countOfClicks: this.state.countOfClicks + 1
 });
 }
 shouldComponentUpdate(nextProps, nextState) {
 console.log("this.state.countOfClicks", this.state.countOfClicks);
 console.log("nextState.countOfClicks", nextState.countOfClicks);
 return true;
 }
 render() {
 return (
 <div>
 <h2>shouldComponentUpdate Example</h2>
 <p>Count of clicks: <b>{this.state.countOfClicks}</b></p>
 <button onClick={this.handleClick}>CLICK ME</button>
 </div>
 );
 }
}
```

## Q. When would you use StrictMode component in React?
The StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible 
UI. It activates additional checks and warnings for its descendants.
Strict mode checks are run in development mode only; they do not impact the production build.

Example:
* StrictMode

```bash
import { StrictMode } from "react";
import MyComponent from "./MyComponent";
export default function App() {
 return (
 <StrictMode>
 <MyComponent />
 </StrictMode>
 );
}

