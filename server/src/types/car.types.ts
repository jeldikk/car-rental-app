export type CarInput = {
  name: string;
  description: string;
  rentPerDay: number;
  brand: string;
  transmission: string;
  mileage: number;
  power: number;
  seats: number;
  doors: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  category: "Sedan" | "SUV" | "Hatchback";
  reviews?: string[];
};

export interface ICarFilters {
  searchTerm?: string;
  category?: string;
  fuelType?: string;
  brand?: string;
  pagination?: {
    currentPage?: number;
    itemsPerPage?: number;
  };
}
