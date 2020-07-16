import React from "react";

import TableHead from "./TableHead";
import TableRow from "./TableRow";

const SearchResults = props => {
  const tableHeaders = [
    "ID",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check-In Date",
    "Check-Out Date",
    "Nights"
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map(header => {
            return <TableHead key={String(header)} name={header} />;
          })}
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return <TableRow key={result.id} data={result} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
