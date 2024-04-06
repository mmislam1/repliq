
"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import type { RootState } from '../../Store/store'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts} from '../../Store/productsslice'


export default function ProductsPage() {
    const dispatch = useDispatch()
    dispatch(getProducts())

    
    
    const list = useSelector((state: RootState) => state.products.list)
    const router = useRouter()
    const [products, setProducts] = useState(list)
    //console.log(products)
    


    const onCreate = async () => {
        
    }


    
    const getUserDetails = async () => {console.log('heyre')
        const res = await axios.get('/api/products/list')
        //console.log(res.data.data);
        
        
        
    }
    
    


    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            
        }
    }

    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Project</h1>
            <hr />
            

            <div className="flex flex-col items-center justify-center min-h-80 py-2">
        <h3>Products</h3>
        <hr />
            </div>
            


            <div className="flex flex-col p-4 min-w-80 bg-white">
                <ul>
                    
      </ul>

    </div>


    <div className="flex flex-col flex-gap-20 items-center justify-center min-h-20 g-10">    
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"
        >Logout</button>

        <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
    </div>

            </div>
    )
}
