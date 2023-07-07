import {classNames} from "shared/lib/classNames";
import styles from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "widgets/Button/Button";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}>{t('Язык')}
        </Button>
    );
};




