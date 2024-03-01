import './App.css';
import { Route, Link, NavLink, BrowserRouter, Routes } from 'react-router-dom';
import Courses from './components/Courses';
import Blog from './components/Blog';

function App() {
  return (
    <div className='app'>
      {/* header */}
      <div className='header'>
        <h3>Menu (Dùng NavLink để tạo menu)</h3>
        <ul className='menu'>
          <li>
            <NavLink to="/Courses" activeClassName='active'>Danh sách khóa học</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName='active'>Blog</NavLink>
          </li>
        </ul>
        <hr />
      </div>
      {/* Content */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <hr />
      {/* Footer */}
      <div className='footer'>
        <h3>Footer</h3>
      </div>

    </div>
  );
}

export default App;
