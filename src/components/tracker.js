import React from "react";
import RecordContext from "../context/record-context";
import RecordApiService from "../services/record-api-service";
import "./tracker.css";

export default class Tracker extends React.Component {
  state = {
    records: []
  };

  deleteRecord = recordId => {
    const newRecords = this.state.records.filter(rec => rec.id !== recordId);
    this.setState({
      records: newRecords
    });
  };

  componentDidMount() {
    RecordApiService.getUserRecords().then(resJson =>
      this.setState({
        records: resJson
      })
    );
  }

  handleDelete = e => {
    e.preventDefault();
    const { id } = e.target;
    const recordId = Number(id);
    RecordApiService.deleteUserRecord(recordId, this.deleteRecord(recordId));
  };

  render() {
    if (this.state.records.length === 0) {
      return (
        <div>
          <br></br>
          <br></br>
          <h1>No Records yet!</h1>
          <h2>Please create a new record</h2>
        </div>
      );
    } else {
      return (
        <div className="tracker" id="tracker">
          <h1>All Records</h1>
          <div className="record-container">
            {this.state.records.map(record => (
              <ul key={record.id} className="record-item">
                <p>
                  <strong>Location of attack:</strong> {record.location}
                </p>
                <p>
                  <strong>Time of day:</strong> {record.time}
                </p>
                <p>
                  <strong>Main onset symptom:</strong> {record.onset}
                </p>
                <p>
                  <strong>Intensity:</strong> {record.intensity}
                </p>
                <p>
                  <strong>Main trigger:</strong> {record.trigger}
                </p>
                <p>
                  <strong>Main symptom:</strong> {record.symptom}
                </p>
                <p>
                  <strong>Most helpful treatment:</strong> {record.treatment}
                </p>
                <p>
                  <strong>Additional Comments:</strong> {record.comment}
                </p>
                <button
                  id={record.id}
                  type="submit"
                  onClick={this.handleDelete}
                >
                  Delete Record
                </button>
              </ul>
            ))}
          </div>
        </div>
      );
    }
  }
}
