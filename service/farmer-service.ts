import type { Farmer } from "~/types/types";

const getAllFarmers = async (): Promise<Farmer[]> => {
  return await $fetch("http://localhost/api/management/farmers");
};

export const farmerService = {
  getAllFarmers,
};
