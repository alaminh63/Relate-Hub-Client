import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt2, HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="bg-sky-500 ">
      <div className="max-w-7xl mx-auto">
        <motion.nav
          className="flex items-center justify-between w-full px-3 py-4 text-white  md:px-10"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1, type: "spring", stiffness: 120 }}
        >
          <span className="md:hidden">
            {toggle ? (
              <AiOutlineClose onClick={() => setToggle(!toggle)} />
            ) : (
              <HiMenuAlt2 onClick={() => setToggle(!toggle)} />
            )}
          </span>
          <div className="flex items-center gap-2">
            {/* <img className="object-cover w-12 h-12" src={logo} alt="" /> */}
            <Link to="/">
              <h1 className="text-3xl font-bold">RelateHub </h1>
            </Link>
          </div>

          <motion.ul
            className={` flex font-bold items-center duration-300 flex-col py-5 px-5 md:p-0 text-white bg-opacity-90 top-[13%] bg-sky-500 md:bg-transparent w-36 md:w-auto md:flex-row rounded-md   gap-6 absolute md:static z-50 ${
              toggle ? "top-0 left-0" : "-left-full duration-300"
            }`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, type: "spring", stiffness: 120 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/addContact"
              >
                AddContacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/favoriteContacts"
              >
                FavoriteContacts
              </NavLink>
            </li>
          </motion.ul>
          <NavLink
            to="/login"
            className="p-2 rounded group  cursor-pointer transition-all  mt-auto"
          >
            <div className="font-bold text-base">
              {user ? (
                <>
                  <div className="flex gap-4 ">
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <img
                          className=""
                          src={user?.photoURL}
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <button
                      className="hover:bg-sky-600 hover:text-white p-2 rounded group"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <button className="">Login</button>
                </Link>
              )}
            </div>
          </NavLink>
        </motion.nav>
      </div>
    </div>
  );
};

export default NavigationBar;
