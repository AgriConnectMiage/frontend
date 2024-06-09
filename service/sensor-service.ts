import type { Sensor } from "~/types/types";

const getAllSensors = async (): Promise<Sensor[]> => {
  return await $fetch("http://localhost/api/management/sensors");
};

export const sensorService = {
  getAllSensors,
};
