import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const FavoriteCards = ({ item }) => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/contacts/${item}`
        );
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (item) {
      fetchData();
    }
  }, [item]);

  const { name, email, photoURL, phone, address, _id } = contacts || {};

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
              className="rounded-lg md:w-56 md:h-64 w-36 h-56"
              src={photoURL}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col  ">
              <p className="text-2xl font-semibold">{name}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-400"></p>
              <p>{email}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-400"></p>
              <p>{phone}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-400"></p>
              <p>{address}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-400"></p>
              {/* <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-sky-200 after:w-12 after:h-0.5   before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-sky-200 before:w-12 before:h-0.5">
                Up to
            </p> */}
            </div>
          </div>
        </div>
        {/* <span className="font-extrabold text-7xl -skew-x-12 -skew-y-12 -mt-1 mb-5">70%</span> */}

        {/* <div className="absolute md:top-3 top-2 right-3 z-10  ">
          <ul className="menu py-0 px-0  rounded-lg bg-sky-400 text-white text-base">
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
        </div> */}
      </div>
    </div>
  );
};

export default FavoriteCards;