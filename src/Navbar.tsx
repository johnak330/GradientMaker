import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-background">
      <div className="navcontainer">
        <div className="navbox">
          <button className="signinbtn">Sign In</button>
          <button className="signoutbtn">Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
