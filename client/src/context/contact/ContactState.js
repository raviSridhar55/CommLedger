import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
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
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };
  // Delete contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  //clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  //update contact

  //filter contacts

  //clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
