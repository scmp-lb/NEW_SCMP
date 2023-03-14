import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  Home from "../src/pages/Home"
import  Departments from "../src/pages/Departments"
import    Events from "../src/pages/Events"
import ContactUs from "../src/pages/ContactUs"
import StartUpWeekend from "../src/pages/StartUpWeekend"


function App () {
  return <>
  <Router>
<div className="App">
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Departments" element={<Departments/>}/>
  <Route path="/Events" element={<Events/>}/>
  <Route path="/ContactUs" element={<ContactUs/>}/>
  <Route path="/StartUpWeekend" element={<StartUpWeekend/>}/>
 </Routes>
</div>
  </Router>
  </>;
};

export default App;
