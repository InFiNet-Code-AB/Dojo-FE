import React from "react";
import { TEInput } from "tw-elements-react";

interface LoginTextBoxesProps {
  formData: {
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginTextBoxes: React.FC<LoginTextBoxesProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <TEInput
        type="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mb-4"
      />
      <TEInput
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="mb-4"
      />
    </>
  );
};

export default LoginTextBoxes;
