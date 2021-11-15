import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import "./login.css";

const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(() => {
        history.push(redirect_uri);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    document.title = "Login | Trackers Zone";
  }, []);

  return (
    <section id="login">
      <Container>
        <Row>
          <div className="col-12 col-md-6 mx-auto shadow-lg login-box ">
            <h3 className="text-center text-white pt-5">SignIn with Google</h3>
            <div className="d-flex justify-content-center p-5">
              <i
                title="Google Login"
                onClick={handleGoogleLogin}
                className="fab fa-google text-primary me-4 login-icon fa-2x"
              ></i>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
