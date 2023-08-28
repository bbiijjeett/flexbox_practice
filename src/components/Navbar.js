import React,{useState,useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {

  const [scrolled,setScrolled]= useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(" ")}> 
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Topic</li>
            <li>Contact</li>
        </ul>
    </nav>
  );

  
};

export default Navbar;