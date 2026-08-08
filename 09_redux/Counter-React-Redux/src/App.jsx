import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center>
      <Container>
        <Header />
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls></Controls>
      </Container>
    </center>
  );
}

export default App;
