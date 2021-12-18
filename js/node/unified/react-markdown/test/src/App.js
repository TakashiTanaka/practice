import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function App() {
  const markdown = `Just a link: https://reactjs.com.`;

  return (
    <div className="App">
      <header className="App-header">
        {/* シンプルにHello worldsを表示 */}
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
        {/* remarkGfmプラグインを使って表示 */}
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </header>
    </div>
  );
}

export default App;
