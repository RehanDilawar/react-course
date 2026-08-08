import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
function App() {
  return (
    <center>
      <Container>
        <Header />
        <DisplayCounter />
        <Controls></Controls>
      </Container>
    </center>
  );
}

export default App;
