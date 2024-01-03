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
    <div className="max-w-[1400px] mx-auto">
      <h1 className="heading my-4">Favorite Contacts</h1>
     
      <ContactModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contactId={contactId}
      />
      <div className="grid md:grid-cols-3 gap-4">
        {favoriteContacts.map((item) => (
          <FavoriteCards key={item?._id} item={item}   />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
