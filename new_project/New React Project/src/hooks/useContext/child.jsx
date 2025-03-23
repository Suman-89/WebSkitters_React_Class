import React, { useContext } from "react";
import NoteContext from "./context";

export default function Child() {
  const products = useContext(NoteContext);
  console.log("products -->", products);

  return (
    <>
      {/* <h1>{data.uname}</h1> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item no.</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        {Array.isArray(products) &&
          products.map((v, i) => {
            return (
              <>
                <tbody key={i}>
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{v.title}</td>
                    <td>$ {v.price}</td>
                    <td>{v.availabilityStatus}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
      </table>
    </>
  );
}
