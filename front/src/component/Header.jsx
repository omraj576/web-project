import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "../index.css";


function Header() {
  const [active, setActive] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const [theme, setTheme] = useState("light-theme");
  let category = ["business", "entertainment", "general", "health", "science", "sports", "technology","politics"]
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  // function toggleTheme() {
  //   if (theme === "light-theme") {
  //     setTheme("dark-theme")
  //   }
  //   else {
  //     setTheme("light-theme")
  //   }
  // }
  return (
    <header className="">
     <nav class="fixed top-0 left-0 w-full h-auto bg-gray-1000 z-10 flex items-center justify-around">
      
      <h3 class="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">WCS News</h3>

        <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
          <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active) }}>All News</Link></li>
          <li className="dropdown-li"><Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown);}}>Headlines </Link>

            <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
              {category.map((element, index) => {
                return (
                  <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown) }}>

                    <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      {element}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          
        </ul>
        <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active) }}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;