const ContactData = () => {
  return (
    <div className="mb-8">
      <div className="border-b-2 border-gray-300 mb-4">
        <h2 className="text-lg  mb-2 text-primary font-bold">Contact Data</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">The City</p>
          <p className="text-gray-700">Cairo</p>
        </div>
        <div>
          <p className="font-medium">Address</p>
          <p className="text-gray-700">
            9 El-Saada St.; Osman Bldgs. Roxy, Heliopolis
          </p>
        </div>
        <div>
          <p className="font-medium">Home Tel</p>
          <p className="text-gray-700">01099461559</p>
        </div>
        <div>
          <p className="font-medium">Mobile</p>
          <p className="text-gray-700"></p>
        </div>
        <div>
          <p className="font-medium">Email</p>
          <p className="text-gray-700"></p>
        </div>
        <div>
          <p className="font-medium">Fax</p>
          <p className="text-gray-700"></p>
        </div>
        <div>
          <p className="font-medium">Mail Box</p>
          <p className="text-gray-700">system Mail</p>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
