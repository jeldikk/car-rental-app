import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_CAR_BY_ID } from "../graphql/queries/car.queries";
import CarDetails from "@/components/car/car-details";
import { LoadingSpinner } from "@/components/layout/loading-spinner";
import type { ICar } from "../types/car.type";

export default function CarPage() {
  const { id } = useParams<{ id: string }>();
  console.dir({ id });
  const { data, loading, error } = useQuery<{ car: ICar }>(GET_CAR_BY_ID, {
    variables: { id },
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.dir({ data, loading, error });
  return (
    <div className="car-page h-screen">
      {data?.car && <CarDetails car={data.car} />}
    </div>
  );
}
