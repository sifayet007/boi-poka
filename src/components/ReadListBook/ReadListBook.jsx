import { IoLocationOutline } from "react-icons/io5";
import { SiPagekit } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { IoRemoveCircle } from "react-icons/io5";
import { useState } from "react";
const ReadListBook = ({ book }) => {
  const [removeBook, setRemoveBook] = useState("");
  const {
    bookId,
    image,
    author,
    bookName,
    category,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  const handleRemoveBook = (id) => {
    console.log(id);

    setRemoveBook(removeBook.filter((remove) => remove.bookId !== id));
  };

  return (
    <div className=" flex items-center justify-between border-2 p-6 rounded-2xl mt-12">
      <div className="flex gap-6">
        <img
          className="h-[241px] py-7 px-12 bg-[#F3F3F3] rounded-2xl"
          src={image}
          alt=""
        />
        <div>
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="my-4 font-medium">By : {author}</p>
          <div className="flex items-center">
            <div className="flex items-center">
              <strong className="mr-4">Tag</strong>
              {tags.map((tag, idx) => (
                <div key={idx} className="">
                  <button className="font-medium text-[#23BE0A] py-[7px] px-4 bg-[#F4FCF3] rounded-3xl mr-3">
                    #{tag}
                  </button>
                </div>
              ))}
            </div>
            <IoLocationOutline className="mr-2" />{" "}
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
          <div className="flex items-center mt-4 gap-4">
            <span className="flex items-center">
              <FaUserGroup className="mr-2" /> Publisher: {publisher}
            </span>
            <span className="flex items-center">
              <SiPagekit className="mr-2" /> Page {totalPages}
            </span>
          </div>
          <div className="flex pt-4 border-t-2 mt-4">
            <button className="font-medium text-[#328EFF] py-[7px] px-4  bg-[#E0EEFF] rounded-3xl mr-3">
              {category}
            </button>
            <button className="font-medium text-[#FFAC33] py-[7px] px-4 bg-[#FFE5BC] rounded-3xl mr-3">
              Ration {rating}
            </button>
            <button className="font-medium text-[#23BE0A] py-[7px] px-4 bg-[#F4FCF3] rounded-3xl mr-3">
              view Details
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemoveBook(bookId)}
          className="text-5xl text-[#ff3333]"
        >
          <IoRemoveCircle />
        </button>
      </div>
    </div>
  );
};

export default ReadListBook;
