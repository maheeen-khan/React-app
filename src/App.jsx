import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PopularCategories from './components/PopularCategories';
import Varieties from './components/Varieties.tsx';
import Contact from './components/Contact.tsx';

function App() {
  return (
    <>

      <Navbar />
      <Home />
      <PopularCategories />
      <Varieties />
      <Contact />

      
    </>
  );
}

export default App;
