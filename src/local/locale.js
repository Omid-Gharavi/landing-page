import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fa from './fa'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ...fa
        },
        lng: 'en_US',
        fallbackLng: 'en_US',
        debug: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;