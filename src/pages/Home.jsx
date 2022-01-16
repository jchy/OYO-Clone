import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// const Home = () => {
//   const isAuth = useSelector((state) => state.auth.isAuth);

//   if (!isAuth) {
//     return <Redirect to="/login-signup" />;
//   }
//   return (
//     <div>
//       <h3>Home Page</h3>
//     </div>
//   );
// };
// export default Home;

// import logo from './logo.svg';
// import './App.css';
import Footer from "../Components/footer/Footer";
import { ToolTip } from '../Components/Tooltip';
import {Banner,Banner1} from '../Components/banner/Banner';
import WorldwideMarketing from '../Components/World/WorldwideMarketing';
import { Notify } from '../Components/Notify';
function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/login-signup" />;
  }
  return (
    <div>
      <ToolTip/>
      <Banner1/>
      <Banner/>
      <Notify/>
      <WorldwideMarketing/>
     <Footer/>
    </div>
  );
}

export default Home;
