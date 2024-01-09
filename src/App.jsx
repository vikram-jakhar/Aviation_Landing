import "./App.css";
import Loder from './assets/components/Loder'
import BackToTopButton from "./assets/components/BackToTop";
import BookTickets from "./assets/components/BookTickets";
import CustomerFeedback from "./assets/components/CustomerFeedback";
import EconomyTab from './assets/components/EconomyTab'
import Features from "./assets/components/Features";
import Footer from "./assets/components/Footer";
import Herosection from "./assets/components/Herosection";
import LetsFly from "./assets/components/LetsFly";
import Memories from "./assets/components/Memories";
import Newsletter from "./assets/components/Newsletter";
import Travellers from "./assets/components/Travelars";


function App() {
  

  return (
    <>
      <div>
        <Loder/>
        <Herosection />
        <EconomyTab/>
        <Features />
        <LetsFly/>
        <BookTickets/>
        <Travellers/>
        <Memories/> 
        <CustomerFeedback/>
        <Newsletter/>
        <BackToTopButton/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
