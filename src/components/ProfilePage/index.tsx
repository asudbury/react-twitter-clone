import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/3384470?v=4"
            alt="Adrian Sudbury"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>Adrian Sudbury</h1>
        <h2>asudbury</h2>

        <p>
          Developer at{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://github.com/asudbury" target="_blank">
            @ScorchioLtd
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Nottingham, England
          </li>
          <li>
            <CakeIcon />
            Born on March 03, 1966
          </li>
        </ul>

        <Followage>
          <span>
            <strong>9,145,783 </strong>
            Following
          </span>
          <span>
            <strong>1,234,102 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
