import React from "react";
import "./styles.css"; // Import CSS file for styling

//maybe do a box that shows you what it hatchiing rn instead of all of the bugs.

const HatchChart = () => {
  // Fly, jan, feb, march, apr, may, june, july, august, sept, oct, nov, dec

  const tableData = [
    {
      Fly: "SPRING",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Midges",
      Jan: "",
      Feb: "",
      Mar: "Hatching",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Blue Winged Olive",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "Hatching",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Western March Brown",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "Hatching",
      May: "Hatching",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Mother's Day Caddis",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "Hatching",
      May: "Hatching",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "SUMMER",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Pale Morning Dun",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "Hatching",
      July: "Hatching",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Salmon Fly",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "Hatching",
      July: "Hatching",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Yellow Sally Stonefly",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "Hatching",
      July: "Hatching",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Golden Stonefly",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "Hatching",
      July: "Hatching",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Caddis-various species",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "Hatching",
      July: "Hatching",
      Aug: "Hatching",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Trico Mayfly",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "Hatching",
      Aug: "Hatching",
      Sept: "Hatching",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "LATE SUMMER TERRESTRIALS",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Grasshoppers",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "Hatching",
      Aug: "Hatching",
      Sept: "Hatching",
      Oct: "Hatching",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Ants & Beetles",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "Hatching",
      Aug: "Hatching",
      Sept: "Hatching",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "FALL",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "Blue Winged Olive",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "Hatching",
      Oct: "Hatching",
      Nov: "",
      Dec: "",
    },
    {
      Fly: "October Caddis",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      June: "",
      July: "",
      Aug: "",
      Sept: "",
      Oct: "Hatching",
      Nov: "",
      Dec: "",
    },

    // Add more objects as needed
  ];

  function FlyCell({ row, title }) {
    // Check if the title matches any of the specified titles
    const isTitleBlue = [
      "SPRING",
      "SUMMER",
      "LATE SUMMER TERRESTRIALS",
      "FALL",
    ].includes(title);

    // Define the style based on the condition
    const style = {
      backgroundColor: isTitleBlue ? "blue" : "inherit", // If the title matches, set background color to blue, else inherit
      color: isTitleBlue ? "white" : "inherit", // If the title matches, set text color to white, else inherit
    };

    return <td style={style}>{row.Fly}</td>;
  }

  return (
    <div className="modern-table-container">
      <table className="modern-table">
        <thead>
          <tr>
            <th>Fly</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>Aug</th>
            <th>Sept</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <FlyCell row={row} title={row.Fly} />
              <td className={row.Jan === "Hatching" ? "solid-color" : ""}>
                {row.Jan}
              </td>
              <td className={row.Feb === "Hatching" ? "solid-color" : ""}>
                {row.Feb}
              </td>
              <td className={row.Mar === "Hatching" ? "solid-color" : ""}>
                {row.Mar}
              </td>
              <td className={row.Apr === "Hatching" ? "solid-color" : ""}>
                {row.Apr}
              </td>
              <td className={row.May === "Hatching" ? "solid-color" : ""}>
                {row.May}
              </td>
              <td className={row.June === "Hatching" ? "solid-color" : ""}>
                {row.June}
              </td>
              <td className={row.July === "Hatching" ? "solid-color" : ""}>
                {row.July}
              </td>
              <td className={row.Aug === "Hatching" ? "solid-color" : ""}>
                {row.Aug}
              </td>
              <td className={row.Sept === "Hatching" ? "solid-color" : ""}>
                {row.Sept}
              </td>
              <td className={row.Oct === "Hatching" ? "solid-color" : ""}>
                {row.Oct}
              </td>
              <td className={row.Nov === "Hatching" ? "solid-color" : ""}>
                {row.Nov}
              </td>
              <td className={row.Dec === "Hatching" ? "solid-color" : ""}>
                {row.Dec}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HatchChart;
