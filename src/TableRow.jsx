import React from "react";
import moment from "moment";

const TableRow = props => {
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = props.data;

  const returnDateDiff = () => {
    return moment(checkOutDate).diff(moment(checkInDate), "days");
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{returnDateDiff()}</td>
    </tr>
  );
};

export default TableRow;
