import { lazy } from 'react';
import { useState } from 'react';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useLayoutContext } from '@/context/useLayoutContext';
const ThemeCustomizer = lazy(() => import('@/components/ThemeCustomizer'));
const ThemeCustomizerToggle = () => {
  const {
    themeCustomizer: {
      open,
      toggle
    }
  } = useLayoutContext();
  const [hasOpenedOnce, setHasOpenedOnce] = useState(open);
  const toggleThemeCustomizerOffcanvas = () => {
    if (!hasOpenedOnce) setHasOpenedOnce(true);
    toggle();
  };
  return <>
      <div className="topbar-item d-none d-md-flex">
        <button onClick={toggleThemeCustomizerOffcanvas} type="button" className="topbar-button">
          <IconifyIcon icon="iconamoon:settings-duotone" className="fs-24 align-middle" />
        </button>
      </div>
      {hasOpenedOnce && <ThemeCustomizer open={open} toggle={toggleThemeCustomizerOffcanvas} />}
    </>;
};
export default ThemeCustomizerToggle;