import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Topic({ path, title, subtopics }) {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <ul>
      <li className={location.pathname.includes(path) && "active"}>
        <Link to={path} onClick={handleIsOpen}>
          <span>{title}</span>
          {subtopics && (!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />)}
        </Link>
        {subtopics && (
          <ul className={isOpen && "ul-active"}>
            {subtopics.map((subtopic) => {
              return (
                <li
                  className={
                    path + subtopic.slug === location.pathname && "active"
                  }
                >
                  <Link to={path + subtopic.slug}>{subtopic.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </ul>
  );
}
