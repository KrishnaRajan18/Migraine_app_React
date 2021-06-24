import React from "react";
import RecordApiService from "../services/record-api-service";

export default class RecordMigraine extends React.Component {
  static defaultProps = {
    onAddRecord: () => {},
    onSetError: () => {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const { comments } = e.target;

    const locationSelected = document.querySelectorAll("#location ");
    const locationValues = Array.from(locationSelected)
      .map(opt => opt.value)
      .toString();

    const timeSelected = document.querySelectorAll("#time ");
    const timeValues = Array.from(timeSelected)
      .map(opt => opt.value)
      .toString();

    const onsetSelected = document.querySelectorAll("#onset ");
    const onsetValues = Array.from(onsetSelected)
      .map(opt => opt.value)
      .toString();

    const intensitySelected = document.querySelectorAll("#intensity ");
    const intensityValues = Array.from(intensitySelected)
      .map(opt => opt.value)
      .toString();

    const triggersSelected = document.querySelectorAll("#triggers");
    const triggerValues = Array.from(triggersSelected)
      .map(opt => opt.value)
      .toString();

    const symptomsSelected = document.querySelectorAll("#symptoms ");
    const symptomValues = Array.from(symptomsSelected)
      .map(opt => opt.value)
      .toString();

    const treatmentsSelected = document.querySelectorAll("#treatments ");
    const treatmentValues = Array.from(treatmentsSelected)
      .map(opt => opt.value)
      .toString();

    const record = {
      location: locationValues,
      time: timeValues,
      onset: onsetValues,
      intensity: intensityValues,
      trigger: triggerValues,
      symptom: symptomValues,
      treatment: treatmentValues,
      comment: comments.value
    };
    RecordApiService.postUserRecord(
      record.id,
      record.location,
      record.time,
      record.onset,
      record.intensity,
      triggerValues,
      symptomValues,
      treatmentValues,
      comments.value
    )
      .then(() => {
        comments.value = "";
        window.location = "/tracker";
      })
      .catch(this.props.onSetError);
  };

  render() {
    return (
      <div id="record-form">
        <form
          className="record-migraine-form"
          id="record-migraine-form"
          onSubmit={this.handleSubmit}
        >
          <h1>Record your migraine</h1>
          <fieldset>
            <div className="record-form-entry">
              <label className="label" htmlFor="location">
                Location of Attack:
              </label>
              <br></br>
              <select name="location" id="location">
                <optgroup role="group">
                  <option>Indoors</option>
                  <option>Work</option>
                  <option>Traveling</option>
                  <option>Car/Bus/Metro</option>
                  <option>Outdoors</option>
                  <option>Sleep</option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="time">
                Time of Attack:
              </label>
              <br></br>
              <select name="time" id="time">
                <optgroup role="group">
                  <option>Morning</option>
                  <option>Noon</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Late-evening</option>
                  <option>Overnight </option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="onset">
                Symptom prior of Attack:
              </label>
              <br></br>
              <select name="onset" id="onset">
                <optgroup role="group">
                  <option>Yawning</option>
                  <option>Muscle pain</option>
                  <option>Headache</option>
                  <option>Fatigue</option>
                  <option>Tingling in neck, face, or head</option>
                  <option>Hunger</option>
                  <option>Anxiety</option>
                  <option>Depressed mood</option>
                  <option>Increased energy</option>
                  <option>Prodrome</option>
                  <option>Aura</option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="intensity">
                Intensity of Pain:
              </label>
              <br></br>
              <select name="intensity" id="intensity" required>
                <optgroup role="group" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="triggers">
                Trigger :
              </label>
              <br></br>
              <select name="triggers" id="triggers">
                <optgroup role="group">
                  <option value="Lack of sleep">Lack of sleep</option>
                  <option>Dehydration</option>
                  <option>Stress</option>
                  <option>Anxiety</option>
                  <option>Caffeine</option>
                  <option>Storm/Humidity</option>
                  <option>Bright light</option>
                  <option>Processed food</option>
                  <option>Strong odor</option>
                  <option>Skipped beta blockers</option>
                  <option>Sinus</option>
                  <option>Alcohol</option>
                  <option>Sodium</option>
                  <option>Irregular sleep</option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="symptoms">
                Symptom during Attack:
              </label>
              <br></br>
              <select name="symptoms" id="symptoms">
                <optgroup role="group">
                  <option>Throbbing</option>
                  <option>Nausea</option>
                  <option>Vomiting</option>
                  <option>Insomnia</option>
                  <option>Depressed mood</option>
                  <option>Anxiety</option>
                  <option>Light sensitivity</option>
                  <option>Noise sensitivity</option>
                  <option>Smell sensitivity</option>
                  <option>Fatigue</option>
                  <option>Increased pain when moving</option>
                  <option>Blurred vision</option>
                  <option>Difficulty concentrating</option>
                  <option>Pressure in head</option>
                  <option>Pounding</option>
                  <option>Pulsating</option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="treatments">
                Treatment :
              </label>
              <br></br>
              <select name="treatments" id="treatments">
                <optgroup role="group">
                  <option>Medicine</option>
                  <option>Sleep</option>
                  <option>Rest</option>
                  <option>Caffeine</option>
                  <option>Dark room</option>
                  <option>Ice packs</option>
                  <option>Heating pad</option>
                  <option>Drinking water</option>
                  <option>Cold shower</option>
                  <option>Hot shower</option>
                  <option>Food</option>
                  <option>Music</option>
                </optgroup>
              </select>
            </div>

            <div className="record-form-entry">
              <label className="label" htmlFor="comments">
                Commets:
              </label>
              <br></br>
              <input type="text" name="comments" id="comments" />
            </div>

            <button type="submit">Record Entry</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
