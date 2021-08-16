import { Topic } from "./Topic";

import { topics } from "../utils/topics";

export function Sidebar() {
  return (
    <aside className="sidebar">
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
  );
}
