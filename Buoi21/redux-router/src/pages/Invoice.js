import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice, getInvouices } from "../data";

export default function Invoice() {
  const params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
      <h2>Total : {invoice.amount}</h2>
      <h2>name : {invoice.name}</h2>
    </div>
  );
}
