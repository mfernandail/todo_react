import logoSvg from '../assets/logo.svg';
import '../styles/Header.css'

function Header() {
  
  return (
    <header>
      <img className="header-logo" src={logoSvg} alt="Logo" />
      <h2 className="header-title">TODO App</h2>
    </header>
  )
}
export default Header;
