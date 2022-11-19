import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div` 
   background: grey;
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
     height: 100%;
     width: 80px;
     padding: 20px 50px;
`;

export const Cnamecontainer = styled.div`
   width: 50%;
   height: 120%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-bottom: 25px;
   text-transform: uppercase;
   font-family: 'Open Sans Condensed';
   font-weight: bolder;
   font-size: 24px;
   letter-spacing: 0.5px;
   color: white;
   a:link { text-decoration: none; }
   a:visited { text-decoration: none; }
   a:hover { text-decoration: none; }
   a:active { text-decoration: none; }
`;

export const  NavLinks = styled.div`
 a:link { text-decoration: none; }
 a:visited { text-decoration: none; }
 a:hover { text-decoration: none; }
 a:active { text-decoration: none; }
 width: 50%;
 height: 100%;
 display: flex;
 align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  color: white;
  padding: 40px 60px;
  cursor: pointer;
`;