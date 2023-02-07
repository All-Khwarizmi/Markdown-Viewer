import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';


function App() {
  ReactDom.render(
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
    document.body
  );
  
}

export default App;
