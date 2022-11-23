import "./App.css";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Abouts } from "./components/Abouts";
import { Home } from "./components/Home";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";


function App() {
  return (
  <>
    <Router>
   <Routes><Route index element={<Home/>}></Route></Routes> 
{/* <Routes>   <Route path='/layout' element={<Layout/>}></Route></Routes> */}
<Routes>   <Route path='/home' element={<Home/>}></Route></Routes>
<Routes>   <Route path='/abouts' element={<Abouts/>}></Route></Routes>
 <Routes>  <Route path='/projects' element={<Projects/>}></Route></Routes>
<Routes>   <Route path='/contact' element={<Contact/>}></Route></Routes>

    </Router>
    </>
  );
}

export default App;
