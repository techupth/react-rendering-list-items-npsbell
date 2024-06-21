import "./App.css";
import Transaction from "./Transaction";

function App() {
  return (
    <div className="App">
      <div className="movie-list-title">Movie List Section</div>
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <Transaction />
      </section>
    </div>
  );
}

export default App;