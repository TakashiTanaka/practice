import './App.css';
import StarRating from './StarRating';


function App() {
  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={e => alert("double click")}
      />
    </div>
  );
}

export default App;
