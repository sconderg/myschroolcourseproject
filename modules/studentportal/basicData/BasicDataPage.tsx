import ContactData from "./ContactData";
import PersonalData from "./PersonalData";
import PrequalificationData from "./PrequalificationData";

const BasicDataPage = () => {
  return (
    <>
      <PersonalData />
      <ContactData />
      <PrequalificationData />
    </>
  );
};

export default BasicDataPage;
