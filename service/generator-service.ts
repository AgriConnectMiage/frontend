import { faker } from "@faker-js/faker";

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

export const generatorService = {
  generateFarmer,
};
