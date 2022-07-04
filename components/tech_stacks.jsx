import Image from "next/image";

const TextStacks = () => {
  return (
    <section>
      <span className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
        Tools Handled &amp; In-Use by me :
      </span>
      <hr />
      <br />
      <p>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-plain.svg"
          alt="arduino"
          title="arduino"
          width="40"
          height="40"
        />
      </p>
    </section>
  );
};

export default TextStacks;
