import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home"
import Vision from "./component/Vision"
import Rules from "./component/Rules"
import Build from "./component/Build"
import Ground from './component/Ground';
import ComputerLab from './component/ComputerLab';
import Aim from "./component/Aim"
import Conduct from "./component/Conduct"
import Faq from "./component/Faq"
import Admission from './component/Admission';
import Login from "./component/Login"
import Data from "./component/Data"
import AdmissionData from './component/AdmissionData';
import Contact from "./component/COntactus"
import Gallery1 from "./component/Gallerymap"
import Result from "./component/Result"
import News from "./component/News"
import Library from "./component/Library"
import Smart from "./component/Smart"
import Chemistrylab from './component/Chemistrylabb';
import Biolab from './component/Bio';
import Musicroom from './component/Music';
import Sports from './component/Sports';
import Physicslab from './component/Physics';

function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
          <Route path='/'  Component={Home} />
          <Route path='/vision' Component={Vision} />
          <Route path='/rules' Component={Rules} />
          <Route path='/building' Component={Build} />
          <Route path='/ground' Component={Ground} />
          <Route path='/computer' Component={ComputerLab} />
          <Route path='/aim' Component={Aim} />
          <Route path='/conduct' Component={Conduct} />
          <Route path='/faq' Component={Faq} />
          <Route path='/admission' Component={Admission} />
          <Route path='/login' Component={Login} />
          <Route path='/data' Component={Data} />
          <Route path='/admissiondata' Component={AdmissionData} />
          <Route path='/contactus' Component={Contact} />
          <Route path='/gallery1' Component={Gallery1} />
          <Route path='/result' Component={Result} />
          <Route path='/news' Component={News} />
          <Route path='/library' Component={Library} />
          <Route path='/smartclass' Component={Smart} />
          <Route path='/chemistry' Component={Chemistrylab} />
          <Route path='/bio' Component={Biolab} />
          <Route path='/musicroom' Component={Musicroom} />
          <Route path='/sport' Component={Sports}/>
          <Route path='/physics' Component={Physicslab}/>


        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

