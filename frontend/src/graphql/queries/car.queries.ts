import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query GetAllCars {
    cars {
      id
      brand
      category
      createdAt
      description
      doors
      fuelType
      images {
        public_id
        url
      }
      mileage
      name
      power
      ratings {
        count
        value
      }
      rentPerDay
      seats
      status
      transmission
      updatedAt
      year
    }
  }
`;

export const GET_CAR_BY_ID = gql`
  query GetCarById($id: ID!) {
    car(id: $id) {
      id
      brand
      category
      createdAt
      description
      doors
      fuelType
      images {
        public_id
        url
      }
      mileage
      name
      power
      ratings {
        count
        value
      }
      rentPerDay
      seats
      status
      transmission
      updatedAt
      year
    }
  }
`;
