import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './views/home_page/HomePage'
import NavBar from './components/nav_bar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
