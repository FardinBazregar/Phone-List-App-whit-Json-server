import ContactForm from "../components/ContactForm";

const NewContact = () => {
  return (
    <div className="container mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">New Contact</h1>
      <ContactForm />
    </div>
  );
};

export default NewContact;
