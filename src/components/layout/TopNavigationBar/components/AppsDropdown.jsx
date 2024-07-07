import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getTopbarIntegratedApps } from '@/helpers/data';
const AppsDropdown = () => {
  const appsList = getTopbarIntegratedApps();
  return <Dropdown className="topbar-item d-none d-lg-flex" align="end">
      <DropdownToggle as="button" className="topbar-button content-none" aria-haspopup="true">
        <IconifyIcon icon="iconamoon:apps" className="fs-24 align-middle" />
      </DropdownToggle>
      <DropdownMenu className="p-0">
        <div className="p-1">
          {appsList.map((app, idx) => <DropdownItem key={app.name + idx} className="py-2">
              <img src={app.image} height={24} width={24} className="avatar-xs" alt={app.name + '-icon'} />
              <span className="ms-2">
                {app.name}: <span className="fw-medium">{app.handle}</span>
              </span>
            </DropdownItem>)}
        </div>
      </DropdownMenu>
    </Dropdown>;
};
export default AppsDropdown;