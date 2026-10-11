export interface ICar {
  brand: string;
  category: string;
  createdAt: Date;
  description: string;
  doors: number;
  fuelType: string;
  id: string;
  address: string;
  images: {
    public_id: string;
    url: string;
  }[];
  mileage: number;
  name: string;
  power: number;
  rentPerDay: number;
  seats: number;
  status: string;
  transmission: string;
  year: number;
  ratings: {
    value: number;
    count: number;
  };
}
