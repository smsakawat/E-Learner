import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllCourses from './components/AllCourses/AllCourses';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import useAllCourses from './components/hooks/useAllCourses';
import useCart from './components/hooks/useCart';
import { addToDb, clearCourses, deleteFromLocal } from './components/LocalDb/LocalDb';
import Signup from './components/Signup/Signup';



export const RemoveContext = createContext();

function App() {

  const allCourses = useAllCourses();

  const [cart, setCart] = useCart(allCourses);


  const [items, setItems] = useState(0);

  useEffect(() => {
    setItems(cart.length)
  }, [cart])




  const addToCart = (id) => {
    const exists = cart.find(course => course.id === id);
    if (exists) {
      return;
    }
    else {
      const newCourse = allCourses.find(course => course.id === id);
      const newCart = [...cart, newCourse]
      setCart(newCart);
      addToDb(id);
    }

  }

  const handleRemove = (id) => {
    const remainingCourses = cart.filter(course => course.id !== id);
    setCart(remainingCourses);
    deleteFromLocal(id);
  }

  const handleBuy = () => {
    setCart([])
    clearCourses();
  }




  return (


    <RemoveContext.Provider value={[handleRemove, handleBuy]}>
      <Router>
        <Header
          items={items}
        ></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/categories/home'>
            <Home></Home>
          </Route>
          <Route exact path='/signup'>
            <Signup></Signup>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/allcourses'>
            <AllCourses
              addToCart={addToCart}
            ></AllCourses>
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart} ></Cart>
          </Route>
          <Route exact path='/categories/:category'>
            <Categories
              addToCart={addToCart}
            ></Categories>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>

      </Router>

    </RemoveContext.Provider>

  );
}

export default App;




