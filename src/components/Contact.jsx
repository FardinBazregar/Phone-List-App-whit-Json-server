// eslint-disable-next-line react/prop-types
const Contact = ({ name, number }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
      <p className="text-xl font-bold mb-2">Name: {name}</p>
      <p className="text-lg">Number: {number}</p>
    </div>
  );
};

export default Contact;
