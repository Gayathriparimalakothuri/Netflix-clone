import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUSer';

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useAuthStore();
  const handleLogin = (e) => {
    console.log("em",email,password)
    e.preventDefault()
    login({email,password})
  }

  return (
    <div className='hero-bg'>
      <header className='d-flex justify-content-start p-4 '>
        <Link to={"/"} className='w-25'>
          <img src='netflix-logo.png' alt='logo' className='w-100' />
        </Link>
      </header>

      <div className='d-flex justify-content-center mx-3 '>
        <div className="mx-auto p-4 bg-dark bg-opacity-25 rounded shadow-lg" style={{ maxWidth: "28rem", width: "100%" }}>
          <h5 className='text-white'>Login</h5>
          <form className='m-3' onSubmit={handleLogin}>
            <div className="text-start m-2">
              <label htmlFor="email" className="form-label text-white small">
                Email
              </label>
              <input
                type="email"
                className="form-control mt-1 bg-transparent text-white border-secondary"
                placeholder="you@example.com"
                id="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>

            <div className="text-start m-2">
              <label htmlFor="password" className="form-label text-white small">
                Password
              </label>
              <input
                type="password"
                className="form-control mt-1 bg-transparent text-white border-secondary"
                placeholder="........"
                id="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            <button className=' m-2 bg-danger text-white rounded' onClick={handleLogin}>Log In</button>

          </form>
          <div className='text-center text-white'>
            Don't have an account?{" "}
            <Link to={"/signup"} className='text-danger text-decoration-none'>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage