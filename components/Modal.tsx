import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Modal;
