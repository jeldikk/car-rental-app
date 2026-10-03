import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import AlertCard from "../layout/alert-card";
import { Label } from "../ui/label";

const CouponCard = () => {
  return (
    <Card className="mt-5">
      <CardHeader>
        <CardTitle>Have Coupon?</CardTitle>
        <CardDescription>Enter below to avail discount</CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label>Name</Label>
              <Input
                id="coupon"
                type="search"
                placeholder="Coupon Code"
                readOnly
              />
            </div>
          </div>

          <div className="mt-2">
            <AlertCard
              title="Invalid Coupon!"
              description="Coupon is invalid or expired"
            />
          </div>

          <div className="mt-2">
            <AlertCard
              title="Coupon Applied!"
              description={`You have saved 45%`}
              color="green"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled>
            Apply Coupon
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CouponCard;
