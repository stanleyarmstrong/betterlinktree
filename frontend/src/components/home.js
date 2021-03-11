import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
   return (
       <div>
           <h1 className = "tagline">
               One link to end all other links
           </h1>
           <p className = "hook">
               Open-Source and always free
           </p>
           <button >
               <Link to= "/signup">
                Create Yours Now!
                </Link>

           </button>
           <p>
               Already have an account?
               <Link to = '/login'>
                   Login
                </Link>
           </p>
       </div>
   ) 
}
export default Home;