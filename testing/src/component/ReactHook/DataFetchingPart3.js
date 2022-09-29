import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function DataFetchingPart3() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonlick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonlick}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [idFromButtonlick])

  return (
    <div>
      <h2>Fetch By Button Click</h2>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <p>{post.title}</p>
    </div>
  )
}

export default DataFetchingPart3

//context provide a way to pass data throught the component tree with having to pass
//props down manually at every level.
