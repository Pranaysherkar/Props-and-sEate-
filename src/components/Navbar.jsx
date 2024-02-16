import React from "react";

function Navbar({ data, added }) {
  const count = data.filter((item) => item.added).length;
  const det = ()=>{
   const songName=  data.filter((item)=> item.added).map((item) =>item.name).join(",\n");
  alert(`Favourite Songs :\n${songName}`)
  }
  return (
    <div className=" flex justify-between py-5 px-10 text-lg">
      <div className="text-orange-500 font-semibold">Songs</div>
      <div onClick={det} className="flex gap-2 p-2 text-white bg-orange-500 rounded-3xl">
        <h2>Favourite</h2>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default Navbar;
