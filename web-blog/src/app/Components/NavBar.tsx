import React from 'react'
import Link from "next";
export default function NavBar() {
  return (
    <nav className="max-w-64 drop-shadow-xl sticky mx-auto rounded bg-slate-600 flex justify-between">
        <div className='hover:bgcolor-whitesmoke'>Page 1</div>
        <div>Page 2</div>
        <div>Page 3</div>
    </nav>
  )
}
