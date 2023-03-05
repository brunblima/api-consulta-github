import React from "react";

import Profile from "./Profile";

import Filter from "./Filter";

import Repositories from "./Repositories";

import { Container, Siderbar, Main } from "./style";


const RepositoriesPage = () => (
    <Container>
        <Siderbar>
          <Profile/>
          <Filter/>
        </Siderbar>
        <Main>
            <Repositories/>
        </Main>
    </Container>
);

export default RepositoriesPage;