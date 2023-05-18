import Home from "./components/Home";
import SubHome from "./components/SubHome";
import Category from "./components/Category";
import Login from "./components/Login";
import Request from "./components/Request";
import EditProfile from "./components/editProfile";
import PageRequest from "./pages/PageRequests"
import PageLivros from "./pages/PageLivros"

/*import PageLivros from "./pages/PageLivros"*/

function App() {
  return (
    <>
      <Home />
      <Login />
      <SubHome />
      <Category />
      <Request />
      <EditProfile />
      <PageRequest />
      <PageLivros />

    </>
  );
}

export default App;
