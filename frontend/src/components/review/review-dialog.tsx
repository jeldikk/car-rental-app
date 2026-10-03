import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

export function ReviewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Post Your Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Your Review</DialogTitle>
          <DialogDescription>
            Post or update your review for this car
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-7 py-4">
          <div className="grid w-full gap-3">
            <Label htmlFor="message">Your Ratings</Label>
            {/* Star Ratings Component */}
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="comments">Your comments</Label>
            <Textarea
              placeholder="Type your review here."
              id="comments"
              value="Great car!"
              readOnly
            />
          </div>
        </div>
        <DialogFooter>
          <Button disabled>Post Your Review</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
