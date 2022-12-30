import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AddPostForm from './components/AddPostForm'
import Header from './components/Header'
import PostsList from './components/PostsList'
import { loadPostsAction } from './redux/actions/postActions'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts') || "[]")

    if (posts?.length > 0) {
      dispatch(loadPostsAction(posts))
    }
  }, [dispatch])
  
  return (
    <div className='bg-[#f0f0f0] min-h-screen'>
      <Header />

      <AddPostForm />

      <PostsList />
    </div>
  )
}

export default App