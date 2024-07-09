import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, CardBody, Col, Row, Tab, Tabs } from 'react-bootstrap'
import Profile from './Profile'
import { useState } from 'react'
import clsx from 'clsx'
const wizardSteps = [
  {
    index: 1,
    name: 'Profile',
    icon: 'iconamoon:profile-duotone',
    tab: <Profile />,
  },
]
const HorizontalWizard = () => {
  return (
    <Card>
      <CardBody>
        <div className="mb-5">
          <div id="horizontalwizard">
            <Tabs
              onSelect={(e) => setActiveStep(Number(e))}
              activeKey={1}
              variant="pills"
              justify
              className="icon-wizard form-wizard-header bg-light p-1">
              {wizardSteps.map((step) => (
                <Tab
                  key={step.index}
                  as={'span'}
                  className="rounded-0 py-2"
                  eventKey={step.index}
                  title={
                    <>
                      <IconifyIcon icon={step.icon} className="fs-26" />
                      {step.name}
                    </>
                  }>
                  <>{step.tab}</>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

const AllWizard = () => {
  return (
    <Row>
      <Col xs={12}>
        <HorizontalWizard />
      </Col>
    </Row>
  )
}
export default AllWizard
