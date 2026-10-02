import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_CARS = gql`
  query GetCars {
    cars {
      id
      make
      model
      year
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No cars found</p>;
  return (
    <div className="home-page h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
    </div>
  );
}
