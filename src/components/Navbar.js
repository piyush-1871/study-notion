import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { toast } from 'react-hot-toast';

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
        </Link>

        <nav className='mx-2 '>
            <ul className='flex gap-x-2 md:gap-x-6 text-gray-300'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex items-center text-gray-300 gap-x-4">
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-gray-800 py-[2px] md:py-[8px] px-[12px] rounded border border-gray-700'>Log in</button>
                </Link>
            }
            { !isLoggedIn &&  
                <Link to="/signup">
                    <button className='bg-gray-800 py-[2px] md:py-[8px] px-[12px] rounded border border-gray-700'>Sign up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-gray-800 py-[2px] md:py-[8px] px-[12px] rounded border border-gray-700' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>Logout</button>
                </Link>
            }
            { isLoggedIn &&  
                <Link to="/dashboard">
                    <button className='bg-gray-800 py-[2px] md:py-[8px] px-[12px] rounded border border-gray-700'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar