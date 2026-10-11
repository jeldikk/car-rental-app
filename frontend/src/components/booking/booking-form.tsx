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
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { MoveRight } from "lucide-react";
import CouponCard from "../coupon/coupon-card";
import AlertCard from "../layout/alert-card";
import { Link } from "react-router-dom";

export function BookingForm() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>New Booking</CardTitle>
          <CardDescription>Enter the details to rent this car.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Full Name" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  disabled
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneno">Phone No</Label>
                <Input id="phoneno" type="text" placeholder="Phone No" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneno">Booking Dates</Label>
                {/* Car Date Picker */}
              </div>

              <AlertCard
                title="Not Available"
                description="Dates are not available for booking. Try again!"
              />

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneno">Additional Notes</Label>
                <Textarea placeholder="Type your additional notes here." />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <CouponCard />

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
          <CardDescription>
            Take a look at your booking & confirm
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex justify-between">
                <p className="text-md">Days of Rent:</p>
                <p className="font-bold">23</p>
              </div>

              <div className="flex justify-between">
                <p className="text-md">Rent Per Day:</p>
                <p className="font-bold">$232</p>
              </div>

              <div className="flex justify-between">
                <p className="text-md">Total Rent:</p>
                <p className="font-bold">$4545</p>
              </div>

              <div className="flex justify-between">
                <p className="text-md">Tax (15%):</p>
                <p className="font-bold">$334</p>
              </div>
              <DropdownMenuSeparator />

              <div className="flex justify-between">
                <p className="text-md">Est. Total:</p>
                <p className="font-bold">$343</p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Link to="/payment">
            <Button className="w-full">
              Proceed <MoveRight className="ms-3 h-5 w-5" />
            </Button>
          </Link>

          <AlertCard
            title="Login!"
            description="Please login to rent this Car"
          />
        </CardFooter>
      </Card>
    </div>
  );
}
