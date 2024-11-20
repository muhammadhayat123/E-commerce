import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container flex  w-fit gap-10 mx-auto font-medium py-4 text-blakish">
        <Link href="#" className="navbar_link relative">HOME</Link>
        <Link href="#" className="navbar_link relative">CATEGORIES</Link>
        <Link href="#" className="navbar_link relative">MEN'S</Link>
        <Link href="#" className="navbar_link relative">WOMEN'S</Link>
        <Link href="#" className="navbar_link relative">JEWELRY</Link>
        <Link href="#" className="navbar_link relative">PERFUME</Link>
        <Link href="#" className="navbar_link relative">BLOG</Link>
        <Link href="#" className="navbar_link relative">HOT OFFER</Link>
      </div>
    </div>
  );
};

export default Navbar;
