import axios from "axios";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import Modal from "../../../Copmonents/ui/Modal";

const ContactModal = ({ isOpen, setIsOpen, contactId }) => {
  const [singleContact, setSingleContact] = useState(null);
  const { name, email, address, photoURL, phone } = singleContact || {};
  const [value, setValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.Email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const photoURL = form.photoURL.value;
    const userInfo = { name, email, phone, address, photoURL };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    fetch(`https://relate-hub-server.vercel.app/contacts/${contactId}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://relate-hub-server.vercel.app/contacts/${contactId}`
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
      <div
        className="bg-[center_top_-1rem]   bg-cover bg-opacity-75 
    flex items-center justify-center min-h-screen "
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg?w=996&t=st=1684848119~exp=1684848719~hmac=a99cbc77defc36a7323f8f88bf91ef052f1500743b521c914610ae4c6a9062d4")',
        }}
      >
        <div>
          <div className="container">
            <div className="heading">Update Contact Information</div>
            <form onSubmit={handleSubmit} className="form">
              <input
                required
                className="input"
                type="text"
                name="name"
                id="name"
                defaultValue={name}
              />
              <input
                required
                className="input"
                type="email"
                name="Email" // Make sure name attribute is "email"
                id="email"
                defaultValue={email}
              />
              <PhoneInput
                className="input"
                name="phone"
                id="email"
                international
                defaultCountry="BD"
                defaultValue={value}
                onChange={setValue}
              />

              <input
                required
                className="input"
                type="text"
                name="address"
                id="address"
                defaultValue={address}
              />
              <input
                required
                className="input"
                name="photoURL"
                type="text"
                id="photoURL"
                defaultValue={photoURL}
              />

              <input
                className="login-button"
                type="submit"
                value="Update Info"
              />
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
