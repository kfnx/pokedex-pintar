import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { name } = useParams();
  return <div>Detail {!!name && name}</div>;
}
