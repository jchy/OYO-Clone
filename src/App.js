import logo from './logo.svg';
import './App.css';
import Footer from "./Components/footer/Footer";
import { ToolTip } from './Components/Tooltip';
import {Banner,Banner1} from './Components/banner/Banner';
import WorldwideMarketing from './Components/World/WorldwideMarketing';
import { Notify } from './Components/Notify';
function App() {
  return (
    <div className="App">
      <ToolTip/>
      <Banner1/>
      <Banner/>
     
      <Notify/>
      <WorldwideMarketing/>
     <Footer/>
     
    </div>
  );
}

export default App;
