import React, { useReducer } from 'react'
import Axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something Went Wrong',
      }
    default:
      return state
  }
}

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.Data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [])

  return (
    <div>
      {state.loading ? 'loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo
