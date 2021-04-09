import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import {useTranslation} from 'react-i18next'

const Toggle = ({theme,  toggleTheme }) => {
  const {t, i18n} = useTranslation()
    return (
        <Button onClick={toggleTheme} >
          {theme == "light" ? t('dark') : t('light')}
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttontext};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
`

export default Toggle;
