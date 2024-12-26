import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PopularCategories from './components/PopularCategories';
import Varieties from './components/Varieties.tsx';
import Contact from './components/Contact.tsx';
import ReviewSection from './components/ReviewSection.tsx';
import OurServices from './components/OurServices.jsx';

function App() {
  return (
    <>

      <Navbar />
      <Home />
      <PopularCategories />
      <Varieties />
      <ReviewSection/>
      <OurServices/>
      <Contact />

      
    </>
  );
}

export default App;
