import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <main>
          <header>
            <h1>Página inicial</h1>
            <h2>Seja bem-vindo(a) ao wiki da Techsa!</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              expedita odio dignissimos quisquam harum suscipit labore explicabo
              architecto quos. In.
            </p>
          </header>
        </main>
      </div>
    </div>
  );
}

export default App;
