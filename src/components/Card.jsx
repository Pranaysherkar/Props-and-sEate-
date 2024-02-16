import React from "react";

function Card({ values,index,changeData }) {
  const { name, image, author, added } = values;
  return (
    <div className="w-1/5 h-1/5 m-5 p-2 bg-sky-500 flex gap-3 relative rounded-lg">
      <div className="bg-orange-200 w-32 h-28 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="text-white">
        <h3 className="text-lg font-bold">{name}</h3>
        <h6 className="text-base mt-2 font-medium">{author}</h6>
      </div>
      <button onClick={()=>changeData(index)} className={`${added?`bg-teal-500`:`bg-orange-500`} text-sm  font-semibold text-white absolute translate-y-[40%] bottom-0 left-1/2 rounded-lg p-3`}>
        {added? `Added` : `Add to favorites`}
      </button>
    </div>
  );
}

export default Card;
