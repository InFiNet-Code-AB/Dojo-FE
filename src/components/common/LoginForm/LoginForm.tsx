import React, { useState } from "react";
import { loginUser } from "../../../services/api"; // Kontrollera sökvägen här
import Logo from "../InfinetLogo/InfinetLogo";
import LoginTextBoxes from "../LoginForm/Components/LoginTextBoxes";
import WideButton from "../Button/WideButton";
import Button from "../Button/Button";
import ProgrammingLogos from "../ProgrammingLogos/ProgammingLogos";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("FormData:", formData); // Kontrollera att formData är korrekt
      const token = await loginUser(formData);
      localStorage.setItem("jwtToken", token); // Spara JWT-token i localStorage
      console.log("Login successful, token:", token);
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 rounded-lg">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-md md:max-w-2xl lg:max-w-6xl">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="flex justify-center pt-6 sm:pt-5 md:pt-0 mb-5">
                      <Logo />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      {error && <p className="text-red-500">{error}</p>}
                      <LoginTextBoxes
                        formData={formData}
                        handleChange={handleChange}
                      />
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <WideButton type="submit" text="LOG IN" />
                        <a href="#!">Forgot password?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <Button type="button">Register</Button>
                      </div>
                    </form>
                  </div>
                </div>
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

export default LoginForm;
