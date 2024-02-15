import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  const dummyData = [
    {
      name: "Shape of You",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Ed Sheeran"
    },
    {
      name: "Rolling in the Deep",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Adele"
    },
    {
      name: "Old Town Road",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Lil Nas X"
    },
    {
      name: "Someone Like You",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Adele"
    },
    {
      name: "Blinding Lights",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "The Weeknd"
    },
    {
      name: "baby",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "justin bieber"
    },
    {
      name: "Havana",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Camila Cabello"
    },
    {
      name: "Someone You Loved",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Lewis Capaldi"
    }
  ];
  
  const [data,stedata] = useState(dummyData);
  
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <div className="flex justify-center flex-wrap">
        {data.map((items,index)=>{
          return <Card key={index} values={items} />
        })}
      </div>
    </div>
  );
}

export default App;
