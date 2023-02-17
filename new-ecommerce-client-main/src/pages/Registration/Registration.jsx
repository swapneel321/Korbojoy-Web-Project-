import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";
import "./Registration.css";
const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    createUser,
    updateUser,
    signInWithGoogle,
    signInWithFacebook,
    verifyEmail,
  } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
            verifyEmail();
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  const handleGoogleSignIn = (name, email, password) => {
    signInWithGoogle();
    const user = { name, email, password };
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const saveUser = (name, email, password) => {
    const user = { name, email, password };
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  return (
    <div>
      <div className="Auth sign_in_all p-5">
        <div className="row ">
          <div className="col-md-6  p-lg-5 card">
            <div className="row ">
              <div className="col-md-6">
                <div className="log_img">
                  <img
                    src="/assets/images/5971191.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="registration_img">
                  <Link to={"/"}>
                    <img
                      src="/assets/images/Logo1.png"
                      alt="Logo"
                      className="registration_img_main"
                    />
                  </Link>
                </div>
                <form
                  className="infoForm authForm"
                  onSubmit={handleSubmit(handleSignUp)}
                >
                  <div className="form">
                    <input
                      type="text"
                      className="infoInput"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is Required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                    <input
                      type="email"
                      className="infoInput"
                      placeholder="Username or Email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                    <input
                      type="password"
                      className="infoInput"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters long",
                        },
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          message:
                            "Password must have uppercase, number and special characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </div>

                  <button className="def-btn btn-border w-100">Register</button>
                </form>
                <div className="text-center">
                  <span className="devider">or</span>
                </div>
                <div className="social-login-box text-center">
                  <i
                    className="fa-brands fa-facebook fs-1"
                    onClick={handleFacebookSignIn}
                  ></i>
                  <i
                    class="fa-brands fa-google fs-1 ms-4"
                    onClick={handleGoogleSignIn}
                  ></i>
                  {/* <button
                    className="def-btn btn-fb w-100"
                    onClick={handleFacebookSignIn}
                  ></button>
                  <button
                    className="def-btn btn-gl w-100 mt-3"
                    onClick={handleGoogleSignIn}
                  >
                  
                  </button> */}
                </div>
                <div className="mt-5">
                  <p>
                    By continuing, you agree to Korbojoy's Conditions of Use and
                    Privacy Notice.
                  </p>
                  <div className="d-flex">
                    <p className="me-2">Already have an account? </p>
                    <Link to={"/login"}>Sign in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
