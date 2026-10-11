import { gql } from "graphql-tag";

export const carTypeDefs = gql`
  type CarImage {
    id: ID!
    url: String!
    public_id: String!
  }

  type CarRating {
    value: Float!
    count: Int!
  }

  input CarInput {
    name: String!
    description: String!
    rentPerDay: Float!
    address: String!
    brand: String!
    year: Int!
    transmission: String!
    mileage: Float!
    power: Int!
    seats: Int!
    doors: Int!
    status: String!
    fuelType: String!
    category: String!
    reviews: [String]
  }

  input UpdateCarInput {
    name: String
    description: String
    rentPerDay: Float
    address: String
    brand: String
    year: Int
    transmission: String
    mileage: Float
    power: Int
    seats: Int
    doors: Int
    status: String
    fuelType: String
    category: String
    reviews: [String]
  }

  type Car {
    id: ID! # this means the ID is required and not nullable
    name: String
    description: String!
    status: String!
    rentPerDay: Float!
    mileage: Float!
    year: Int!
    power: Int!
    brand: String!
    transmission: String!
    fuelType: String!
    seats: Int!
    doors: Int!
    category: String!
    createdAt: String!
    updatedAt: String!
    images: [CarImage!]!
    ratings: CarRating!
  }

  input PaginationInputType {
    currentPage: Int
    itemsPerPage: Int
  }

  input CarFilters {
    searchTerm: String
    category: String
    fuelType: String
    brand: String
    pagination: PaginationInputType
  }

  type CarPaginatedResults {
    results: [Car!]!
    currentPage: Int!
    itemsPerPage: Int!
    totalItems: Int!
    totalPages: Int!
  }

  # In this we define all type of queries that we can perform on car type
  # for example; getting car list, getting car by ID etc.,
  type Query {
    cars(filters: CarFilters): CarPaginatedResults!
    car(id: ID!): Car
  }

  type Mutation {
    # Create a new car
    createCar(carInput: CarInput): Car
    updateCar(id: ID!, carInput: UpdateCarInput): Car
    deleteCar(id: ID!): Car
  }
`;
