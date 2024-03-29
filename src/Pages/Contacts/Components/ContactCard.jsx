import { useEffect } from "react";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaHeart } from "react-icons/fa";
import "./contactCard.css";
import Swal from "sweetalert2";

const ContactCard = ({ contacts, handleModal }) => {
  const { name, email, photoURL, phone, address, _id } = contacts || {};

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: "{}",
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://relate-hub-server.vercel.app/deleteContact/${_id}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.error(err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(_id));
  }, [_id]);
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((favId) => favId !== _id);
    } else {
      favorites.push(_id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="border  p-2 rounded-xl shadow-lg  ">
      <div className="overflow-hidden relative  bg-gray-50 rounded-2xl text-sky-600 flex flex-col justify-end items-center gap-2">
        <svg
          className="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-current"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path
            className="svg-stroke-primary"
            d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          ></path>
        </svg>
        <div className="flex gap-1 items-center border-2 w-full justify-evenly ">
          <div>
            <img
              className="rounded-lg md:w-56 md:h-64 w-48 h-56"
              src={photoURL}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col  ">
              <p className="text-2xl font-semibold">{name}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
              <p>{email}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
              <p>{phone}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
              <p>{address}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
            </div>
          </div>
        </div>
        {/* <span className="font-extrabold text-7xl -skew-x-12 -skew-y-12 -mt-1 mb-5">70%</span> */}

        <div className="absolute md:top-3 top-2 right-3 z-10  ">
          <ul className="menu py-0 px-0  rounded-lg bg-sky-500 text-white text-base">
            <li>
              <details close>
                <summary className="hover:bg-sky-600 rounded-lg">Menu</summary>

                <li className="hover:bg-sky-600 rounded-lg ">
                  <p onClick={() => handleModal(contacts?._id)}>Update</p>
                </li>
                <li className="hover:bg-sky-600 rounded-lg">
                  <p onClick={() => handleDelete(_id)}>Delete</p>
                </li>
              </details>
            </li>
          </ul>
        </div>

        <button onClick={toggleFavorite} className="">
          <div className="tooltip-container">
            <span
              //       className={`  isFavorite ? "bg-yellow-400" : "bg-sky-500"
              //    tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white bg-sky-500`}
              className={`${
                isFavorite ? "bg-red-600" : "bg-sky-600"
              }  tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white rounded-full p-2`}
            >
              <p className="text-base">
                {isFavorite ? "Remove " : "Add to Favorites"}
              </p>
            </span>
            <span className="text">
              <div className="">
                <div
                  className={`${
                    isFavorite ? "bg-red-600" : "bg-sky-600"
                  } icon border-2 border-white bg-sky-500`}
                >
                  <FaHeart className="  text-white text-xl" />
                </div>
              </div>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
