import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link to='/' id="logo">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>1. About us</Link>
                </li>
                <li>
                    <Link to='work'>2. Our Work</Link>
                </li>
                <li>
                    <Link to='contact'>3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 2.2rem;
    font-family: "Lobster Two", cursive;
    font-weight: lighter;
  }
`

export default Nav;
