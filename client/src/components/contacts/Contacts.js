import React, { Fragment, useContext } from "react";
import ContactItems from "./ContactItems";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItems key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
