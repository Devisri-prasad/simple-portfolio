import React, { useEffect } from 'react'

function Github() {

  const [data,setData]=React.useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/Devisri-prasad')
    .then((response)=>response.json())
    .then(data=>{
      console.log(data)
      setData(data)
    })
  },[])
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