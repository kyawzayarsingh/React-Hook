import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    //why we use [] in last of useEffect, becoz we can fetch only once the api
    //test with [] or without [], we have console.log(res),
    //you can see there, what the difference is
  }, [])
  return (
    <div>
      <h2>Get All Data from jsonplaceholder using Axios Get</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetching
