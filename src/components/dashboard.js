import React from "react";
import RecordContext from "../context/record-context";

import Stats from "../components/stats";

import RecordApiService from "../services/record-api-service";
import "./dashboard.css";

export default class Dashboard extends React.Component {
  state = {
    records: [],
    date: "",
    location: "",
    time: "",
    onset: "",
    intensity: "",
    trigger: "",
    symptom: "",
    treatment: "",
    comment: "",
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error: true });
  };

  componentDidMount() {
    RecordApiService.getUserStats()
      .then(resJson =>
        this.setState({
          date: resJson.date,
          location: resJson.location,
          time: resJson.time,
          onset: resJson.onset,
          intensity: resJson.intensity,
          trigger: resJson.trigger,
          symptom: resJson.symptom,
          treatment: resJson.treatment,
          comment: resJson.comment
        })
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const contextValue = {
      date: this.state.date,
      location: this.state.location,
      time: this.state.time,
      onset: this.state.onset,
      intensity: this.state.intensity,
      records: this.state.records,
      trigger: this.state.trigger,
      symptom: this.state.symptom,
      treatment: this.state.treatment,
      comment: this.state.comment
    };

    return (
      <RecordContext.Provider value={contextValue}>
        <div className="dashboard">
          <h1>Frequency of Attacks:</h1>
          <Stats />
        </div>
      </RecordContext.Provider>
    );
  }
}
