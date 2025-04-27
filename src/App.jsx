import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'
import {useState } from "react";

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [read, setRead] = useState(0)

  const handleBookMark = blog =>{
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark)
  }

  const handleMarkAsRead = time =>{
    setRead(read + time)
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto gap-10'>
        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookMarks={bookMarks} read={read}></BookMarks>
      </div>
    </>
  )
}

export default App
