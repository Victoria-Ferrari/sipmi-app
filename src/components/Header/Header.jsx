import { SearchBar } from "../Search/Search";
import './Header.css'
export const Header = () => {
  return (
    <>
    <div className="header">
      <h2>SIPMI</h2>
      <SearchBar/>
    </div>
    </>
  );
};
