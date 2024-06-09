import type { Field } from "~/types/types";

const getAllFields = async (): Promise<Field[]> => {
  return await $fetch("http://localhost/api/management/fields");
};

export const fieldService = {
  getAllFields,
};
