import React from "react";

import {Container, Name, Description, Footer, Lang, Link} from './style';

const Repository = () => (
        <Container color="#f37272">
            <Name>Repository</Name>
            <Description>Repository Description</Description>
            <Footer color="#f37272">
                <Lang>Repository Lang</Lang>
                <Link href="https://devsamurai.com.br" target="_blank">Ver</Link>
            </Footer>
        </Container>
)

export default Repository;