// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import Recomendation from './components/Recommendation';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderSection/>
      <Recomendation/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
