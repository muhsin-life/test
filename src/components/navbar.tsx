import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const MENU_ITEMS = [
    { label: "About Us", slug: "/about-us" },
    { label: "Specialities", slug: "/specialities" },
    { label: "Doctors", slug: "/doctors" },
    { label: "Blogs", slug: "/blogs" },
    { label: "Contact Us", slug: "/contact-us" },
  ];

  return (
    <div className="bg-white  w-full border-b  py-9">
      <MaxWidthWrapper>
        <div className="flex justify-between w-full flex-1 ">
          <div>
            <Image
              src={
                "https://ikigaimedicalcentre.com/wp-content/uploads/2023/06/Group-6.svg"
              }
              height={150}
              width={150}
              alt="Site Logo"
            />
          </div>
          <div className="flex gap-2">
            {MENU_ITEMS.map((menuItem) => (
              <Button variant={"ghost"} className="gap-1.5 text-base">
                {menuItem.label}

                <ChevronDown
                  className={cn("h-4 w-4 transition-all text-muted-foreground")}
                />
              </Button>
            ))}
            <Button>Book an Appointment</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      
    </div>
  );
};

export default Navbar;
