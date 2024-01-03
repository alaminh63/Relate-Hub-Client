import React, { useState, useEffect } from "react";
import ContactCard from "./Components/ContactCard";
import ContactModal from "./Components/ContactModal";

import "./Contacts.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, [contacts]);

  const handleModal = (id) => {
    setContactId(id);
    setIsOpen(!isOpen);
    console.log(id);
  };

  return (
    <div className="contacts-container">
      {" "}
      {/* Added a more descriptive className */}
      <ContactModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contactId={contactId}
      />
      <div className="grid md:grid-cols-3 gap-2">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contacts={contact}
            handleModal={handleModal}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
