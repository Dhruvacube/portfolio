import React from "react";
import Image from "next/image";
import { TechStacksArray } from "../public/data/tech_stack";

type Item = {
  name: string;
  rel_path: string;
};

const data = TechStacksArray;

function TechStacks() {
  return (
    <section>
      <span className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
        Tools Handled &amp; In-Use by me :
      </span>
      <hr />
      <br />
      <div className="grid gap-4 grid-cols-10">
        {data.map((item: Item) => {
          return (
            <Image
              key={item.name}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
                item.rel_path +
                ".svg"
              }
              alt={item.name}
              title={item.name}
              width="40"
              height="40"
            />
          );
        })}
      </div>
    </section>
  );
}

export default TechStacks;
