import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as ELogo } from '../../assets/eth_adobe_express.svg';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Cnamecontainer,
} from "./navigation.styles";

export const Navigation = () => {
  return (
    <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
          <ELogo className='logo'/>
          </LogoContainer>
          <Cnamecontainer>N F T - D A P P</Cnamecontainer>
          <NavLinks>
            <NavLink to="/shop">Explore</NavLink>
            <NavLink>Features</NavLink>

            <NavLink to="/auth">Community</NavLink>

            <NavLink to="/shop">Connect</NavLink>
          </NavLinks>
        </NavigationContainer>
        <Outlet />
    </Fragment>
  );
};
