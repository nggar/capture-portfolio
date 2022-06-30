import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1>
                <Link to='/' id="logo">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>About us</Link>
                    <Line initial={{ width: '0%' }}
                        animate={{ width: pathname === '/' ? '120%' : '0%' }}
                        transition={{ duration: .75 }} />
                </li>
                <li>
                    <Link to='work'>Our Work</Link>
                    <Line initial={{ width: '0%' }}
                        animate={{ width: pathname === '/work' ? '120%' : '0%' }}
                        transition={{ duration: .75 }} />
                </li>
                <li>
                    <Link to='contact'>Contact Us</Link>
                    <Line initial={{ width: '0%' }}
                        animate={{ width: pathname === '/contact' ? '120%' : '0%' }}
                        transition={{ duration: .75 }} />
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
    margin-left: 10rem;
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
const Line = styled( motion.div )`
    height: .3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -50%;
    left: -10%;
`

export default Nav;
