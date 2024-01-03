import React, { useEffect, useState } from "react";
import ContactModal from "../Contacts/Components/ContactModal";
import FavoriteCards from "./FavoriteCards";

const FavoriteContacts = () => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState();
  useEffect(() => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteContacts(favoritesFromLocalStorage);
  }, []);

  return (
    <div>
      <h1 className="heading">Favorite Contacts</h1>
     
      <ContactModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contactId={contactId}
      />
      <div className="grid grid-cols-3 gap-4">
        {favoriteContacts.map((item) => (
          <FavoriteCards key={item._id} item={item}   />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
