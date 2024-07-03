import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="logo" width={90} height={50} />
        <div className="md:flex items-center gap-6 hidden">
          <h2 style={{ fontWeight: "bold" }} className="hover:scale-110 hover:text-primary  hover:cursor-pointer">
            Home
          </h2>
          <h2 style={{ fontWeight: "bold" }} className="hover:scale-110 hover:text-primary hover:cursor-pointer">
            Services
          </h2>
          <h2 style={{ fontWeight: "bold" }} className="hover:scale-110 hover:text-primary hover:cursor-pointer">
            About Us
          </h2>
        </div>
      </div>
      <div>
        <Button className="hover:scale-105">Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
