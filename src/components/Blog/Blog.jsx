import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover,author, author_img,posted_date, reading_time, hashtags} = blog
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className="flex gap-6">
                   <img className='w-16' src={author_img} alt="" srcset="" />
                   <div>
                     <h3 className='text-2xl font-bold'>{author}</h3>
                     <p>{posted_date}</p>
                   </div>
                </div>
                <div className="">
                  <span>{reading_time} min read</span>
                </div>
            </div>
            <h4 className='text-4xl font-bold'>title : {title}</h4>
            {
                hashtags.map((hash, idx) => <span key={idx}>#<a href="">{hash}</a></span>)
            }
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;