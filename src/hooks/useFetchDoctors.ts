import { useState, useEffect } from "react";
import axios from "axios";
import Doctor from "../types";
import { useDispatch } from "react-redux";
import { showNotification } from "../redux/actions/notificationActions";

export const useFetchDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<Doctor[]>("http://localhost:3333/api/doctors")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error(error);
        dispatch(showNotification("Failed to get doctors.", "error"));
      });
  }, []);

  return { doctors };
};
