import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Goals from './components/Mission/Mission';
import Donations from './components/Donations/Donations';
import Activities from './components/Activities/Activities';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Goals />
      <br/>
      <br/>
      <Donations />
      <Activities />
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
