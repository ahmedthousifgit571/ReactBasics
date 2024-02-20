import "./App.css";
import Header from "./components/Header";
function App() {
  const data = "Thousif";
  return (
    <div>
      <Header data={data} />
      <p>Im a MERN stack developer</p>
    </div>
  );
}

export default App;
