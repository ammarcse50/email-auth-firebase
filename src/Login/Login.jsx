import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);

    const [succes,setSucess] = useState('')

    const [registerError, setRegisterError] = useState('')


  

  const handleForgetPass = () => {
    console.log("forget working", emailRef.current.value);
    

const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("reset done", email);
         setSucess('sucessfully reseted')
      })
      .catch((error) => {
     setRegisterError(error.massege);
        // ..
      });
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    setRegisterError('')
    setSucess('')
  

    const email = emailRef.current.value;
    const password = e.target.password.value;
 

     console.log(email,password)


    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    console.log(result.user)
     if(!result.user.emailVerified)
     {
      console.log("please verify your email")
      setRegisterError('please verify your email')
      return

     }
     else {
      console.log("successfully  login verified")
      setSucess("successfully Logged In")
     }
  })
  .catch((error) => {
         setRegisterError(error.massege)
  });

 
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmitHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgetPass}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            registerError && <p className="text-rose-500 text-xl font-semibold">{registerError}</p>
          }
          {
            succes && <p className="text-lime-500 font-semibold text-xl">{succes}</p>
          }
           <p>New to here please! <Link to="/register">Register!</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
