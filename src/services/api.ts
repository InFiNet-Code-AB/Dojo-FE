import { USERS_API_URL } from "../constants/apiUrls";
import { User } from "../types/User";
import { RegisterUser } from "../types/RegisterUser";
import { REGISTER_API_URL } from "../constants/apiUrls";

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
    // Optionellt: hantera svaret här, t.ex. att lagra JWT-token
    const data = await response.json();
    console.log("Registrering lyckades:", data);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
