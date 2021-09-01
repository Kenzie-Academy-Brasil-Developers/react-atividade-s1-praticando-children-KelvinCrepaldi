import "./App.css";
import CenteredCard from "./components/CenteredCard";
import Card from "./components/Card";

function App() {
  const titles = ["Yakisoba 1", "Yakisoba 2", "Yakisoba 3"];
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <Card title={titles[0]} />
          <Card title={titles[1]} />
          <Card title={titles[2]} />
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
