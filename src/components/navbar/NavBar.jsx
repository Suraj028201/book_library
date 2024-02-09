import { useState } from 'react';
import Logo from '../../assets/logo.png';
import './navbar.css';
import { Button } from 'react-bootstrap';

const NavBar = ({handleSearch}) => {

  const [searchedText, setSearchedText] = useState('');

  const handleKeyPress = (e) => {
    console.log(e, 'key up')
    e.preventDefault();
    if (e.key === 'Enter') {
      handleSearch(searchedText);
    }
  };

  return (
    <div className="navbar navbar-light">
        <div className="container">
            <div>
                <img src={Logo} />
            </div>
            <div className="d-flex search-bar">
              <input 
                className="form-control me-2"
                placeholder="Search" 
                onChange={(e) => setSearchedText(e.target.value)}
                value={searchedText}
                onKeyUp={handleKeyPress}
              />
              <Button variant='light' onClick={() => handleSearch(searchedText)}>Search</Button>
            </div>
        </div>
    </div>
  );
}

export default NavBar;