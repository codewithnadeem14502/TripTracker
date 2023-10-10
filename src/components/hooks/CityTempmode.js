import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import { useCities } from "./contexts/Cities.Context";
import ButtonBack from "./BackButton";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
function City() {
  const { id } = useParams();
  const { currentCity, getCity, isLoading } = useCities();
  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );
  if (isLoading) return <Spinner />;
  const { cityName, emoji, date, notes } = currentCity;
}
