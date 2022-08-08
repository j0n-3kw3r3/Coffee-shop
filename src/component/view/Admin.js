import React, { useState, useEffect } from "react";

const Admin = () => {
  const [orders, setOrder] = useState([]);
  const [coffeeType, setUpdate] = useState("");
  const [price, setPrice] = useState("");
  const [stocks, setStock] = useState([]);
  const [msg, setMsg] = useState("");

  //post order
  const updateHandler = () => {
    const postUpdate = { coffeeType, price };

    fetch("http://localhost:8000/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postUpdate),
    });
    setMsg("Breverage Added successfully");
    setUpdate("");
  };

  // delete update
  const deleteHandle = () => {
    const postUpdate = {};

    fetch("http://localhost:8000/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postUpdate),
    });
    setMsg("Breverage Added successfully");
    setUpdate("");
  };
  //on  page load
  useEffect(() => {
    const getOrder = async () => {
      await fetchOrder();
      await fetchStock();
    };
    getOrder();
  }, []);

  //Fetch order

  const fetchOrder = async () => {
    const res = await fetch("http://localhost:8000/Customer");
    const data = await res.json();

    return data, setOrder(data);
  };

  const fetchStock = async () => {
    const res = await fetch("http://localhost:8000/update");
    const stockData = await res.json();

    return stockData, setStock(stockData);
  };

  const click = () => {
    updateHandler();
    fetchStock();
  };

  const checkId = (e) => {
    const coffId = e.target.id;
    const a = 1;
    console.log(coffId + a);
  };

  return (
    <div className="admino">
      <h2>Admin's Page</h2>
      <div className=" grid grid-cols-5 p-1">
        {/* post update list */}
        <div className=" col-span-2 w-full p-2">
          <h3>Update coffee list</h3>
          <input
            type="text"
            name=""
            id="update"
            onChange={(e) => {
              setUpdate(e.target.value);
            }}
            placeholder="Insert coffee type"
            className=" w-full mb-2 p-1 border"
          />
          <input
            type="number"
            name=""
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Insert Price"
            className=" w-full mb-2 p-1 border"
          />
          <input
            type="button"
            value="Update"
            onClick={click}
            className="w-full p-1 hover:text-wheat hover:border-wheat hover:tracking-wider  border text-white bg-theme cursor-pointer"
          />
          <p> {msg} </p>

          <div className="shadow w-[80%] p-2 mt-8 mb-4 mx-auto">
            <h3>Stock</h3>
            <table>
              <thead>
                <tr className="grid grid-cols-3 border-b sm:text-xs py-1 justify-between ">
                  <th>Breverage</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {stocks.map((stock, id) => {
                  return (
                    <tr
                      key={id}
                      className="grid grid-cols-3 text-center sm:text-xs border-b py-1"
                    >
                      <td>{stock.coffeeType}</td>
                      <td>${stock.price}</td>
                      <input
                        type="checkbox"
                        name=""
                        id={id}
                        className=" h-4 w-4"
                        onClick={checkId}
                      />
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button
              onClick={deleteHandle}
              className="w-full p-1 hover:text-wheat hover:border-wheat hover:tracking-wider  border text-white bg-theme cursor-pointer"
            >
              Delete 
            </button>
          </div>
        </div>

        {/* custumers order */}
        <div className="order col-span-3 p-4 shadow-xl border rounded mb-8">
          <h3>Custumer's Order</h3>
          <table>
            <thead>
              <tr className="grid grid-cols-4 border-b sm:text-xs py-1">
                <th>Qty</th>
                <th>Order</th>
                <th>Price</th>
                <th>Custumer's name</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr
                    key={index}
                    className="grid grid-cols-4 text-center sm:text-xs border-b py-1"
                  >
                    <td>{order.qty}</td>
                    <td>{order.stock.coffeeType}</td>
                    <td>${order.stock.price}</td>
                    <td>{order.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            onClick={fetchOrder}
            className="w-full p-1 hover:text-wheat hover:border-wheat hover:tracking-wider  border text-white bg-theme cursor-pointer"
          >
            Update Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
