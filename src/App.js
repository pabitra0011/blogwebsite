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
  Route,
  Routes,
  Link,
  Navigate
} from 'react-router-dom';

import Categorie from './pages/categories/Categorie';
import CityNav from './components/citynav/CityNav';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  const user = false;

  return (
    <AuthProvider>
      <CityContextProvider>
        <div className="App">
          <CityNav />
          <Router>
            <Navbar user={user} />

            <Routes>
              {/* <Route index element={<HomePage />} /> */}
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignInPage />} />
              <Route path='/login' element={<LogInPage />} />
              <Route path='/write' element={<WritePage />} />
              <Route path='/single/:postId' element={<SinglePage data={data} />} />
              <Route path='/userprofile' element={<UserSetting />} />
              <Route path='/categorie' element={<Categorie />} />
              <Route path='*' element={<HomePage />} />

            </Routes>
            <Footer />
          </Router>
        </div>
      </CityContextProvider>
    </AuthProvider>
  );

}

export default App;
