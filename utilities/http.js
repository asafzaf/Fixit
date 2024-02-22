import axios from "axios";

const BACKEND_URL = "https://fixit-gjwz.onrender.com";

export async function getAllFaults() {
  const faults = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/fault/");
  const data = JSON.parse(response.request._response);
  for (const fault of data.data.faults) {
    // console.log(fault);
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

export async function getAllBuildings() {
  const buildings = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/building/");
  const data = JSON.parse(response.request._response);
  for (const building of data.data.buildings) {
    const buildingObj = {
      _id: building._id,
      buildingName: building.buildingName,
      floorsNumber: building.floorsNumber,
      floors: building.floors,
      staircases: building.staircases,
    };
    buildings.push(buildingObj);
  }
  return buildings;
}

export async function getAllSpacesTypes() {
  const spacesTypes = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/space-type/");
  const data = JSON.parse(response.request._response);
  for (const spaceType of data.data.spaceTypes) {
    const spaceTypeObj = {
      _id: spaceType._id,
      hebrew: spaceType.hebrew,
      name: spaceType.name,
      type: spaceType.type,
      description: spaceType.description,
    };
    spacesTypes.push(spaceTypeObj);
  }
  return spacesTypes;
}

export async function getAllFaultDomains() {
  const domains = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/fault-domain/");
  const data = JSON.parse(response.request._response);
  for (const domain of data.data.faultDomains) {
    const domainObj = {
      _id: domain._id,
      id: domain.id,
      name: domain.name,
      name_hebrew: domain.name_hebrew,
      description: domain.description,
      icon: domain.icon,
      colors: domain.colors,
      types: domain.types,
    };
    domains.push(domainObj);
  }
  return domains;
}

export async function postFault(fault) {
  const response = await axios.post(BACKEND_URL + "/api/v1/fault/", fault);
  return response;
}
