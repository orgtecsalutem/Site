import { useState } from "react";

import { Topic } from "./Topic";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { topics } from "../utils/topics";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="sidebar-container">
      <aside className={`sidebar ${isOpen && "open"}`}>
        <h3>Conteúdo</h3>
        {topics.map((topic, index) => {
          return (
            <Topic
              key={index}
              title={topic.title}
              path={topic.slug}
              subtopics={topic.subtopics}
            />
          );
        })}
      </aside>
      <aside
        className={`open-sidebar ${isOpen && "open"}`}
        onClick={handleIsOpen}
      >
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </aside>
    </div>
  );
}
