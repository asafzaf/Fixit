import axios from "axios";
import FormData from "form-data";

const BACKEND_URL = "https://fixit-gjwz.onrender.com";

export async function getAllFaults() {
  const faults = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/fault/");
  const data = JSON.parse(response.request._response);
  for (const fault of data.data.faults) {
    const faultObj = {
      _id: fault._id,
      domainId: fault.domainId,
      domainNameEng: fault.domainNameEng,
      domainNameHeb: fault.domainNameHeb,
      faultTypeId: fault.faultTypeId,
      faultTypeNameEng: fault.faultTypeNameEng,
      faultTypeNameHeb: fault.faultTypeNameHeb,
      buildingId: fault.buildingId,
      buildingName: fault.buildingName,
      outSide: fault.outSide,
      outSideId: fault.outSideId,
      outSideName: fault.outSideName,
      floor: fault.floor,
      spaceTypeId: fault.spaceTypeId,
      spaceTypeNameEng: fault.spaceTypeNameEng,
      spaceTypeNameHeb: fault.spaceTypeNameHeb,
      spaceNumber: fault.spaceNumber,
      spaceName: fault.spaceName,
      description: fault.description,
      status: fault.status,
      urgency: fault.urgency,
      reportByUser: fault.reportByUser,
      assignedToUser: fault.assignedToUser,
      resolvedAt: fault.resolvedAt,
      createdAt: fault.createdAt,
    };
    faults.push(faultObj);
  }
  return faults;
}

export async function getFaultById(faultId) {
  const response = await axios.get(BACKEND_URL + "/api/v1/fault/" + faultId);
  const fault = JSON.parse(response.request._response);
  return fault;
}

export async function getBuildingsByMaintenanceId(maintenaceId) {
  const response = await axios
    .get(BACKEND_URL + "/api/v1/maintenance/user/" + maintenaceId)
    .catch((error) => {
      console.log(error);
    });
  const buildings = JSON.parse(response.request._response);
  return buildings;
}
export async function getFaultsByBuildingIdAndStatus(buildingId, status) {
  const faults = [];
  const response = await axios
    .get(BACKEND_URL + "/api/v1/fault/building/" + buildingId).catch((error) => {
      return [];
    });
  const data = JSON.parse(response.request._response);
  for (const fault of data.data.fa) {
    if (fault.status === status) {
      const faultObj = {
        _id: fault._id,
        domainId: fault.domainId,
        domainNameEng: fault.domainNameEng,
        domainNameHeb: fault.domainNameHeb,
        faultTypeId: fault.faultTypeId,
        faultTypeNameEng: fault.faultTypeNameEng,
        faultTypeNameHeb: fault.faultTypeNameHeb,
        buildingId: fault.buildingId,
        buildingName: fault.buildingName,
        outSide: fault.outSide,
        outSideId: fault.outSideId,
        outSideName: fault.outSideName,
        floor: fault.floor,
        spaceTypeId: fault.spaceTypeId,
        spaceTypeNameEng: fault.spaceTypeNameEng,
        spaceTypeNameHeb: fault.spaceTypeNameHeb,
        spaceNumber: fault.spaceNumber,
        spaceName: fault.spaceName,
        description: fault.description,
        status: fault.status,
        urgency: fault.urgency,
        reportByUser: fault.reportByUser,
        assignedToUser: fault.assignedToUser,
        resolvedAt: fault.resolvedAt,
        createdAt: fault.createdAt,
      };
      faults.push(faultObj);
    }
  }
  return faults;
}

export async function getFaultsByBuildingId(buildingId) {
  const faults = [];
  const response = await axios.get(
    BACKEND_URL + "/api/v1/fault/building/" + buildingId
  );
  const data = JSON.parse(response.request._response);
  for (const fault of data.data.fa) {
    const faultObj = {
      _id: fault._id,
      domainId: fault.domainId,
      domainNameEng: fault.domainNameEng,
      domainNameHeb: fault.domainNameHeb,
      faultTypeId: fault.faultTypeId,
      faultTypeNameEng: fault.faultTypeNameEng,
      faultTypeNameHeb: fault.faultTypeNameHeb,
      buildingId: fault.buildingId,
      buildingName: fault.buildingName,
      outSide: fault.outSide,
      outSideId: fault.outSideId,
      outSideName: fault.outSideName,
      floor: fault.floor,
      spaceTypeId: fault.spaceTypeId,
      spaceTypeNameEng: fault.spaceTypeNameEng,
      spaceTypeNameHeb: fault.spaceTypeNameHeb,
      spaceNumber: fault.spaceNumber,
      spaceName: fault.spaceName,
      description: fault.description,
      status: fault.status,
      urgency: fault.urgency,
      reportByUser: fault.reportByUser,
      assignedToUser: fault.assignedToUser,
      resolvedAt: fault.resolvedAt,
      createdAt: fault.createdAt,
    };
    faults.push(faultObj);
  }
  return faults;
}

