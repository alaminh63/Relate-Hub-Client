import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ContactCard from "./Components/ContactCard";
import "./Contacts.css";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((response) => setContacts(response))
      .catch((err) => console.error(err));
  }, []);

  const { photoURL, name, email, address, phone } = contacts;
  console.log(contacts);
  return (
    <div className="">
      <div className="grid grid-cols-3">
        {contacts.map((item, i) => (
          <ContactCard key={i + 1} contacts={item} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
