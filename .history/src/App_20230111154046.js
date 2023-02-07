import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import TextArea from './components/TextArea';

const markdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:


/// this is multi-line code:
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: [React.js documentation](https://reactjs.org)
 
An image : ![Paris le jour](../public/image.jpeg)

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
~~~javascript
// function that adds "2 numbers" together
const sumTwoNumbers = (num1, num2) => num1 + num2;
 
// call the function
console.log(sumTwoNumbers(1, 2)); // 3
 
// array of users
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bob", age: 25 },
];
 
// print out the users age 
console.log(users.map(user => user.age)); // [30, 28, 25]
~~~

`;

function App() {
  const [formValue, setFormValue] = useState(markdown);
  console.log(formValue);

  const onChange = (e) => {
    setFormValue(e.target.value);
  };

  return (
    <div className='App'>
      <img src='../public/image.jpeg' alt=''/>
      <div className='div-form'>
        <h1>Welcome</h1>
        <form>
          <label htmlFor='text'>Editor</label>
          <textarea
            className='text'
            key='text'
            name='text'
            id='editor'
            cols='76'
            rows='10'
            value={formValue}
            onChange={onChange}
          ></textarea>
        </form>
      </div>
      <h3>Preview</h3>
      <div id='preview' className='preview'>
        <ReactMarkdown
          children={formValue}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dark}
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
