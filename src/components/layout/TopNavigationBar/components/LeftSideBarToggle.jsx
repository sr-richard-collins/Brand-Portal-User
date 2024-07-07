import { useEffect, useRef } from 'react';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useLayoutContext } from '@/context/useLayoutContext';
import { useLocation } from 'react-router-dom';
const LeftSideBarToggle = () => {
  const {
    menu: {
      size
    },
    changeMenu: {
      size: changeMenuSize
    },
    toggleBackdrop
  } = useLayoutContext();
  const {
    pathname
  } = useLocation();
  const isFirstRender = useRef(true);
  const handleMenuSize = () => {
    if (size === 'hidden') toggleBackdrop();
    if (size === 'condensed') changeMenuSize('default');else if (size === 'default') changeMenuSize('condensed');
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (size === 'hidden') {
      toggleBackdrop();
    }
  }, [pathname]);
  return <div className="topbar-item">
      <button onClick={handleMenuSize} type="button" className="button-toggle-menu">
        <IconifyIcon icon="iconamoon:menu-burger-horizontal" className="fs-22" />
      </button>
    </div>;
};
export default LeftSideBarToggle;