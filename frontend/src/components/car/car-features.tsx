import { Card, CardHeader, CardTitle } from "../ui/card";
import { CarFront } from "lucide-react";
import { Button } from "../ui/button";

const CarFeatures = () => {
  return (
    <Card>
      <CardHeader className="bg-muted/25">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 mb-5 text-2xl">
            <p className="text-2xl font-bold mt-5">Key Features</p>
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            <div className="px-8">
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-start">
                <div className="flex items-center space-x-2 text-xl">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CarFront className="h-6 w-6" />
                  </Button>
                  <p>Sedan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CarFeatures;
