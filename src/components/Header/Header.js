import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1> REACT ROUTER TUTORIALS</h1>
      <ul className="App-header">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
