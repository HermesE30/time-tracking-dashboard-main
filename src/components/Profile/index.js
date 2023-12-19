import React, { useState } from 'react';
import {
  Avatar,
  CardContainer,
  Content,
  Item,
  Navigation,
  Title,
  User,
  Username,
} from './styles';

export default function Profile({
  /**
   * user avatar
   */
  avatar,
  /**
   * name of user
   */
  username,
  /** propagate on click event */
  onClick,
  /**
   * recebe um array de string
   * para definir a navegação
   */
  navigationItems = [],
}) {
  // state
  const [isActive, setIsActive] = useState('daily');
  /** manipula evento de click */
  function handleClick(value) {
    setIsActive(value);
    if (onClick) onClick(value);
  }

  return (
    <CardContainer>
      <Content>
        <Avatar src={avatar} align={username} />
        <User>
          <Title>Report for</Title>
          <Username>{username}</Username>
        </User>
      </Content>
      <Navigation>
        {navigationItems.map((nav, index) => (
          <Item
            key={nav + index}
            active={isActive === nav}
            onClick={() => handleClick(nav)}
          >
            {nav}
          </Item>
        ))}
      </Navigation>
    </CardContainer>
  );
}
