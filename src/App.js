import './App.css';
import Comments from './components/comments/Comments';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Catering from './components/main/Catering';
import Menu from './components/main/section1/Menu';
import Service from './components/main/section1/Service';
import Store from './components/main/store/Store';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Catering/>
      <Service/>
      <Menu/>
      <Store/>
      <Comments/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
