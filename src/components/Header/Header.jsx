import { SearchBar } from "../Search/Search";
import './Header.css'
export const Header = () => {
  return (
    <>
    <div className="header">
      <h1>SipMi</h1>
      <SearchBar/>
    </div>
    </>
  );
};
