
import { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./components/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Home/>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
