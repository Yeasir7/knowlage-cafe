import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'
import {useState } from "react";

function App() {
  const [bookMarks, setBookMarks] = useState([])

  const handleBookMark = blog =>{
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark)
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto gap-10'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  )
}

export default App
