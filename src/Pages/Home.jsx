import Hero from '../components/Hero'
import { useNavigate } from "react-router-dom";

import { setUser } from "../store/actions/authActions"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { Slider } from '../Slider'
import slides from '../mock.json'
import axios from "axios";

const loginWithToken = async (token) => {
  try {
    console.log("se ejecuto login with token");

    const response = await axios.get(
      "http://localhost:8080/api/auth/signin/",
      //"http://localhost:8080/mytinerary/users/validateToken",
      {
        header: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};




export default function Home() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    

    if (token) {
      localStorage.setItem("token", token);
      

      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }));
      });
      navigate("/");
    }
  }, [dispatch, navigate]);



  return (
    
   <>
    <Hero />
    <Slider slides={slides} />
   </>
    
  )
}
