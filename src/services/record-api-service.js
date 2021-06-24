import TokenService from "../services/token-service";
import config from "../config";

const RecordApiService = {
  getUserRecords() {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId(
        "user_id"
      )}/records`,
      {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    )
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .catch(error => {
        console.error(error);
      });
  },

  postUserRecord(
    recordId,
    location,
    time,
    onset,
    intensity,
    trigger,
    symptom,
    treatment,
    comment
  ) {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId(
        "userId"
      )}/records`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          record_id: recordId,
          location,
          time,
          onset,
          intensity,
          trigger,
          symptom,
          treatment,
          comment
        })
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteUserRecord(recordId, cb) {
    fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId(
        "userId"
      )}/records/${recordId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    )
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(data => {
        cb(recordId);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  },
  getUserStats() {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId("userId")}/stats`,
      {
        method: "GET",
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default RecordApiService;
