import { faker } from "@faker-js/faker";
import { $fetch } from "ofetch";

const generateFarmer = async () => {
  const farmer = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    fieldSize: faker.number.int({ min: 1, max: 5 }),
  };
  await $fetch("http://localhost/api/management/farmers", {
    method: "POST",
    body: farmer,
  });
};

export const generatorService = {
  generateFarmer,
};
