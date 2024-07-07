import clsx from 'clsx';
import { Col, Offcanvas, OffcanvasBody, OffcanvasHeader, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { activityStreamData } from '@/assets/data/topbar';
import { toSentenceCase } from '@/utils/change-casing';
import { getActivityIcon, getFileExtensionIcon } from '@/utils/get-icons';
import IconifyIcon from './wrappers/IconifyIcon';
import SimplebarReactClient from './wrappers/SimplebarReactClient';
const ActivityItem = ({
  title,
  icon,
  time,
  content,
  files,
  status,
  type,
  variant
}) => {
  return <div className="position-relative ps-4">
      <div className="mb-4">
        <span className={clsx(`position-absolute start-0 translate-middle-x d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20 bg-${variant}`, {
        'avatar-sm': !icon
      })}>
          {icon ? <img src={icon} height={36} width={36} alt="avatar" className="avatar-sm rounded-circle" /> : type ? <IconifyIcon icon={getActivityIcon(type)} /> : title.charAt(0).toUpperCase()}
        </span>
        <div className="ms-2">
          <h5 className="mb-1 text-dark fw-semibold fs-15 lh-base">
            {title} {status && <span className={`badge px-2 py-1 ms-1 bg-${variant}-subtle text-${variant}`}> {toSentenceCase(status)}</span>}{' '}
          </h5>
          {files && type && <p className="d-flex align-items-center">
              Added {files.length} files to{' '}
              <span className=" d-flex align-items-center text-primary ms-1">
                <IconifyIcon icon="iconamoon:file-light" /> {toSentenceCase(type)}{' '}
              </span>
            </p>}
          {content && <p>{content}</p>}
          {files && <div className="bg-light bg-opacity-50 rounded-2 p-2">
              <Row>
                {files.map((file, idx) => {
              return file.preview ? <Col lg={4} className="px-1" key={idx}>
                      <img width={107} height={71} src={file.preview} alt="" className="img-fluid rounded" />
                    </Col> : <div key={(file.name ?? '') + idx} className={clsx('border-end border-light', {
                'col-lg-6': files.length > 1
              })}>
                      <div className="d-flex align-items-center gap-2">
                        {file.name && <>
                            <IconifyIcon height={20} width={20} icon={getFileExtensionIcon(file.name)} />
                            <span role="button" className="text-dark fw-medium">
                              {file.name}
                            </span>
                            <div className="ms-auto">
                              <OverlayTrigger placement="bottom" overlay={<Tooltip className="fw-medium">Download</Tooltip>}>
                                <span>
                                  <IconifyIcon height={18} width={18} icon="iconamoon:cloud-download-duotone" className="text-primary" />
                                </span>
                              </OverlayTrigger>
                            </div>
                          </>}
                      </div>
                    </div>;
            })}
              </Row>
            </div>}
          <h6 className="mt-2 text-muted">{new Date(time).toDateString()}</h6>
        </div>
      </div>
    </div>;
};
const ActivityStream = ({
  open,
  toggle
}) => {
  const activityList = activityStreamData;
  return <div>
      <Offcanvas show={open} onHide={toggle} placement="end" className="border-0" tabIndex={-1} id="theme-activity-offcanvas" style={{
      maxWidth: 450,
      width: '100%'
    }}>
        <OffcanvasHeader closeVariant="white" closeButton className="d-flex align-items-center bg-primary p-3">
          <h5 className="text-white m-0 fw-semibold">Activity Stream</h5>
        </OffcanvasHeader>
        <OffcanvasBody className="p-0">
          <SimplebarReactClient className="h-100 p-4">
            <div className="position-relative ms-2">
              <span className="position-absolute start-0  top-0 border border-dashed h-100" />

              {activityList ? activityList.map((activity, idx) => <ActivityItem {...activity} key={idx} />) : <h4 className="text-center mb-3">No Recent Activity</h4>}
            </div>
            <button className="btn btn-outline-dark w-100">View All</button>
          </SimplebarReactClient>
        </OffcanvasBody>
      </Offcanvas>
    </div>;
};
export default ActivityStream;