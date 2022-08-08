import React, { useEffect, useState } from "react";

const Content = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const [coffeeType, setCoffeeType] = useState([]);
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState("Black coffee");
  const [img, setImg] = useState("img1");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const qantityHandler = (e) => {
    setQty(e.target.value);
  };
  const selectedHandler = (e) => {
    setSelected(e.target.value);
  };

  //insert select option

  //on  page load
  useEffect(() => {
    const getOrder = async () => {
      await fetchSelect();
    };
    getOrder();
  }, []);

  //Fetch order

  const fetchSelect = async () => {
    const res = await fetch("http://localhost:8000/update");
    const data = await res.json();
    return data, setCoffeeType(data);
  };

  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (name == "") {
      setMessage("Customer's  name is empty");
    } else {
      //custumer order
      setMessage(`-> ${qty} ${selected} for  ${name} `);
      const a = coffeeType.findIndex((item) => item.coffeeType === selected);
      const stock = coffeeType[a];

      const postUpdate = { name, qty, stock };

      fetch("http://localhost:8000/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postUpdate),
      });
    }
  };

  useEffect(() => {
    const numb = [
      "img1",
      "img2",
      "img3",
      "img4",
      "img5",
      "img6",
      "img7",
      "img8",
      "img9",
      "img10",
      "img11",
    ];
    //

    let count = 0;
    function cycleArray() {
      let img = numb[count];
      setImg(img);

      count++;
      if (count === numb.length) {
        count = 0;
      }
    }
    setInterval(() => {
      cycleArray();
    }, 2000);
  }, []);

  return (
    <div className=" justify-center  w-72 h-[450px] bg-amber-900 mx-auto my-8 rounded-lg shadow-lg border pt-[1px]">
      <div className=" ">
        <div className=" w-64 mx-auto bg-black h-52 mt-4 shadow rounded-md">
          <img
            src={require("../img/" + img + ".jpg")}
            className="rounded-sm h-full w-full bg-auto object-cover"
          />
        </div>
        <div className=" p-4 pt-2">
          <h3 className="my-2  text-white"> Order Your Coffee Now</h3>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Customer's Name"
              value={name}
              onChange={nameHandler}
              className=" w-full mb-2 p-1"
            />

            <input
              type="number"
              placeholder="Quantity"
              value={qty}
              onChange={qantityHandler}
              className=" w-full mb-2 p-1"
            />

            <select
              name=""
              onChange={selectedHandler}
              className=" w-full mb-2 p-1"
            >
              {coffeeType.map((coffeeType, index) => {
                return (
                  <option
                    value={coffeeType.coffeeType}
                    key={index}
                    id={coffeeType.id}
                  >
                    {coffeeType.coffeeType}
                  </option>
                );
              })}
            </select>
            <input
              type="submit"
              value="Order now"
              className="w-full p-1 hover:text-wheat hover:border-wheat hover:tracking-wider  border text-white "
            />
          </form>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
