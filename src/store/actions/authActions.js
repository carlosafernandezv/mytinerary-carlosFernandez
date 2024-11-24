import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    return {
        payload:datos,
    }
})

const logout = createAction("logout");

// Action para el login con Google



const login = createAsyncThunk("login", async({email,password}) => {
  try {
    
    console.log("Entramos al Login");
    const credentials = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      "http://localhost:8080/api/auth/signin",
      credentials
    );

    console.log("Se proceso la solicitud");
    console.log("Response", response.data);
    console.log("Superamos la solicitud de Login");

    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log("error", error);
        
  }  
  
}) //fullfilled,pending,rejected

// Acción para registrarse (Signup)
const signup = createAsyncThunk(
    "signup",
    async ({ email, password, city, firstName, lastName, photo }) => {
        console.log("Entramos al Signup");
        const newUser = {
            email: email,
            password: password,
            city: city,
            firstName: firstName,
            lastName: lastName,
            photo: photo,
        };
        const response = await axios.post("http://localhost:8080/api/users/register", newUser);

        console.log("Se procesó la solicitud de Signup");
        console.log("Response", response.data);

        return response.data; // Se devuelve la respuesta del servidor sin guardar el token
    }
);

// Acción para iniciar sesión con Google
const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (googleToken, thunkAPI) => {
    try {
      // Envía el token de Google al backend para autenticación
      const response = await axios.post(
        
        "http://localhost:8080/api/auth/login/google",
        { token: googleToken } // token recibido desde el cliente de Google
      );

      console.log("Google Login Response", response.data);
      return response.data; // Datos del usuario autenticado y token devuelto
    } catch (error) {
      console.error("Error in Google Login:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);





export { login, setUser, logout, signup, googleLogin };