import { LogOut, HeartHandshake, Users, ChefHat, Home } from 'lucide-react';
import logo from '../../public/images/logo-inter-armurerie-blanc.png';
import user_icon from '../../public/images/logo-inter-armurerie-blanc.png';
import "./Header.css";

export default function Header() {
  const token = localStorage.getItem('accessToken');

  function logout() {
    localStorage.clear();
    window.location = '/';
  }

  return (
    <div className="header bottom-0 w-full h-20">
      {/* Logo */}
      <div>
        <a href="/" className="header__logo">
          <img src={logo} alt="Logo Inter Armurerie" className="h-14" />
        </a>
      </div>

      {/* Liens de navigation */}
      <nav className="flex gap-8 text-lg">
        <a href="/" className="nav-link active">
          <Home className="inline-block mr-2" size={18} />
          Accueil
        </a>


        <a href="/nous-rejoindre" className="nav-link">
          <Users className="inline-block mr-2" size={18} />
          <a href="/contact">Nous Rejoindre</a>
          
        </a>
      </nav>

      {/* Boutons Connexion / Déconnexion */}
      {token ? (
        <a className="header__logout flex items-center text-red-500 cursor-pointer" onClick={logout}>
          <LogOut className="mr-2" />
          Déconnexion
        </a>
      ) : (
        <div className="flex items-center gap-4">
          <a className="header__connexion text-white px-4 py-2 rounded-lg flex items-center" href="/auth/login">
            {/* <img src={user_icon} alt="Profil Icon" className="w-5 h-5 mr-2" /> */}
            Connexion
          </a>

          <a className="header__inscription text-white px-4 py-2 rounded-lg flex items-center" href='/auth/register' >
            Inscription
          </a>
        </div>
      )}
    </div>
  );
}
