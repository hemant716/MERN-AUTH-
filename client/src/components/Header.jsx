
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-400'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
