import "./styles.css";
import Navbar from "./Components/NavBar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/footer/Footer";
import { ToolTip } from './Components/Tooltip';
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ToolTip/>
     <Footer/>
     
      <h3>me</h3>
    </div>
  );
}
