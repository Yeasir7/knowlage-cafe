const BookMark = ({bookMark}) => {
    const {title} = bookMark
    return (
        <div className="w-[351px] h-[98PX] text-center">
            <h1>{title}</h1>
        </div>
    );
};

export default BookMark;