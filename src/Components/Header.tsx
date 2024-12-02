const Header = () => {
  return (
    <div className="p-4 mt-4 bg-gray-900 w-96 mx-auto items-center text-center rounded-lg ">
      <ul className="flex flex-row gap-8 justify-center">
        <li className="hover:text-cyan-400">
          <a href="#bio">Short Bio</a>
        </li>
        <li>|</li>
        <li className="hover:text-cyan-400">
          <a href="#projects">Projects</a>
        </li>
        <li>|</li>
        <li className="hover:text-cyan-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
