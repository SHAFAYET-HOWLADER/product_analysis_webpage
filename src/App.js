import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import CopyRight from './Components/CopyRight/CopyRight';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotAvailAble from './Components/NotAvailAble/NotAvailAble';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
         <Route path='/' element={<Home/>}>Home</Route>
         <Route path='/home' element={<Home/>}>Home</Route>
         <Route path='/review' element={<Review/>}>Review</Route>
         <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
         <Route path='/blogs' element={<Blog/>}>Blogs</Route>
         <Route path='/about' element={<About/>}>About</Route>
         <Route path='/contact' element={<Contact/>}>Contact</Route>
         <Route path='*' element={<NotAvailAble/>}></Route>
     </Routes>
     <CopyRight></CopyRight>
    </div>
  );
}

export default App;
