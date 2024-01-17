import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Router from "./router/index";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#9DB2BF" highlightColor="#526D82" >
      <Header />
      <Router />
     {/*  <Footer /> */}
      </SkeletonTheme>
    </>
  );
}

export default App;
