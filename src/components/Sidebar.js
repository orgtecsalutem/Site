import { Topic } from "./Topic";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Conteúdo</h3>
      <Topic title="Primeiro tópico" />
      <Topic title="Segundo tópico" />
      <Topic title="Terceiro tópico" />
    </aside>
  );
}
