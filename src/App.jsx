import Hero from "./Components/Hero";
import Companies from './Components/Companies'
import Guide from './Components/Guide'
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
function App() {
  return <>
    {/* <p>Hello</p> */}
    <Hero />
    <Companies></Companies>
    <Guide></Guide>
    <Properties></Properties>
    <Details></Details>
    <GetStarted></GetStarted>
    <Footer></Footer>
  </>;
}

export default App;
