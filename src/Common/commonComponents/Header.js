import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import Logo from "../../Assets/Images/logo2.jpg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  // console.log(user.photoURL);
  return (
    <Navbar
      className="py-4"
      expand="lg"
      sticky=""
      style={{ backgroundColor: "#fff", borderBottom: "1px solid #ccc" }}
    >
      <Container fluid>
        <Navbar.Brand className="text-secondary fw-bolder">
          <Link
            to="/"
            className="text-cyan text-decoration-none fw-bolder ms-md-5"
          >
            <img
              src={Logo}
              alt="logo"
              style={{ height: "60px", width: "50px", objectFit: "cover", marginRight: '7px' }}
            />
            Trackers Zone
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-md-0 me-lg-5 fw-semi-bold d-flex align-items-center">
            <Link to="/" className="text-decoration-none mx-2 mb-2 mb-md-0">
              <span className="text-muted mylink">Home</span>
            </Link>
            <Link
              to="/about"
              className="text-decoration-none  mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted mylink">About</span>
            </Link>
            <Link
              to="/allpackages"
              className="text-decoration-none  mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted mylink">Packages</span>
            </Link>
            {
              (user?.email || user?.displayName) && (
                <>
                  <Link
                    to="/myorders"
                    className="text-decoration-none  mx-2 mb-2 mb-md-0"
                  >
                    <span className="d-inline-block text-muted mylink mx-auto my-2">My Orders</span>
                  </Link>
                  <Link
                    to="/manageorders"
                    className="text-decoration-none  mx-2 mb-2 mb-md-0"
                  >
                    <span className="d-inline-block text-muted mylink mx-auto my-2">Manage Orders</span>
                  </Link>
                  <Link
                    to="/addorders"
                    className="text-decoration-none  mx-2 mb-2 mb-md-0"
                  >
                    <span className="d-inline-block text-muted mylink mx-auto my-2">Add Orders</span>
                  </Link>
                </>
              )
            }

            <div className="user-state-in-header ms-md-5">
              {user?.email || user?.displayName ? (
                <div className="userinfo">
                  <img
                    src={user?.photoURL}
                    alt="userimg"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "100%",
                      marginRight: "4px",
                      marginLeft: "8px",
                    }}
                  />
                  <span className="text-muted fw-bold mx-md-2 me-2">
                    {user?.displayName}
                  </span>
                  <Link to="/login" className="text-decoration-none">
                    <Button
                      onClick={logOut}
                      className=" fw-bold text-white ms-md-4 px-4 py-2"
                    >
                      LogOut
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="text-decoration-none ms-md-5">
                  <Button className="btn-light-green fw-bold text-white px-4 py-2">
                    LogIn
                  </Button>
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
