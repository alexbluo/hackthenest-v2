import { Completed, Item } from "@prisma/client";

const completed = (data: Completed[], target: Item): boolean => {
  return data.some(({ item }) => item === target);
};

export default completed;
