import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data=useLoaderData()

  return (
    <>
    <div className='text-center m-4 bg-gray-600
    text-white p-4 text-3xl'>GitHub-Followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="avatar" />
    </div>
    <div className='text-center m-4 bg-gray-600
    text-white p-4 text-3xl'>GitHub: {data.login}</div>
    </>
  )
}

export default Github

export const githubinfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/Devisri-prasad')
  return response.json();
}