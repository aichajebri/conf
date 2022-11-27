import axios from "axios";

const CONFERENCE_REST_API_URL = "http://localhost:8090/api/Conference";

// class ConferenceService {
//   getConferences() {
//     return axios.get(CONFERENCE_REST_API_URL);
//   }
// }

// export default new ConferenceService();

// import axios from "axios";

const conferenceUrl = "http://localhost:8090/Conference/api";

export const getConferences = async () => {
  try {
    const { data } = await axios.get(`${conferenceUrl}`);
    return data;
  } catch (error) {
    console.log("Error while calling getConferences api ", error);
  }
};

// export const AddConference = async (conference) => {
//   return await axios.post(`${conferenceUrl}`, conference);
// };

// export const deteteconference = async (id) => {
//   return await axios.delete(`${conferenceUrl}/${id}`);
// };

// export const Editconference = async (id, conference) => {
//   return await axios.put(`${conferenceUrl}/${id}`, conference);
// };
