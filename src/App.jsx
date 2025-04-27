import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'
import { useState } from "react";

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [read, setRead] = useState(0)

  const handleBookMark = blog => {
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark);
  }

  const handleMarkAsRead = (time, id) => {
    setRead(prevRead => prevRead + time);

   
    const updatedBookMarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(updatedBookMarks);
  }

  return (
    <>
      <Header />
      <div className='md:flex container mx-auto gap-10'>
        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} />
        <BookMarks bookMarks={bookMarks} read={read} />
      </div>
    </>
  )
}

export default App;
