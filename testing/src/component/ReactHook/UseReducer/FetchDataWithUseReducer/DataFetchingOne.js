import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setLoading(false)
        setPost(res.Data)
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setPost({})
        setError('Something Went Wrong')
      })
  }, [])
  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
