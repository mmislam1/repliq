
"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import type { RootState } from '../../Store/store'
import { useSelector, useDispatch } from 'react-redux'
import { info} from '../../Store/userslice'

export default function ProfilePage() {
    const count = useSelector((state: RootState) => state.user.info)
    const dispatch = useDispatch()
    


    const onCreate = async () => {
        
    }


    
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data.data);
        dispatch(info(res.data.data))
        setData(res.data.data.tasks)
    }
    
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const [task,setTask]= useState({title:'',details:''})


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
            <h1>Profile</h1>
            <hr />
            

            <div className="flex flex-col items-center justify-center min-h-80 py-2">
        <h1>Add Task</h1>
        <hr />
        <div className="flex flex-col flex-gap-20 items-center justify-center min-h-20">
        <label htmlFor="title">Title</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="title"
            type="text"
            
            onChange={(e) => setTask({...task, title: e.target.value})}
            placeholder="title"
                    />
                </div>

        <div className="flex flex-col flex-gap-20 items-center justify-center min-h-20">
        <label htmlFor="details">Details</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="details"
            type="textarea"
            
            onChange={(e) => setTask({...task, details: e.target.value})}
            placeholder="details"
            /></div>
            <button
                    onClick={onCreate}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Add Task</button>
            
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
