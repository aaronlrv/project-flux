import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App" class="h-screen">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
