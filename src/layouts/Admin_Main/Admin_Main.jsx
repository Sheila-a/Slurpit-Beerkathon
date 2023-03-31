import {
  NotificationsActiveRounded,
  Portrait,
  Cached,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Date from "../../components/Date/Date";
import Searchh from "../../components/Search/Search";
import { Cards } from "../../components/DB_Cards/DB_Cards";
import { Blue, Green, Yellow, Pink } from "../../assets/img";
import design from "./style.module.css";

const Admin_Main = () => {
  const [productData, setProductData] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://slurpit.onrender.com/api/v1/product"
      );
      const data = await response.json();
      setProductData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  console.log(typeof productData);

  useEffect(() => {
    const newRows = [];
    for (const productId in productData.data) {
      const product = productData.data[productId];
      newRows.push(
        createData(
          product._id,
          product.name,
          product.quantity,
          product.category,
          product.daysToRunOut,
          product.status
        )
      );
    }
    setRows(newRows);
  }, [productData]);

  function createData(_id, name, quantity, category, daysToRunOut, status) {
    return { _id, name, quantity, category, daysToRunOut, status };
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={design.cont}>
      <div className={design.nav}>
        <Date />
        <Searchh />
        <div className={design.nav_right}>
          <button onClick={handleRefresh} className={design.refresh}>
            <span>
              <Cached />
            </span>
            Refresh
          </button>
          <NotificationsActiveRounded />
          <div className={design.NV_right}>
            <Portrait />
            <p>Slurpit</p>
          </div>
        </div>
      </div>
      <div className={design.dwmy}>bread</div>
      <div className={design.cardss}>
        <Cards
          title="Total Stock Unit"
          value="30"
          className={design.crd_1}
          img={Blue}
        />
        <Cards
          title="Available Stock "
          value="30"
          className={design.crd_2}
          img={Green}
        />
        <Cards
          title="Low Stock"
          value="30"
          className={design.crd_3}
          img={Yellow}
        />
        <Cards
          title="Unavailable Stock"
          value="30"
          className={design.crd_4}
          img={Pink}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Stock Id</th>
            <th>Product name</th>
            <th>Categories</th>
            <th>Days until stockout</th>
            <th>Qty remaining </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row._id}</td>
              <td>{row.name}</td>
              <td>{row.quantity}</td>
              <td>{row.category}</td>
              <td>{row.daysToRunOut}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin_Main;

// import { NotificationsActiveRounded, Portrait } from "@mui/icons-material";
// import React, { useState, useEffect } from "react";
// import Date from "../../components/Date/Date";
// import Search from "../../components/Search/Search";
// import axios from "axios";
// import { Cards } from "../../components/DB_Cards/DB_Cards";
// import { Blue, Green, Yellow, Pink } from "../../assets/img";
// import design from "./style.module.css";

// const Admin_Main = () => {
//   const [productData, setProductData] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://slurpit.onrender.com/api/v1/product")
//       .then((response) => {
//         setProductData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const tableData = productData.map((product) => (
//     <tr key={product.id}>
//       <td>{product.id}</td>
//       <td>{product.name}</td>
//       <td>{product.category}</td>
//       <td>{product.daysToRunOut}</td>
//       <td>{product.quantity}</td>
//       <td>{product.status}</td>
//     </tr>
//   ));
//   return (
//     <div className={design.cont}>
//       <div className={design.nav}>
//         <Date />
//         <Search />
//         <div className={design.nav_right}>
//           <button>Refresh</button>
//           <NotificationsActiveRounded />
//           <Portrait />
//           <p>Slurpit</p>
//         </div>
//       </div>
//       <div className={design.dwmy}>bread</div>
//       <div className={design.cardss}>
//         <Cards
//           title="Total Stock Unit"
//           value="30"
//           className={design.crd_1}
//           img={Blue}
//         />
//         <Cards
//           title="Available Stock "
//           value="30"
//           className={design.crd_2}
//           img={Green}
//         />
//         <Cards
//           title="Low Stock"
//           value="30"
//           className={design.crd_3}
//           img={Yellow}
//         />
//         <Cards
//           title="Unavailable Stock"
//           value="30"
//           className={design.crd_4}
//           img={Pink}
//         />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Stock Id</th>
//             <th>Product name</th>
//             <th>Categories</th>
//             <th>Days until stockout</th>
//             <th>Qth remaining </th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>{tableData}</tbody>

//         {/* <tr>
//           <td>1</td>
//           <td>2</td>
//           <td>3</td>
//           <td>4</td>
//           <td>5</td>
//           <td>6</td>
//         </tr> */}
//       </table>
//     </div>
//   );
// };

// export default Admin_Main;
