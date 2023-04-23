
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NoteFound from "./components/NoteFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NoteFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
