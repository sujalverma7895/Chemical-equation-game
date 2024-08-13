import './App.css';
import React from 'react';
import Firststage from './firststage';
import Secondstage from './secondstage';
import Thirdstage from './thirdstage';
import Fourthstage from './forthstage';
import Fifthstage from './fifthstage';
import Sixthstage from './sixthstage';
import { Route,Routes } from 'react-router-dom';
function App() {

  return (<div>
<Routes>
      <Route path="/" element={<Firststage/>}></Route> 
      <Route path="/Secondstage" element={<Secondstage/>}></Route>
      <Route path="/Thirdstage" element={<Thirdstage/>}></Route>
      <Route path="/Fourthstage" element={<Fourthstage/>}></Route>
      <Route path="/Fifthstage" element={<Fifthstage/>}></Route>
      <Route path="/Sixthstage" element={<Sixthstage/>}></Route>
</Routes>
  </div>  );
}

export default App;
