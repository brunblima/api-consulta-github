import React from "react";

import{ MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'

import { Container, Header, Avatar, Login, Name, Data, Inner } from './style'

const Profile = () => (
  <Container>
    <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/51246639?v=4"/>
        <Login>brunblima </Login>
        <Name>Bruno Lima</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
      <Data><MdWork size={20}/>
      Bruno Lima
      </Data>
      <Data>
        <MdLocationCity size={20}/>
        João Pessoa
        </Data>
      <Data>
        <MdLink size={20}/>
        <a href="https://github.com/brunblima">Github</a>
      </Data>
    </Inner>
  </Container>
)

export default Profile;