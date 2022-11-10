import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Login/Register/Register';
import ServiceDetails from './Page/ServiceDetails/ServiceDetails';
import Footer from './Page/Share/Footer/Footer';
import Header from './Page/Share/Header/Header';
import NotFound from './Page/Share/NotFound/NotFound';
import RequireAuth from './RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetails></ServiceDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
