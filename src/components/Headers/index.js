import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";

import './index.css'

const Headers = () => {
    return (
        <nav className="nav-header">
            <div className="nav-content">
                <img src="https://www.adapsychiatry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d9ef92fd.png&w=128&q=100" alt="logo" className='logo' />
                <h1 className='psy-heading'>PSYCHIATRY</h1>
                <div className="nav-bar-logo">
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link className="nav-link">
                                Who we are
                                <IoIosArrowDown className='down-icon' />
                            </Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link className="nav-link">
                                Who we treat
                                <IoIosArrowDown className='down-icon' />
                            </Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-menu-item">
                            <Link className="nav-link">
                                Resources
                                <IoIosArrowDown className='down-icon' />
                            </Link>
                        </li>
                    </ul>
                    <button
                        type="button" className='btn'
                    >
                        Book an ppointment
                    </button>

                </div>

                <div className='mobile-screen-container'>
                    
                        <img src="https://www.adapsychiatry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d9ef92fd.png&w=128&q=100" alt="logo" className='logo-small' />
                        <h1 className='psy-heading-small'>PSYCHIATRY</h1>
                   
                    <div>
                        <VscThreeBars className='more-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Headers