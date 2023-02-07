import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
	
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


// import TextArea from './components/TextArea';

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |


`;

function App() {
  const [formValue, setFormValue] = useState('');
  console.log(formValue);

  const onChange = (e) => {
    setFormValue(e.target.value);
  };
 
  return (
    <>
      <div>
        <form>
          <textarea
            key='text'
            name='text'
            id='text'
            cols='30'
            rows='10'
            value={formValue}
            onChange={onChange}
          ></textarea>
        </form>
      </div>
      <div className='App'>
        <ReactMarkdown
          children={formValue}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                style={}
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
    </>
  );
}

export default App;
