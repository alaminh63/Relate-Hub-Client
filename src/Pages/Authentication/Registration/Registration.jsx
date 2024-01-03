import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Registration = () => {
  const { createUser, profileInfoUpdate, loading, SignInWithGooglePopup } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //   if (loading) {
  //     return (
  //       <button className="btn loading bg-orange-500 w-full h-full flex items-center justify-center z-50">
  //         loading
  //       </button>
  //     );
  //   }
  const handleGoogle = () => {
    SignInWithGooglePopup()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setUser(null);
        setSuccess("Acount Create Success");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("");
        setError(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { displayName, photoURL, email, password };
    console.log(userInfo);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        profileInfoUpdate(displayName, photoURL)
          .then(console.log("info updated"))
          .catch((error) => {
            console.error(error);
          });
        setError("");
        setUser(null);
        setSuccess("Acount Create Success");
      })
      .catch((error) => {
        console.error(error);
        setSuccess("");
        setError(error.message);
      });
  };

  return (
    <div
      className="bg-[center_top_-1rem]   bg-cover bg-opacity-75 
    flex items-center justify-center min-h-screen "
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg?w=996&t=st=1684848119~exp=1684848719~hmac=a99cbc77defc36a7323f8f88bf91ef052f1500743b521c914610ae4c6a9062d4")',
      }}
    >
      <div>
        <div className="container">
          <div className="heading">Sign Up</div>
          <form onSubmit={handleSubmit} className="form">
            <input
              required
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
            <input
              required
              className="input"
              name="photoURL"
              type="text"
              id="photoURL"
              placeholder="Enter your PhotoURL Link"
            />
            <input
              required
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div>
              <p className="text-center ">{error}</p>
              <p className="text-center ">{success}</p>
            </div>
            <input className="login-button" type="submit" value="Sign Up" />
          </form>
          <div className="social-account-container">
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">
              <button onClick={handleGoogle} className="social-button google">
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              </button>
            </div>
          </div>
          <span className="agreement">
            <Link to="/login">
              <p className="text-sm">Already Have An Account? Login Here</p>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
