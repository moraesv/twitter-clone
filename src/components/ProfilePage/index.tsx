import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Vinicius de Moraes</h1>
        <h2>@moraesvnc</h2>

        <p>
          Developer at <a href="http://codebit.com.br">@CodeBit</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Franca, SP
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de maio de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>200</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
