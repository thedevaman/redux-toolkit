import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{

    return(
        <div className="bg-gray-100 h-screen p-16">
             <h1 className="text-4xl font-bold">React Study</h1>
             <p className="text-4xl font-semibold mt-2">Understanding Redux in React JS</p>
             <div className="space-x-8 mt-8">
                <Link to="/">Home</Link>
                <Link to="/products">Product</Link>
             </div>

        </div>
       
    )

}

export default Home