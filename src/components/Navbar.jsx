import React from 'react'

function Navbar() {
  return (
    <div className=' flex justify-between py-5 px-10 text-lg'>
        <div className="text-orange-500 font-semibold">Songs</div>
        <div className="flex gap-2 p-2 text-white bg-orange-500 rounded-3xl">
            <h2>Favourite</h2>
            <h2>2</h2>
        </div>
    </div>
  )
}

export default Navbar