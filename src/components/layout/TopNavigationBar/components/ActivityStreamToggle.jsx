import { lazy } from 'react';
import { Suspense, useState } from 'react';
import FallbackLoading from '@/components/FallbackLoading';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useLayoutContext } from '@/context/useLayoutContext';
const ActivityStream = lazy(() => import('@/components/ActivityStream'));
const ActivityStreamToggle = () => {
  const {
    activityStream: {
      open,
      toggle
    }
  } = useLayoutContext();
  const [hasOpenedOnce, setHasOpenedOnce] = useState(open);
  const toggleActivityStreamOffcanvas = () => {
    if (!hasOpenedOnce) setHasOpenedOnce(true);
    toggle();
  };
  return <>
      <div className="topbar-item d-none d-md-flex">
        <button onClick={toggleActivityStreamOffcanvas} className="topbar-button">
          <IconifyIcon icon="iconamoon:history-duotone" className="fs-24 align-middle" />
        </button>
      </div>

      <Suspense fallback={<FallbackLoading />}>{hasOpenedOnce && <ActivityStream open={open} toggle={toggleActivityStreamOffcanvas} />}</Suspense>
    </>;
};
export default ActivityStreamToggle;