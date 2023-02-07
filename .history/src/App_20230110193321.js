import eactMarkdown from 'react-markdown';
import './App.css';

function App() {
  ReactDom.render(
    <ReactMarkdown># Hello, *world*!</ReactMarkdown>,
    document.body
  );
  
}

export default App;
