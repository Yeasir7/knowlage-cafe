// import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookMark}) => {
    const {title, cover,author, author_img,posted_date, reading_time, hashtags} = blog
    return (
        <div className='mb-20'>
            <img className='w-full md:h-[450px] rounded-3xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className="flex gap-6 my-5">
                   <img className='w-16' src={author_img} alt=""/>
                   <div>
                     <h3 className='text-2xl font-bold'>{author}</h3>
                     <p>{posted_date}</p>
                   </div>
                </div>
                <div className="flex items-center">
                  <span>{reading_time} min read</span>
                  <button onClick={()=>handleBookMark(blog)} className='ml-3'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h4 className='text-4xl font-bold mb-5'>title : {title}</h4>
            {
                hashtags.map((hash, idx) => <span key={idx}>#<a href="">{hash}</a></span>)
            }
        </div>
    );
};

// Blog.PropTypes = {
//     blog: PropTypes.object.isRequired,
//     handleBookMark: PropTypes.func
// }

export default Blog;