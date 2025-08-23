import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import Donations from './components/Donations/Donations';
import Activities from './components/Activities/Activities';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Mission />
      <Donations />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
