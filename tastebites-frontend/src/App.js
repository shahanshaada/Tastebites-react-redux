import Header from './shared-components/header/Header';
import Footer from './shared-components/footer/Footer';
import RecipeTemplate from './shared-components/RecipeTemplate/RecipeTemplate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import withAuth from './utils/withAuth';
import Logout from './components/Logout/Logout';


function App() {
  const HomeProtected = withAuth(Home);
  const AboutUsProtected = withAuth(About);
  const ContactProtected = withAuth(Contact);



  return (
    <Router >
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path='/about' element={<AboutUsProtected />} />
            <Route path='/contact' element={<ContactProtected />} />
            <Route path="/" element={<HomeProtected />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="/recipe/:id" element={<RecipeTemplate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
