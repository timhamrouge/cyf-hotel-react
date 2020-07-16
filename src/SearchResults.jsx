import React from "react";

import TableHead from "./TableHead";

const SearchResults = () => {
  const tableHeaders = [
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check-In Date",
    "Check-Out Date",
    "Unused"
  ];

  return (
    <table class="table">
      <thead>
        <tr>
          {tableHeaders.map(header => {
            return <TableHead name={header} />;
          })}

          {/* <TableHead name="First Name" />
                    <TableHead name="Surname" />
                    <TableHead name="Email" />
                    <TableHead name="Room ID" />
                    <TableHead name="Check-In Date" />
                    <TableHead name="Check-Out Date" />
                    <TableHead name="Unused" /> */}
        </tr>
      </thead>
    </table>
  );
};

export default SearchResults;
