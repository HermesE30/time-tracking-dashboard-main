import React, { useState } from 'react';
import * as Styled from './styles';

export default function Profile({
  /**
   * user avatar
   */
  avatar,
  /**
   * name of user
   */
  username,
  /** propagate on clcik event */
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
    <Styled.CardContainer>
      <Styled.Content>
        <Styled.Avatar
          src={avatar}
          align={username}
        />
        <Styled.User>
          <Styled.Title>
            Report for
          </Styled.Title>
          <Styled.Username>
            {username}
          </Styled.Username>
        </Styled.User>
      </Styled.Content>
      <Styled.Navigation>
        {
          navigationItems.map((nav) => (
            <Styled.Item active={isActive === nav} onClick={() => handleClick(nav)}>
              {nav}
            </Styled.Item>
          ))
        }
      </Styled.Navigation>
    </Styled.CardContainer>
  );
}
