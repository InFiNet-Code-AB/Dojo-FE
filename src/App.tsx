import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Users } from "./components/features/Users";
import Header from "./components/common/NavigationBar/Header/Header";
import AdBanner from "./components/common/AdBanner";
import LoginForm from "./components/common/LoginForm/LoginForm";
import RegisterForm from "./components/common/RegisterForm/RegisterForm";

function App() {
  const [count, setCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowRegister(false); // Stäng registerformuläret om det är öppet
  };

  const toggleRegisterForm = () => {
    setShowRegister(!showRegister);
    setShowLogin(false); // Stäng loginformuläret om det är öppet
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Header
          onLoginClick={toggleLoginForm}
          onSignUpClick={toggleRegisterForm}
        />
        <main className="flex-grow container mx-auto p-4 mt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showLogin && <LoginForm />}
                  {showRegister && <RegisterForm />}
                  {!showLogin && !showRegister && (
                    <>
                      <AdBanner />
                      <Users />
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={() => setCount(count + 1)}
                          className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                          count is {count}
                        </button>
                      </div>
                    </>
                  )}
                </>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
