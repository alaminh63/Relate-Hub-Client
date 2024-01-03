const ContactCard = ({ contacts }) => {
  const { name, email, photoURL, phone, address } = contacts || {};

  return (
    <div className="border p-2 ">
      <div className="flex justify-evenly mx-auto w-full">
        <div>
          <img className="rounded-lg mr-2 w-80 h-72" src={photoURL} alt="" />
        </div>
        <div className="gap-2 space-y-2 mx-auto w-full">
          <div className="bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-xl">
              <span className="text-sm">NAME</span> <br />
              {name}
            </h1>
          </div>
          <div className="flex mx-auto justify-between items-center bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-xl">
              <span className="text-sm">ADDRESS</span> <br />
              {address}
            </h1>
          </div>
          <div className=" bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-sm">
              {" "}
              <span className="text-sm">EMAIL</span> <br />
              {email}
            </h1>
          </div>
          <div className=" bg-slate-300 shadow-xl rounded-lg pl-5 pr-5 pt-2 pb-2 w-full">
            <h1 className="text-sm">
              {" "}
              <span className="text-sm">phone</span> <br />
              {phone}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
