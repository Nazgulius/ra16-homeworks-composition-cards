import { PropsWithChildren } from "react";

export const CardBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="card-body">
      {children}
    </div>
  );
}