export async function getFaultsByUserId(userId) {
  const faults = [];
  const response = await axios.get(
    BACKEND_URL + "/api/v1/fault/user/" + userId
  );
  const data = JSON.parse(response.request._response);
  for (const fault of data.data.fa) {
    const faultObj = {
      _id: fault._id,
      domainId: fault.domainId,
      domainNameEng: fault.domainNameEng,
      domainNameHeb: fault.domainNameHeb,
      faultTypeId: fault.faultTypeId,
      faultTypeNameEng: fault.faultTypeNameEng,
      faultTypeNameHeb: fault.faultTypeNameHeb,
      buildingId: fault.buildingId,
      buildingName: fault.buildingName,
      outSide: fault.outSide,
      outSideId: fault.outSideId,
      outSideName: fault.outSideName,
      floor: fault.floor,
      spaceTypeId: fault.spaceTypeId,
      spaceTypeNameEng: fault.spaceTypeNameEng,
      spaceTypeNameHeb: fault.spaceTypeNameHeb,
      spaceNumber: fault.spaceNumber,
      spaceName: fault.spaceName,
      description: fault.description,
      status: fault.status,
      urgency: fault.urgency,
      reportByUser: fault.reportByUser,
      assignedToUser: fault.assignedToUser,
      resolvedAt: fault.resolvedAt,
      createdAt: fault.createdAt,
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

export async function getAllOutsided() {
  const outsides = [];
  const response = await axios.get(BACKEND_URL + "/api/v1/outside/");
  const data = JSON.parse(response.request._response);
  for (const outside of data.data.outsides) {
    const outsideObj = {
      _id: outside._id,
      name: outside.outsideName,
      name_hebrew: outside.outsideNameHeb,
      description: outside.outsideDescription,
      spaces: outside.spaces,
    };
    outsides.push(outsideObj);
  }
  return outsides;
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
  const form = new FormData();
  form.append("domainId", fault.domainId);
  form.append("domainNameEng", fault.domainNameEng);
  form.append("domainNameHeb", fault.domainNameHeb);
  form.append("faultTypeId", fault.faultTypeId);
  form.append("faultTypeNameEng", fault.faultTypeNameEng);
  form.append("faultTypeNameHeb", fault.faultTypeNameHeb);
  form.append("buildingId", fault.buildingId);
  form.append("buildingName", fault.buildingName);
  form.append("spaceTypeId", fault.spaceTypeId);
  form.append("spaceTypeNameEng", fault.spaceTypeNameEng);
  form.append("spaceTypeNameHeb", fault.spaceTypeNameHeb);
  form.append("spaceNumber", fault.spaceNumber);
  form.append("spaceName", fault.spaceName);
  form.append("reportByUser", fault.reportByUser);
  form.append("description", fault.description);
  form.append("urgency", fault.urgency);
  if (fault.photo) {
    form.append("photo", {
      uri: fault.photo,
      type: "image/jpeg",
      name: "photo.jpg",
    });
  }
  console.log(JSON.stringify(form));
  const response = await axios.post(BACKEND_URL + "/api/v1/fault/", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.request._response;
}

export async function createNewUser(
  new_name,
  email,
  password,
  confirmPassword
) {
  const response = await axios.post(BACKEND_URL + "/api/v1/user/signup", {
    name: new_name,
    email,
    password,
    passwordConfirm: confirmPassword,
  });
  return JSON.parse(response.request._response);
}

export async function loginUser(email, password) {
  const response = await axios.post(BACKEND_URL + "/api/v1/user/login", {
    email,
    password,
  });
  return JSON.parse(response.request._response);
}

export async function updateToInProgress(faultId, maintenaceId) {
  const response = await axios.put(
    BACKEND_URL + "/api/v1/fault/" + faultId,
    {
      maintananceUser: maintenaceId,
      status: "in-progress",
    }
  );
  return JSON.parse(response.request._response);
}

export async function updateToClosed(faultId, maintenaceId) {
  const response = await axios.put(
    BACKEND_URL + "/api/v1/fault/" + faultId,
    {
      maintananceUser: maintenaceId,
      status: "closed",
    }
  );
  return JSON.parse(response.request._response);
}