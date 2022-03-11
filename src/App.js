
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Landing from './Components/Landing';
import HomePage from './Components/Home';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<HomePage />}></Route>
     <Route exact path="/landing" element={<Landing />}></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
