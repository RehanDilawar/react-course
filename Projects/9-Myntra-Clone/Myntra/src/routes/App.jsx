import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
