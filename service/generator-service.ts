import { faker } from "@faker-js/faker";

const FARMERS_IDS = ["0fa7df5e-5bcc-4425-89b9-df632b7995ac", "5cbd5ac1-8809-4197-a0c8-086b709ae646", "5e3c04fa-0311-43f2-884f-5dc8f9e8babc"]

const generateFarmer = async () => {
  const farmer = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    fieldSize: faker.number.int({ min: 1, max: 5 }),
  };
  return $fetch("http://localhost/api/management/farmers", {
    method: "POST",
    body: farmer,
    async onResponse() {
      await refreshNuxtData("farmers");
    },
  });
};

const generateField = async () => {
  const farmerId = FARMERS_IDS[faker.number.int({ min: 0, max: 2 })];
  const field = {
    id: faker.string.uuid(),
    xcoord: faker.number.int({ min: 0, max: 100 }),
    ycoord: faker.number.int({ min: 0, max: 100 }),
    farmerId,
  };

  return $fetch("http://localhost/api/management/fields", {
    method: "POST",
    body: field,
    async onResponse() {
      await refreshNuxtData("fields");
    },
  });
}

const generateSensor = async () => {
  const farmerId = FARMERS_IDS[faker.number.int({ min: 0, max: 2 })];

  const sensor = {
    farmerId
  };

  return $fetch("http://localhost/api/management/sensors", {
    method: "POST",
    body: sensor,
    async onResponse() {
      await refreshNuxtData("sensors");
    },
  });
}

const generateActuator = async () => {
  const farmerId = FARMERS_IDS[faker.number.int({ min: 0, max: 2 })];
  const actuator = {
    farmerId
  };

  return $fetch("http://localhost/api/management/actuators", {
    method: "POST",
    body: actuator,
    async onResponse() {
      await refreshNuxtData("actuators");
    },
  });
}

export const generatorService = {
  generateFarmer,
  generateField,
  generateSensor,
  generateActuator,
};
