import { FC, useState } from "react";
import { Nav, navItems } from "./Navigation";
import { FormSection } from "./FromSection";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export const Section: FC = function () {
  const navigate = useNavigate();
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const handleNextBtn = function () {
    if (currentLinkIndex < navItems.length - 1) {
      const nextPage = currentLinkIndex + 1;
      setCurrentLinkIndex(nextPage);
      navigate(navItems[nextPage].link);
    }
  };
  return (
    <section className="h-full">
      <div className="flex">
        <Nav currentSection={currentLinkIndex} />
        <FormSection />
      </div>
      <div
        className="flex justify-end items-center py-3 px-10"
        style={{ borderBlockStart: 'solid 2px #d8d8d8' }}
      >
        <Button variant="solid" className="px-10 py-2 bg-[#1a8fe6]" onClick={handleNextBtn}>
          Next
        </Button>
      </div>
    </section>
  );
};

