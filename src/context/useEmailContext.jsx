import { createContext, useContext, useState } from 'react';
const EmailContext = createContext(undefined);
export const useEmailContext = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmailContext can only be used within EmailProvider');
  }
  return context;
};
export const EmailProvider = ({
  children
}) => {
  const [activeLabel, setActiveLabel] = useState('Primary');
  const [activeMail, setActiveMail] = useState('2001');
  const [offcanvasStates, setOffcanvasStates] = useState({
    showNavigationMenu: false,
    showEmailDetails: false,
    showComposeEmail: false
  });
  const changeActiveLabel = newLabel => {
    setActiveLabel(newLabel);
  };
  const changeActiveMail = newMail => {
    setActiveMail(newMail);
    toggleEmailDetails();
  };
  const toggleNavigationMenu = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showNavigationMenu: !offcanvasStates.showNavigationMenu
    });
  };
  const toggleEmailDetails = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showEmailDetails: !offcanvasStates.showEmailDetails
    });
  };
  const toggleComposeEmail = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showComposeEmail: !offcanvasStates.showComposeEmail
    });
  };
  const navigationBar = {
    open: offcanvasStates.showNavigationMenu,
    toggle: toggleNavigationMenu
  };
  const emailDetails = {
    open: offcanvasStates.showEmailDetails,
    toggle: toggleEmailDetails
  };
  const composeEmail = {
    open: offcanvasStates.showComposeEmail,
    toggle: toggleComposeEmail
  };
  return <EmailContext.Provider value={{
    activeLabel,
    changeActiveLabel,
    activeMail,
    changeActiveMail,
    navigationBar,
    emailDetails,
    composeEmail
  }}>
      {children}
    </EmailContext.Provider>;
};