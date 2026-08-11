import { CgProfile } from "react-icons/cg";
import { IoHeartCircle } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log(bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/home-and-living">Home & Living</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="/studio">
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <ImSearch />
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <CgProfile />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <IoHeartCircle />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container">
          <IoBagHandleSharp />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
