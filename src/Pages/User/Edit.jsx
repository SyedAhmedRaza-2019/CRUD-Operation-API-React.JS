import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const navigate=useNavigate()
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((responce) => {
      setName(responce.data.name);
      setEmail(responce.data.email);
      setPhone(responce.data.phone);
    });
  }, [id]);

  const data ={
    name:name,
    email:email,
    phone:phone
  }

  const updateHandler =(event)=>{
    event.preventDefault()
    axios.put(`http://localhost:3003/users/${id}`,data).then(navigate('/'))
  }

  return (
    <div className='w-screen h-full justify-center flex flex-col items-center mt-16'>
      <h1 className='text-3xl font-semibold'>Edit User</h1>
      <form className='w-[80%] h-full flex flex-col justify-center items-center mt-4'>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' className='w-full mt-4 bg-white/10 text-xl outline-none border border-zinc-400 py-4 pl-6' />
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' className='w-full mt-4 bg-white/10 text-xl outline-none border border-zinc-400 py-4 pl-6' />
        <input type="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter Your Phone' className='w-full mt-4 bg-white/10 text-xl outline-none border border-zinc-400 py-4 pl-6' />
        <button onClick={updateHandler} className='w-full mt-4 bg-blue-600 text-xl text-white py-4 pl-6 font-semibold'>OK</button>
      </form>
    </div>
  )
}

export default Edit