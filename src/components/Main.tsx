import { Button } from "@mui/joy";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const Main: FC<Props> = function({ children }) {
  return (
    <section className="main-section">
      {children}
    </section>
  );
};
