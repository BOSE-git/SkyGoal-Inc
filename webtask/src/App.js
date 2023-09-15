import  Discount  from './components/Discount.jsx';
import './App.css';
import Destinations from './components/Destinations.jsx';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx';
import Review from './components/Review.jsx';
import Book from './components/Book.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Review />
      <Destinations/>
      <Discount/>
      <Book/>
    </div>
  );
}

export default App;
