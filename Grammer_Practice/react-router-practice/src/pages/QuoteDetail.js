import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "Learning React is fun" },
  { id: "q2", author: "maximum", text: "Learning React is fun2" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(params);
  console.log(match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote found</p>;
  }
  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route exact path={`${match.path}`}>
        <div className={"centered"}>
          <Link className={"btn--flat"} to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default QuoteDetail;
