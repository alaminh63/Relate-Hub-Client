import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../../../Copmonents/ui/Modal";

const ContactModal = ({ isOpen, setIsOpen, contactId }) => {
  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/contacts/${contactId}`
        );
        setSingleContact(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (contactId) {
      fetchData();
    }
  }, [contactId]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2>Bangladesh</h2>
      <h2>{singleContact._id}</h2>
    </Modal>
  );
};

export default ContactModal;
