import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-dark-background sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
      <Logo />
      <Nav />
      <h1 className="text-3xl font-bold underline text-cyan-700">
        what do you mean{" "}
      </h1>
    </header>
  );
};
export default Header;
