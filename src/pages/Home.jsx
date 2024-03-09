import ContactList from "../components/ContactList";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-contact");
  };
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Contact List</h1>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add
        </button>
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
