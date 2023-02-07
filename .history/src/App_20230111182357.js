import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const markdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:


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
![React Logo w/ Text](https://www.svgrepo.com/show/327388/logo-react.svg)

`;

function App() {
  const [formValue, setFormValue] = useState(markdown);
  console.log(formValue);

  const onChange = (e) => {
    setFormValue(e.target.value);
  };

  return (
    <div className='App'>
      <div className='div-form'>
        <h1>Welcome</h1>
        <form className=''>
          <p className='preview-title'>Editor</p>
          <textarea
            className='text'
            name='editor'
            id='editor'
            cols='50'
            rows='10'
            value={formValue}
            onChange={onChange}
          ></textarea>
        </form>
      </div>

      
    </div>
  );
}

export default App;
