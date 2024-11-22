import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, logout, signup, googleLogin } from "../actions/authActions";


const initialState = {
  loading: false,
  error: null,
  user: null, // Aquí guardaremos los datos del usuario registrado
  token: null,
};

const authReducer = createReducer(initialState, (builder) => {
  // Manejo del login
  builder
    .addCase(login.fulfilled, (state, action) => {
      console.log("Login completado");
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(login.pending, (state) => {
      console.log("Inicio de sesión en curso");
      state.loading = true;
      state.error = null;
    })
    .addCase(login.rejected, (state, action) => {
      console.log("Error en el inicio de sesión");
      state.loading = false;
      state.error = action.error.message;
      state.user = null;
      state.token = null;
    });

  // Manejo del signup
  builder
    .addCase(signup.fulfilled, (state, action) => {
      console.log("Registro completado");
      state.loading = false;
      state.error = null;
      // Guardamos todos los datos del usuario en el estado
      state.user = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        city: action.payload.city,
        photo: action.payload.photo,
      };
    })
    .addCase(signup.pending, (state) => {
      console.log("Registro en curso");
      state.loading = true;
      state.error = null;
    })
    .addCase(signup.rejected, (state, action) => {
      console.log("Error en el registro");
      state.loading = false;
      state.error = action.error.message;
    });

  // Manejo de setUser
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
  });

  // Manejo del logout
  builder.addCase(logout, (state) => {
    console.log("Cierre de sesión");
    localStorage.removeItem("token");
    state.user = null;
    state.token = null;
  });
    


  builder
    .addCase(googleLogin.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
      state.token = null;
    })
    .addCase(googleLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(googleLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.user = null;
      state.token = null;
    });

});

export default authReducer;
