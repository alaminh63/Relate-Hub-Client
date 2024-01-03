import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddContact from "../Pages/AddContact/AddContact";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Contacts from "../Pages/Contacts/Contacts";
import FavoriteContacts from "../Pages/FavouriteContacts/FavoriteContacts";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/addContact",
        element: <AddContact />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/favoriteContacts",
        element: <FavoriteContacts />,
      },
    ],
  },
]);

export default Router;
