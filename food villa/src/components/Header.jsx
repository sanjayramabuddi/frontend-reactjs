function Header() {
  return (
    <div className="flex justify-between">
      <a href={"/"}>
        <img
          className="h-12"
          alt="logo"
          src="https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png"
        />
      </a>
      <div className="flex space-x-8 cursor-pointer">
        <span>Search</span>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Cart</span>
      </div>
    </div>
  );
}

export default Header;
