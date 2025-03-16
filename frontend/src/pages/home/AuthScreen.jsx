import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        navigate('/signup?email='+email)
    }
    return (
        <div className='hero-bg relative'>
            {/**Header Icon */}
            <header className='d-flex align-items-center justify-content-between p-4 '>

                <img src='netflix-logo.png' alt='logo' className='w-25' />
                <Link to={"/login"} className='text-white bg-danger py-1 px-2 rounded'> Sign In</Link>
            </header>

            <div className='d-flex flex-column align-items-center justify-content-center text-white'>
                <h1>Unlimited movies, Tv shows, and more</h1>
                <p>Watch anywhere. Cancel anytime</p>
                <p>Ready to watch? Enter your email to create or restart your membership</p>

                <form className='d-flex flex-direction-row align-items-center' onSubmit={handleSubmit}>
                    <input type='email'
                        placeholder='Enter your email id'
                        className=' p-1 m-3 rounded'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='text-white bg-danger p-1 m-1 rounded'> Get Started
                        <ChevronRightIcon />
                    </button>
                </form>
            </div>

            <div className='h-auto w-100 bg-dark py-1' aria-hidden='true' />

            {/** 1st section */}
            <div className="py-5 bg-black text-white">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center px-4 px-md-2">
                    {/* Left Side */}
                    <div className="flex-fill text-center text-md-start">
                        <h2 className="display-4 fw-bold mb-4">Enjoy on your TV</h2>
                        <p className="fs-5">
                            Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </p>
                    </div>
                    {/* Right Side */}
                    <div className="flex-fill position-relative d-flex justify-content-center">
                        <img src="/tv.png" alt="Tv image" className="mt-4 position-relative z-2 img-fluid" />
                        <video
                            className="position-absolute top-50 start-50 translate-middle w-50 z-1"
                            playsInline
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/hero-vid.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className='h-auto w-100 bg-dark py-1' aria-hidden='true' />
            {/** 2nd section */}

            <div className="py-5 bg-black text-white">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-center px-4 px-md-2">

                    {/* Left Side */}
                    <div className="flex-fill position-relative">
                        {/* Parent container for image and overlay */}
                        <div className="position-relative d-flex justify-content-center">
                            <img src="/stranger-things-lg.png" alt="Stranger Things img" className="mt-4 img-fluid" />

                            {/* Floating Div - Now Positioned Correctly */}
                            <div
                                className="d-flex align-items-center gap-3 position-absolute start-50 translate-middle-x bg-black
          w-75 w-md-50 border border-secondary rounded px-2"
                                style={{ bottom: "-3rem", height: "5rem" }}
                            >
                                <img src="/stranger-things-sm.png" alt="image" className="h-100" />
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="d-flex flex-column">
                                        <span className="fs-5 fw-bold">Stranger Things</span>
                                        <span className="fs-6 text-primary">Downloading...</span>
                                    </div>
                                    <img
                                        src="/download-icon.gif"
                                        alt="download icon"
                                        className="img-fluid"
                                        style={{ height: "2.5rem", objectFit: "contain" }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex-fill text-center text-md-start">
                        <h2 className="display-4 fw-bold mb-4">
                            Download your shows to watch offline
                        </h2>
                        <p className="fs-5">
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-auto w-100 bg-dark py-1' aria-hidden='true' />

            <div className="py-5 bg-black text-white">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
                    {/* Left Side */}
                    <div className="text-center text-md-start flex-fill">
                        <h2 className="display-4 fw-bold mb-3">Watch everywhere</h2>
                        <p className="fs-5">
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="position-relative flex-fill tv-container">
                        {/* TV Image */}
                        <img
                            src="/device-pile.png"
                            alt="Device image"
                            className="img-fluid position-relative z-2"
                        />

                        {/* Video inside TV */}
                        <video
                            className="video-inside-tv"
                            playsInline
                            autoPlay
                            muted
                            loop
                        >
                            {/* <source src="/video-devices.mp4" type="video/mp4" /> */}
                            <source src="/hero-vid.m4v" type="video/mp4" />

                        </video>
                    </div>
                </div>
            </div>

            <div className='h-auto w-100 bg-dark py-1' aria-hidden='true' />

            <div className="py-5 bg-black text-white">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
                    {/* Left Side */}
                    <div className="flex-fill text-center text-md-start">
                        <h2 className="display-4 fw-bold mb-3">Create profiles for kids</h2>
                        <p className="fs-5">
                            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="flex-fill text-center">
                        <img src="/kids.png" alt="Enjoy on your TV" className="img-fluid mt-3" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AuthScreen