import React, { useState } from "react";
import { items } from "./navigationData";

function Navigation() {
  const [activeItem, setActiveItem] = useState("Release 6.5: New features and enhanc..."); // Estado para el elemento activo

  return (
    <nav className="p-4">
      <h2 className="text-[25px] text-black">All release notes</h2>
      <ul className="flex flex-col space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className={`text-[10px] block p-2 rounded ${
                activeItem === item
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
