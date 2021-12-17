import * as React from "react";
import { Button } from "./styles";

const BasicButtons = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default BasicButtons;
