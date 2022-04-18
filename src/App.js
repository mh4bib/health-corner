import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import CheckOuts from './component/CheckOuts/CheckOuts';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RequireAuth from './component/Login/RequireAuth/RequireAuth';
import Blogs from './component/Blogs/Blogs';
import AboutMe from './component/AboutMe/AboutMe';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkouts' element={
          <RequireAuth>
            <CheckOuts></CheckOuts>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
