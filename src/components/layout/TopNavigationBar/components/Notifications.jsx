import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { getNotifications } from '@/helpers/data';
const NotificationItem = ({
  from,
  content,
  icon
}) => {
  return <DropdownItem className="py-3 border-bottom text-wrap">
      <div className="d-flex">
        <div className="flex-shrink-0">
          {icon ? <img src={icon} className="img-fluid me-2 avatar-sm rounded-circle" alt="avatar-1" /> : <div className="avatar-sm me-2">
              <span className="avatar-title bg-soft-info text-info fs-20 rounded-circle">{from.charAt(0).toUpperCase()}</span>
            </div>}
        </div>
        <div className="flex-grow-1">
          <p className="mb-0 fw-semibold">{from}</p>
          <p className="mb-0 text-wrap">{content}</p>
        </div>
      </div>
    </DropdownItem>;
};
const Notifications = () => {
  const notificationList = getNotifications();
  return <Dropdown className="topbar-item" align={'end'}>
      <DropdownToggle as="button" className="content-none topbar-button position-relative" aria-haspopup="true">
        <IconifyIcon icon="iconamoon:notification-duotone" className="fs-24 align-middle" />
        <span className="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">
          {notificationList.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </DropdownToggle>
      <DropdownMenu className="py-0 dropdown-lg">
        <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
          <Row className="align-items-center">
            <Col>
              <h6 className="m-0 fs-16 fw-semibold"> Notifications</h6>
            </Col>
            <Col xs="auto">
              <Link to="" className="text-dark text-decoration-underline">
                <small>Clear All</small>
              </Link>
            </Col>
          </Row>
        </div>
        <SimplebarReactClient style={{
        maxHeight: 280
      }}>
          {notificationList.map((notification, idx) => <NotificationItem key={idx} {...notification} />)}
        </SimplebarReactClient>
        <div className="text-center py-3">
          <Button size="sm" variant="primary" className="icons-center">
            View All Notification
            <IconifyIcon icon="bx:right-arrow-alt" className="ms-2" />
          </Button>
        </div>
      </DropdownMenu>
    </Dropdown>;
};
export default Notifications;