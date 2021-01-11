function Navbar() {
    return (
        <nav className="navbar navbar-default navfont navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav"><li><a className="navbar-link" href="/login">Log In</a></li></ul>
                    <ul className="nav navbar-nav"><li><a className="navbar-link" href="/register">Register</a></li></ul>
                </div>
            </div>
        </nav> 
    );
  }
  
  export default Navbar;