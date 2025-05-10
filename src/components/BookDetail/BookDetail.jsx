import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    author,
    bookName,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  return (
    <div className="mt-14 gap-12 flex">
      <img
        className="h-[700px] bg-[#F3F3F3] p-16 rounded-2xl"
        src={image}
        alt=""
      />

      <div>
        <h2 className="text-[40px] font-bold">{bookName}</h2>
        <h4 className="text-xl mt-4 font-medium">By : {author}</h4>
        <p className="text-x mt-6 font-medium border-y-2 py-4">{category}</p>
        <article className="border-b-2 pb-6">
          <p className="mt-6 ">
            <strong>Review : </strong>
            <span className="text-[#5A5A5A]">{review}</span>
          </p>
          <div className="flex items-center mt-6">
            <strong className="mr-4">Tag</strong>
            {tags.map((tag, idx) => (
              <div key={idx} className="">
                <button className="font-medium text-[#23BE0A] py-[7px] px-4 bg-[#F4FCF3] rounded-3xl mr-3">
                  #{tag}
                </button>
              </div>
            ))}
          </div>
        </article>
        <div className="mt-6 flex gap-14 items-center">
          <div className="text-[#5A5A5A] space-y-3">
            <p>Number of Pages: </p>
            <p>Publisher:</p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
          </div>
          <div className="font-bold space-y-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="mt-8">
          {/* read button */}
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="font-semibold text-lg px-7 py-[18px] mr-9 border-2 hover:bg-[#50B1C9] duration-300 border-[#50B1C9] rounded-lg"
          >
            Read
          </button>
          {/* wishlist buttons */}
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="font-semibold text-lg px-7 py-[18px] bg-[#50B1C9] rounded-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
