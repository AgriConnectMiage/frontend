import type { Actuator } from "~/types/types";

const getAllActuators = async (): Promise<Actuator[]> => {
  return await $fetch("http://localhost/api/management/actuators");
};

export const actuatorService = {
  getAllActuators,
};
