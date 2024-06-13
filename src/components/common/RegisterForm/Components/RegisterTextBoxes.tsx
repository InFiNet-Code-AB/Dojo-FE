import React from "react";
import { TEInput } from "tw-elements-react";

interface RegisterTextBoxesProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterTextBoxes: React.FC<RegisterTextBoxesProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <TEInput
        name="firstName"
        type="text"
        label="FirstName"
        className="mb-4"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TEInput
        name="lastName"
        type="text"
        label="LastName"
        className="mb-4"
        value={formData.lastName}
        onChange={handleChange}
      />
      <TEInput
        name="email"
        label="Email"
        type="email"
        className="mb-4"
        value={formData.email}
        onChange={handleChange}
      />
      <TEInput
        name="password"
        label="Password"
        type="password"
        className="mb-4"
        value={formData.password}
        onChange={handleChange}
      />
      <TEInput
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        className="mb-4"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </>
  );
};

export default RegisterTextBoxes;
