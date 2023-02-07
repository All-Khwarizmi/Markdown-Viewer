import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
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
  const [formValue, setFormValue] = useState("")
  const TextArea = () => {
  return (
    <div>
      <form>
        <textarea name='text' id='text' cols='30' rows='10' value={formValue} onChange={() => onChange}></textarea>
      </form>
    </div>
  );
};
  return (
    <>
    <TextArea />
      <ReactMarkdown
        style={{ 'background-color': 'red' }}
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
      , document.body
    </>
  );
}

export default App;
