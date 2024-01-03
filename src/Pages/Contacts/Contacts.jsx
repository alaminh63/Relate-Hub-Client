import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import ContactCard from "./Components/ContactCard";
import ContactModal from "./Components/ContactModal";
import "./Contacts.css";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [contactId, setContactId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((response) => setContacts(response))
      .catch((err) => console.error(err));
  }, [contacts]);

  const { photoURL, name, email, address, phone } = contacts;
  console.log(contacts);
  const handleModal = (_id) => {
    setContactId(_id);
    setIsOpen(!isOpen);
    console.log(_id);
  };
  return (
    <div className="">
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} _id={contacts} />
      <div className="grid md:grid-cols-3  gap-2 ">
        {contacts.map((item, i) => (
          <ContactCard key={i + 1} contacts={item} handleModal={handleModal}/>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
