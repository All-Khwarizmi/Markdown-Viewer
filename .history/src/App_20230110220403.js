import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
// import TextArea from './components/TextArea';

const markdown = '';

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
          style={{ 'background-color': 'red' }}
          children={formValue}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </>
  );
}

export default App;
