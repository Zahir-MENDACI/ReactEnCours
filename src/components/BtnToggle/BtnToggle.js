import React, { useContext } from 'react';
import { ThemeContext } from '../../config/Context/ThemeContext';
import './BtnToggle.css'
import {useTranslation} from 'react-i18next'

const BtnToggle = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)

    const {t, i18n} = useTranslation()
    
    return (
        <div 
            onClick={toggleTheme}
            className={theme ? "btn-toggle goLight" : "btn-toggle goDark"}
        >
                {theme ? t('dark') : t('light')}
        </div>
    );
};

export default BtnToggle;