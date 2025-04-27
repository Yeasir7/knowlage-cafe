import BookMark from "../../BookMark/BookMark";

const BookMarks = ({bookMarks}) => {
    return (
        <div className="w-1/3">
            <h3 className="text-2xl font-bold mb-5">Bookmarked Blogs : {bookMarks.length}</h3>
            {
                bookMarks.map(bookMark => <BookMark bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;