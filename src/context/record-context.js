import React from "react";

const RecordContext = React.createContext({
  records: [],
  id: "",
  date: "",
  location: "",
  time: "",
  onset: "",
  intensity: "",
  trigger: "",
  symptom: "",
  treatment: "",
  comment: "",
  addRecord: () => {},
  deleteRecord: () => {},
  updateRecord: () => {},
  addUser: () => {}
});

export default RecordContext;
