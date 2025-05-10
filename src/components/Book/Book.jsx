import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, rating, author, image, tags, category } = book;

  return (
    <section>
      <Link to={`/book/${bookId}`}>
        <div className="border-2 p-6 rounded-2xl mt-9 h-fit">
          <img
            className="h-[250px] rounded-2xl bg-[#F3F3F3] px-24 py-8"
            src={image}
            alt=""
          />
          <div>
            <div className="mt-6">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="font-medium text-[#23BE0A] py-[7px] px-4 bg-[#F4FCF3] rounded-3xl mr-3"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h3 className="text-2xl font-bold mt-6 ">{bookName}</h3>
            <p className="font-medium mt-4">By : {author}</p>
            <div className="flex justify-between items-center border-t-2 border-dashed pt-5 pb-6 mt-5  ">
              <span className="font-medium">{category}</span>
              <span className="flex items-center gap-2 font-medium">
                {rating} <FaRegStar className="text-orange-500" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Book;
