import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="sticky top-0 bg-white border-r-2 border-secondary/20">
      <div className="flex justify-around items-center  gap-5 h-full py-2">
        <Link to="/">
          <h2 className="text-2xl font-bold">RelateHub</h2>
        </Link>
        <div className="flex justify-center ">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded bg-primary text-white cursor-pointer"
                : "p-2 rounded group hover:bg-primary hover:text-white cursor-pointer transition-all"
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/addContact"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded bg-primary text-white cursor-pointer"
                : "p-2 rounded group hover:bg-primary hover:text-white cursor-pointer transition-all"
            }
          >
            <p>Add Contact</p>
          </NavLink>
          <NavLink
            to="/favoriteContacts"
            className={({ isActive }) =>
              isActive
                ? "p-2 rounded bg-primary text-white cursor-pointer"
                : "p-2 rounded group hover:bg-primary hover:text-white cursor-pointer transition-all"
            }
          >
            <p>Favorite Contacts</p>
          </NavLink>
        </div>
        <NavLink
          to="/login"
          className="p-2 rounded group  cursor-pointer transition-all  mt-auto"
        >
          <div className="">
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
                    className="hover:bg-primary hover:text-white p-2 rounded group"
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
      </div>
    </div>
  );
};

export default NavigationBar;
