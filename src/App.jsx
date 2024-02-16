import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  const dummyData = [
    {
      name: "Shape of You",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Ed Sheeran",
      added: false,
    },
    {
      name: "Rolling in the Deep",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Adele",
      added: false,
    },
    {
      name: "Old Town Road",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Lil Nas X",
      added: false,
    },
    {
      name: "Someone Like You",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Adele",
      added: false,
    },
    {
      name: "Blinding Lights",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "The Weeknd",
      added: false,
    },
    {
      name: "baby",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "justin bieber",
      added: false,
    },
    {
      name: "Havana",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Camila Cabello",
      added: false,
    },
    {
      name: "Someone You Loved",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Lewis Capaldi",
      added: false,
    },
    {
      name: "Bad Guy",
      image:
         "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Billie Eilish",
      added: false,
    },
    {
      name: "Bohemian Rhapsody",
      image:
         "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Queen",
      added: false,
    },
    {
      name: "Smells Like Teen Spirit",
      image:
         "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Nirvana",
      added: false,
    },
    {
      name: "Thriller",
      image:
         "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      author: "Michael Jackson",
      added: false,
    },
  ];

  const [data, stedata] = useState(dummyData);

  const changeData = (chindex) => {
    stedata((prev) => {
      return prev.map((items, index) => {
        if (index === chindex) return { ...items, added: !items.added };
        return { ...items };
      });
    });
  };
  return (
    <div className="w-full h-screen bg-black">
      <Navbar data={data} />
      <div className="flex justify-center flex-wrap">
        {data.map((items, index) => {
          return (
            <Card
              key={index}
              values={items}
              index={index}
              changeData={changeData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
