import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function DataFetchingPart2() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <h2>Fetch By Input On Change</h2>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <ul>
        <li>{post.title}</li>
      </ul>
    </div>
  )
}

export default DataFetchingPart2
