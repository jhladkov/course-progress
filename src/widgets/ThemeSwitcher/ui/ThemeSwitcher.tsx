import {classNames} from "shared/lib/classNames";
import styles from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import {Button, ThemeButton} from "widgets/Button/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            TOGGLE
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};
