import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Tanish Vemu",
        email: "Tani@email.com",
        phone: "111-111-1111",
        type: "professional",
      },
      {
        id: 2,
        name: "Ravi Sridhar",
        email: "Ravi@email.com",
        phone: "903-329-9103",
        type: "personal",
      },
      {
        id: 3,
        name: "Ajay Kumar",
        email: "Ajay@email.com",
        phone: "123-100-1203",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
