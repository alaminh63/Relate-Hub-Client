import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./AddContact.css";
const AddContact = () => {
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
    console.log(userInfo);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    fetch("https://relate-hub-server.vercel.app/contacts", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
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
          <div className="heading">Add Contacts</div>
          <form onSubmit={handleSubmit} className="form">
            <input
              required
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Contact Name"
            />
            <input
              required
              className="input"
              type="email"
              name="Email" // Make sure name attribute is "email"
              id="email"
              placeholder="E-mail"
            />
            <PhoneInput
              className="input"
              name="phone"
              id="email"
              international
              defaultCountry="BD"
              value={value}
              onChange={setValue}
            />

            <input
              required
              className="input"
              type="text"
              name="address"
              id="address"
              placeholder="Type Your Address"
            />
            <input
              required
              className="input"
              name="photoURL"
              type="text"
              id="photoURL"
              placeholder="Enter your PhotoURL Link"
            />

            <input className="login-button" type="submit" value="Add Contact" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
