import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUSer';

function SignupPage() {
    const { searchParams } = new URL(document.location);
	const emailValue = searchParams.get("email");
    const [email,setEmail] = useState(emailValue || "");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const {signup} =useAuthStore()
    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log("formadata",email,password,username)
        signup({email,username,password})
    }
    

    return (
        <div className='hero-bg'>
            <header className='d-flex justify-content-start p-4 '>
                <Link to={"/"} className='w-25'>
                    <img src='netflix-logo.png' alt='logo' className='w-100' />
                </Link>
            </header>

            <div className='d-flex justify-content-center  mx-3 '>
                <div className="mx-auto p-4 bg-dark bg-opacity-25 rounded shadow-lg" style={{ maxWidth: "28rem", width: "100%" }}>
                    <h5 className='text-white'>SignUp</h5>
                    <form className='m-3' onSubmit={onSubmit}>
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
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="text-start m-2">
                            <label htmlFor="email" className="form-label text-white small">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control mt-1 bg-transparent text-white border-secondary"
                                placeholder="john"
                                id="username"
                                value={username}
                                onChange={(e)=>{setUsername(e.target.value)}}
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
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </div>
                    <button className=' m-2 bg-danger text-white rounded' onClick={onSubmit}>Sign up</button>

                    </form>
                    <div className='text-center text-white'>
						Already a member?{" "}
						<Link to={"/login"} className='text-danger text-decoration-none'>
							Sign in
						</Link>
					</div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;