import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBarIcons from './NavBarIcons';
import CreateListingModal from "../CreateListingModal";
// import MyListings from '../MyListings';


const NavBar = () => {
  const user = useSelector((state) => state.session?.user);

  return (
    <nav>
      <div id='navbarComponents'>
        <NavLink to='/' exact={true} activeClassName='active'>
          Getaway
          {/* <img
            id='logo'
            src=''
            alt='logo'
          ></img> */}
        </NavLink>
        {user &&
          < CreateListingModal />
        }
        <NavBarIcons user={user} />
        {/* <MyListings /> */}
      </div>
    </nav>
  );
};

export default NavBar;