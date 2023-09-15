import  Discount  from './components/Discount.jsx';
import './App.css';
import Destinations from './components/Destinations.jsx';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx';
import Review from './components/Review.jsx';
import Book from './components/Book.jsx';
import Testimonial from './components/Testimonial.jsx';
import PreFooter from './components/PreFooter.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Review />
      <Destinations/>
      <Discount/>
      <Book/>
      <Testimonial />
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default App;
