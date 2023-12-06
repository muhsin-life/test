import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon, User, HeartPulse , MapPin, ChevronDown} from "lucide-react";

export const BookNow = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-20">
      <MaxWidthWrapper>
        <div className="">
          <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
            Book Now
          </h1>
          <div className="bg-gradient-to-r from-rose-100 to-teal-100 p-10 mt-10 rounded-xl flex justify-between gap-x-4 items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5 relative">
              <span className="text-muted-foreground text-xs absolute top-[7px] pl-10">
                Search
              </span>
              <User className="fill-primary text-primary absolute inset-y-0 z-10 w-5 h-5 my-auto left-0 ml-3" />
              <Input
                type="email"
                className="h-12 pt-5 pl-10 placeholder:text-primary placeholder:font-bold pr-10"
                id="email"
                placeholder="Search by name"
              />
              <SearchIcon className="text-primary absolute inset-y-0 z-10 w-5 h-5 right-0 my-auto mr-3" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 relative">
              <span className="text-muted-foreground text-xs absolute top-[7px] pl-10">
                Specilaity
              </span>
              <HeartPulse className="fill-primary text-primary absolute inset-y-0 z-10 w-5 h-5 my-auto left-0 ml-3" />
              <Input
                type="email"
                className="h-12 pt-5 pl-10 placeholder:text-primary placeholder:font-bold pr-10"
                id="email"
                placeholder="Select specilaity"
              />
              <ChevronDown className="text-primary absolute inset-y-0 z-10 w-5 h-5 right-0 my-auto mr-3" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 relative">
              <span className="text-muted-foreground text-xs absolute top-[7px] pl-10">
                Specilaity
              </span>
              <MapPin className="=text-primary absolute inset-y-0 z-10 w-5 h-5 my-auto left-0 ml-3" />
              <Input
                type="email"
                className="h-12 pt-5 pl-10 placeholder:text-primary placeholder:font-bold pr-10"
                id="email"
                placeholder="Select specilaity"
              />
              <SearchIcon className="text-primary absolute inset-y-0 z-10 w-5 h-5 right-0 my-auto mr-3" />
            </div>
            <Button className=" px-10">Book Now</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
