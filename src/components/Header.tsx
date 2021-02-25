import { Link } from 'react-router-dom';
import '../styles/header.scss';
function Header() {
  return (
    <header className='heading mb-2'>
      <Link to='/'>
        <h1>João's Game Shop</h1>
      </Link>
    </header>
  );
}

export default Header;
