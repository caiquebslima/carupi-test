import { Link } from 'react-router-dom';
import '../styles/header.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <header className='heading mb-2'>
      <Link to='/'>
        <h1 className='m-0'>João's Game Shop</h1>
      </Link>
      <div className='icons'>
        <ShoppingCartIcon />
      </div>
    </header>
  );
}

export default Header;
