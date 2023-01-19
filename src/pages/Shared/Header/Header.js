import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
 
    const menuItem = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/profile'}>Profile</Link></li>
    </>


    return (
        <div className="navbar bg-slate-700 text-white h-20">
    <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
        <h3 className='ml-2 text-3xl'><span className='text-yellow-400'>C</span>ompter <span className='text-yellow-400'>S</span>cience</h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
    {menuItem}
    </ul>
  </div>
</div>
    );
};

export default Header;