import useLocale from './blabla'; //idioma de aplicación
import useUser from './blablabla'; //info del usuario

export const usePOKEUserIdioma = () => {
  const { userMail, userName, userAge } = useUser();
  const { language, currentTime } = useLocale();

  const estaJubilado = () => userAge > 80 ? true : false;

  return { mail, userName, userAge, language, currentTime, estaJubilado };
};
