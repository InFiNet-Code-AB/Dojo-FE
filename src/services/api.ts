import {
  USERS_API_URL,
  REGISTER_API_URL,
  Login_API_URL,
} from "../constants/apiUrls";
import { User } from "../types/User";
import { RegisterUser } from "../types/RegisterUser";
import { LoginUser } from "../types/LoginUser";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(USERS_API_URL, { headers: { accept: "*/*" } });
    if (!response.ok) {
      throw new Error(
        `Fetching users failed with HTTP status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GodDamn:", error);
    throw error;
  }
};

export const registerUser = async (userData: RegisterUser): Promise<void> => {
  try {
    const response = await fetch(REGISTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(
        `Registrering misslyckades med status: ${response.status}`
      );
    }
    const data = await response.json();
    console.log("Registrering lyckades:", data);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const loginUser = async (userData: LoginUser): Promise<string> => {
  try {
    console.log("Sending request to backend with:", userData); // Lägg till denna logg
    const response = await fetch(Login_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Login failed:", data);
      throw new Error(`Login failed with status: ${response.status}`);
    }

    return data.token; // Förutsätter att backend returnerar token i fältet "token"
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
