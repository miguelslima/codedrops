import React, { useContext } from 'react';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components'
import { shade } from 'polished'

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  
  return (
    <Container>
      Tema light/dark com React, Styled Components e TypeScript | Code/Drops #16

      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.12, colors.primary)}
        onColor={colors.secundaty}
      />
    </Container>
  )
}

export default Header;