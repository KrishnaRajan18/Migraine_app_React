import React from "react";
import RecordContext from "../context/record-context";
import "./stats.css";

export default function Stats() {
  return (
    <RecordContext.Consumer>
      {value => {
        if (value.location === undefined) {
          return (
            <div>
              <h2>No Statistics to show yet!!!!</h2>
            </div>
          );
        }
        return (
          <div className="stats">
            <div className="stats-container">
              <section>
                Most frequent location:
                <h2>{value.location}</h2>
                Most frequent intensity:
                <h2>{value.intensity}</h2>
                Most frequent onset sign:
                <h2>{value.onset}</h2>
                Your largest trigger:
                <h2>{value.trigger}</h2>
                Most frequent symptom:
                <h2>{value.symptom}</h2>
                Most helpful relief:
                <h2>{value.treatment}</h2>
              </section>
            </div>
          </div>
        );
      }}
    </RecordContext.Consumer>
  );
}
