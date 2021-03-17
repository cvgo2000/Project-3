import axios from "axios";

export default {
  // Gets all trails
  getTrails: function (data) {
    return axios.get(`/api/trails`, data);
  },
  // Gets the trails with the given id
  getTrail: function (id) {
    return axios.get("/api/trails/" + id);
  },
  // Gets trails by city
  getTrailByCity: function (req) {
    return axios.get(req.body.location);
  },
  // Saves a trail to the database
  createTrail: function (trailData) {
    return axios.post(`/api/trails`, trailData).then((result) => result.data);
  },
  // Shows saved trails
  savedTrails: function () {
    return axios.get("/api/trails").then((result) => result.data);
  },
};
