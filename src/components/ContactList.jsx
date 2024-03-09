// ContactList.jsx
import { useEffect, useState } from "react";
import Contact from "./Contact";

const CONTACTS_API = "http://localhost:3000/Contact";

const ContactList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(CONTACTS_API)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((contact) => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </div>
  );
};

export default ContactList;
