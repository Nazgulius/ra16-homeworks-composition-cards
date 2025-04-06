import { PropsWithChildren } from "react";

export const Cards = ({ children }: PropsWithChildren) => {

  return (
    <div className="card" >
      {children}
    </div>
  );
}
