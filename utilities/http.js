import axios from "axios";

const BACKEND_URL = "https://fixit-gjwz.onrender.com";

export async function getAllFaults() {
  const faults = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/fault/");
  for (const fault in response.data.faults) {
    const faultObj = {
      _id: fault._id,
      domainNameEng: fault.domainNameEng,
      typeNameEng: fault.typeNameEng,
      spaceName: fault.spaceName,
    };
    faults.push(faultObj);
  }
  return faults;
}
