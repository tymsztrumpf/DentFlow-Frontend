import { HomeContainer, StyledHeading} from "./MyClinic.styles";
import React, {useContext, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {NavbarContext} from "../../context/NavbarContext";
import {OwnerPages} from "../../models/pages/OwnerPages";
import Table from "./Table";
import {ClinicContext} from "../../context/ClinicContext";


export const MyClinic = ( ) => {
    const {currentClinic } = useContext(ClinicContext);
    const {pagesModifier } = useContext(NavbarContext);
    useEffect(() => {
        pagesModifier(OwnerPages);
    }, [pagesModifier]);

  return (
      <>
          <HomeContainer>
              <StyledHeading>{currentClinic?.name}</StyledHeading>
              <StyledHeading>Pracownicy:</StyledHeading>
            <Table/>
          </HomeContainer>
          <Outlet/>
      </>
  );
};
