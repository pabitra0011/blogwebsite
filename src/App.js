import { CityContextProvider, UserDataProvider } from './Usercontext';

import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import Posts from './components/posts/Posts';
import SlideBar from './components/slidebar/SlideBar';
import SinglePage from './pages/singleBlogPostPage/SinglePage';
import Footer from './components/footer/Footer';
import WritePage from './pages/writePage/WritePage';
import UserSetting from './pages/userSetting/UserSetting';
import LogInPage from './pages/loginPage/LogInPage';
import SignInPage from './pages/signInPage/SignInPage';

import data from './data/data'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Categorie from './pages/categories/Categorie';
import CityNav from './components/citynav/CityNav';

function App() {
  const user = true;

  return (
    <CityContextProvider>
      <div className="App">
        <CityNav />
        <Router>
          <Navbar user={user} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignInPage />} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/write' element={<WritePage />} />
            <Route path='/single/:postId' element={<SinglePage data={data} />} />
            <Route path='/userprofile' element={<UserSetting />} />
            <Route path='/categorie' element={<Categorie />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CityContextProvider>
  );

}

export default App;
