import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from "../../services/car.service";

export const carResolvers = {
  Query: {
    cars: async () => {
      const cars = await getAllCars();
      return cars;
    },
    car: async (_: any, args: { id: string }) => {
      const car = await getCarById(args.id);
      return car;
    },
  },
  Mutation: {
    createCar: async (_: any, args: any) => {
      const createdCar = await createCar(args.carInput);
      return createdCar;
    },
    updateCar: async (_: any, args: { id: string; carInput: any }) => {
      const updatedCar = await updateCar(args.id, args.carInput);
      return updatedCar;
    },
    deleteCar: async (_: any, args: { id: string }) => {
      const deletedCar = await deleteCar(args.id);
      return deletedCar;
    },
  },
};
