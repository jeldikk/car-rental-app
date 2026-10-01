import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Car name is required"],
    },
    description: {
      type: String,
      required: [true, "Car description is required"],
    },
    year: {
      type: Number,
      required: [true, "Car year is required"],
    },
    status: {
      type: String,
      default: "Draft",
    },
    rentPerDay: {
      type: Number,
      required: [true, "Rent per day is required"],
    },
    address: {
      type: String,
      required: [true, "Car address is required"],
    },
    images: [
      {
        url: String,
        public_id: String,
      },
    ],
    brand: {
      type: String,
      required: [true, "Car brand is required"],
    },
    transmission: {
      type: String,
      required: [true, "Car transmission is required"],
    },
    mileage: {
      type: Number,
      required: [true, "Car mileage is required"],
    },
    power: {
      type: Number,
      required: [true, "Car power is required"],
    },
    seats: {
      type: Number,
      required: [true, "Car seats is required"],
    },
    doors: {
      type: Number,
      required: [true, "Car doors is required"],
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: [true, "Car fuel type is required"],
    },
    category: {
      type: String,
      enum: ["Sedan", "SUV", "Hatchback"],
      required: [true, "Car category is required"],
    },
    reviews: [String],
  },
  {
    timestamps: true,
  },
);

carSchema.virtual("ratings").get(function () {
  return {
    value: 5,
    count: 10,
  };
});

export const Car = mongoose.model("Car", carSchema);
