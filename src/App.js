import './App.css';
import {Header} from './components/Header';
import SearchBar from './components/SearchBar';
import background1 from './img/buildingpurple.jpeg'
import {Footer} from './components/Footer';
function App() {
  return (
    <div className="font-sans" style={{ 
      backgroundImage: `url(${background1})`,
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'center'
    }}>
      <Header/>
      <br/>
      <SearchBar/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
