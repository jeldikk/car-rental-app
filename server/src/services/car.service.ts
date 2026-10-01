import { Car } from "../models/car.model";
import { Types } from "mongoose";
import { CarInput } from "../types/car.types";
export async function getAllCars() {
  try {
    const cars = await Car.find();
    return cars;
  } catch (err) {
    console.error("Error fetching all cars:", err);
    throw new Error("Failed to fetch all cars");
  }
}

export async function getCarById(id: string) {
  try {
    const car = await Car.findById({ _id: new Types.ObjectId(id) });
    return car;
  } catch (err) {
    console.error("Error fetching car by ID:", err);
    throw new Error("Failed to fetch car by ID");
  }
}

export async function createCar(carInput: any) {
  try {
    console.dir({ carInput });
    const createdCar = await Car.create(carInput);
    return createdCar;
  } catch (err) {
    console.error("Error creating car:", err);
    throw new Error("Failed to create car");
  }
}

export async function updateCar(id: string, carInput: CarInput) {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      { _id: new Types.ObjectId(id) },
      carInput,
      { new: true },
    );
    return updatedCar;
  } catch (err) {
    console.error("Error updating car:", err);
    throw new Error("Failed to update car");
  }
}

export async function deleteCar(id: string) {
  try {
    const deletedCar = await Car.findByIdAndDelete({
      _id: new Types.ObjectId(id),
    });
    return deletedCar;
  } catch (err) {
    console.error("Error deleting car:", err);
    throw new Error("Failed to delete car");
  }
}
