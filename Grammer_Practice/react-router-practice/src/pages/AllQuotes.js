import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "Learning React is fun" },
  { id: "q2", author: "maximum", text: "Learning React is fun2" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
