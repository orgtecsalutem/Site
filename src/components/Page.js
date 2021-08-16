import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Page({ name, children }) {
  return (
    <div className={name}>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main>
          <header>{children}</header>
        </main>
      </div>
    </div>
  );
}
