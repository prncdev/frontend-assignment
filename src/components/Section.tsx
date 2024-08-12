import { FC } from "react";
import { Nav } from "./Navigation";
import { FormSection } from "./FromSection";
import { Button } from "@mui/joy";

export const Section: FC = function() {
  return (
    <section className="h-full">
      <div className="flex">
        <Nav />
        <FormSection />
      </div>
      <div
        className="flex justify-end items-center py-2 px-3"
        style={{borderBlockStart: 'solid 2px #d8d8d8'}}
      >
        <Button variant="solid" className="px-10 py-2 bg-[#1a8fe6]">
          Next
        </Button>
      </div>
    </section>
  );
};

