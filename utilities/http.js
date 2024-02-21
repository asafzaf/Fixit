import axios from "axios";

const BACKEND_URL = "https://fixit-gjwz.onrender.com";

export async function getAllFaults() {
  const faults = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/fault/");
  console.log(response._response.data.faults);
  for (const fault in response.data.faults) {
    const faultObj = {
      _id: fault._id,
      domainNameEng: fault.domainNameEng,
      typeNameEng: fault.typeNameEng,
      spaceName: fault.spaceName,
    };
    console.log(faultObj);
    faults.push(faultObj);
  }
  return response;
}
