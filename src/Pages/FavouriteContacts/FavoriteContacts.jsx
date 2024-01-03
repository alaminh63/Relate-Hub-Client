import React, { useEffect, useState } from "react";
import FavoriteCards from "./FavoriteCards";


const FavoriteContacts = () => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteContacts(favoritesFromLocalStorage);
  }, []);

  return (
    <div>
      <h1>Favorite Contacts</h1>
      <div className="grid grid-cols-3 gap-4">
        {favoriteContacts.map((item) => (
          <FavoriteCards key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
