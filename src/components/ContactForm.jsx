import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CONTACTS_API = "http://localhost:3000/Contact";

const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", number: "" });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number"
          >
            Phone Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="number"
            type="text"
            placeholder="Enter your phone number"
            value={number}
            name="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
