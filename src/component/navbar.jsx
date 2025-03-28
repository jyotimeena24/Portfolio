
import React from 'react';
import { Link } from "react-router";



function Navbar(){

    return(
             <>
             
             <div className='bg-slate-600 text-white text-2xl p-3'>
                

                <ul className='flex gap-9'>
                <li><Link to="/">Home</Link></li>
                  
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                   
                </ul>
             </div>
             </>
    )


}

export default Navbar;