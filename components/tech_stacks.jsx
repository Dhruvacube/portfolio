import React from 'react';
import Image from "next/image";
import readFile from "fs";


function TechStacks() {
    let data = readFile("public/data/tech_stack.json", 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        return data;
      });
    const return_data = JSON.parse(data).tech_stacks;
    return (
        <section>
            <span className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
                Tools Handled &amp; In-Use by me :
            </span>
            <hr />
            <br />
            <p>
                {return_data.map((item) => {
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
            </p>
        </section>
    )
}

export default TechStacks