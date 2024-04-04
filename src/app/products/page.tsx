
"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import type { RootState } from '../../Store/store'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts} from '../../Store/productsslice'
const dispatch = useDispatch()
dispatch(getProducts())


export default function ProductsPage() {
    
    
    
    const list = useSelector((state: RootState) => state.products.list)
    const router = useRouter()
    const [products, setProducts] = useState(list)
    


    const onCreate = async () => {
        
    }


    
    const getUserDetails = async () => {console.log('heyre')
        const res = await axios.get('/api/products/list')
        console.log(res);
        
        
        setProducts(res.data.data)
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
                    {products.map((product: { _id: any; name: string; price: number; details: string; count: number }) => (
          <li className="p-2" key={product._id}>
                            <div>
                                <h2>{product.name}</h2>
                                <h4>{product.count } Available right now</h4>
                            </div>
                            <h4>{product.price}</h4>
                            <h2 className="p-1 rounded bg-green-500"><Link href={`/products/${product._id}`}>Details
            </Link></h2>
          </li>
        ))}
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
