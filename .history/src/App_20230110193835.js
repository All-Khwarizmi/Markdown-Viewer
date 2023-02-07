import ReactMarkdown from 'react-markdown';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';


function App() {
  ReactDom.render(
    <ReactMarkdown># Hello, *world*!</ReactMarkdown>,
    document.body
  );
  
}

export default App;
