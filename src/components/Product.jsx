import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeProduct } from "../redux/slices/product-slice";

const Product = ()=>{
   const [products,setProducts] = useState([])
   const dispatch = useDispatch()
   const navigate = useNavigate()
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
           setProducts(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
 
    const viewProduct = (item) =>{
    dispatch(storeProduct(item))
    navigate('/products-details')
    }

    return(
        <div className="bg-gray-100 min-h-screen flex flex-col py-16 items-center">
            <div className="bg-white p-8 text-center shadow rounded-lg">
                <h1 className="text-5xl font-bold">Redux App</h1>
                <p className="mt-2 text-lg  text-gray-600">Click on any product to test your redux app</p>
            </div>
            <div className="w-10/12 mx-auto bg-white rounded-lg shadow p-8 my-12">
              <div className="grid grid-cols-4 gap-8">
                {
                 products.map((item, index)=>(
                    <div key={index} className="shadow-lg rounded-lg p-6 border flex flex-col gap-8">
                     <img src={item.image} alt="" 
                     className="w-full h-[250px] object-cover"
                     />
                     <h1 className="font-semibold text-lg">{item.title}</h1>
                     <label> ₹{item.price}</label>
                     <button onClick={()=>viewProduct(item)} className="bg-green-500 font-medium px-4 py-2 text-white rounded">Procuct Details</button>
                    </div>
                 ))
                }
              </div>
            </div>
        </div>
    )

}

export default Product