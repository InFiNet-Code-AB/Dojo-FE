import React, { useState } from "react";
import Logo from "../InfinetLogo/InfinetLogo";
import RegisterTextBoxes from "../RegisterForm/Components/RegisterTextBoxes";
import RoleCheckboxes from "../RegisterForm/Components/RoleCheckboxes";
import Button from "../Button/Button";
import WideButton from "../Button/WideButton";
import ProgrammingLogos from "../ProgrammingLogos/ProgammingLogos";
import { registerUser } from "../../../services/api";
import { RegisterUser } from "../../../types/RegisterUser";

const RegisterForm: React.FC = () => {
  const initialFormData: RegisterUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student", // Default role
  };

  const [formData, setFormData] = useState<RegisterUser>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentFormData = { ...formData };
    setFormData(initialFormData);

    try {
      await registerUser(currentFormData);
    } catch (error) {
      console.error(error);
      setFormData(currentFormData);
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 rounded-lg">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-md md:max-w-2xl lg:max-w-6xl">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="flex justify-center pt-6 sm:pt-5 md:pt-0 mb-5">
                      <Logo />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 text-lg font-semibold text-white">
                        Register
                      </p>
                      <RegisterTextBoxes
                        formData={formData}
                        handleChange={handleChange}
                      />
                      <RoleCheckboxes
                        role={formData.role}
                        handleChange={handleChange}
                      />
                      {/* <!-- Register Account button --> */}
                      <WideButton type="submit" text="Register Account" />
                      {/* <!-- Login button --> */}
                      <div className="flex items-center justify-between pb-4 mt-12">
                        <p className="mb-0 mr-2 text-white">
                          Already have an account?
                        </p>
                        <Button type="button">Login</Button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Right column container with logos --> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #a855f7, #7e22ce, #581c87, #3b0764)",
                  }}
                >
                  <div className="px-4 py-6 md:mx-6 md:p-12 flex flex-wrap justify-center">
                    <h2 className="w-full text-center text-white mb-6 text-2xl font-extrabold">
                      Get Started With Your Courses Now
                    </h2>
                    <ProgrammingLogos />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
