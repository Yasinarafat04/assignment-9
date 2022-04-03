
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="mb-5">
      <Navbar />
     <Routes>
       <Route  path='*' element={<NotFound />}/>
       <Route path='/' element={<Home />}/>
       <Route path='/review' element={<Review />}/>
       <Route path='/dashboard' element={<Dashboard />}/>
       <Route path='/blogs' element={<Blogs />}/>
     </Routes>
    </div>
  );
}

export default App;
