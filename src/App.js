import 'bootstrap/dist/css/bootstrap.min.css';
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
import Signup from './components/Signup/Signup';




function App() {
  return (
    <Router>
      <Header></Header>
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
          <AllCourses></AllCourses>
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>
        <Route exact path='/categories/:category'>
          <Categories></Categories>
        </Route>

        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>

    </Router>
  );
}

export default App;




