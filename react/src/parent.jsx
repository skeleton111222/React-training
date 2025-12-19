import Children from "./children";

const Parent = () => {
  return (
    <div>
      <nav>Navbar</nav>

      <Children>
        <p>Children component in parent </p>
        <button>Click Me!</button>
      </Children>

      <footer>Footer</footer>
    </div>
  );
};

export default Parent;
