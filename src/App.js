import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Productt from './Components/Productt';
import { Switch, Route } from 'react-router-dom';
import { Cart } from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    < >
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Product} />
        <Route exact path='/products/:id' component={Productt} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      
      


    </>
  );
}

export default App;
