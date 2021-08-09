import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Topic({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <ul>
      <li>
        <a href="#" onClick={handleIsOpen}>
          <span>{title}</span>
          {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </a>
        <ul className={isOpen && "ul-active"}>
          <li>
            <a href="">Primeiro subtópico</a>
          </li>
          <li>
            <a href="">Segundo subtópico</a>
          </li>
          <li>
            <a href="">Terceiro subtópico</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
