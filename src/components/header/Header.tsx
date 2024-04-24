import "./header.css";

function Header() {
  return (
    <header className="header border-b">
      <nav className="justify-between flex w-full flex-wrap py-3">
        <div className="flex items-center gap-3 flex-wrap">
          <div>
            <h4 className="font-medium text-[#1A2024]">Cегодняшние заказы</h4>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
