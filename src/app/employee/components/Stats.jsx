import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useEffect, useState } from 'react';
import * as API from "../EmployeeAPI"

const statisticData = [{
  icon: 'bx:layer',
  iconColor: 'primary',
  title: 'Total Employee',
  amount: '13, 647',
  change: '2.3',
  changeColor: 'success'
}, {
  icon: 'bx:award',
  iconColor: 'success',
  title: 'Editor',
  amount: '9, 526',
  change: '8.1',
  changeColor: 'success'
}, {
  icon: 'bxs:backpack',
  iconColor: 'danger',
  title: 'Normal User',
  amount: '976',
  change: '0.3',
  changeColor: 'danger'
}, {
  icon: 'bx:dollar-circle',
  iconColor: 'warning',
  title: 'Content Team',
  amount: '$123',
  change: '10.6',
  changeColor: 'danger'
}]
const StatCard = ({
  stat,
  number
}) => {

  const {
    icon,
    iconColor,
    title
  } = stat;
  return <Card>
    <CardBody>
      <Row>
        <Col xs={6}>
          <div className={`avatar-md bg-${iconColor} rounded flex-centered`}>
            <IconifyIcon icon={icon} className="fs-24 text-white" />
          </div>
        </Col>
        <Col xs={6} className="text-end">
          <p className="text-muted mb-0 text-truncate">{title}</p>
          <h3 className="text-dark mt-1 mb-0">{number}</h3>
        </Col>
      </Row>
    </CardBody>
  </Card>;
};
const Statistics = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0])
  useEffect(() => {
    API.getEmployeeStates().then((res) => {
      const States = res.data
      setNumbers([States.totalCount, States.editor, States.userCount, States.contentCount])
    }).catch((e) => {
      if (e.response?.data?.message) {
        showNotification({
          message: e.response?.data?.message,
          variant: 'danger'
        });
      }
      else {
        showNotification({
          message: "Server Connection Failed",
          variant: 'danger'
        });
      }
    })
  }, [])
  return <Row>
    {statisticData.map((stat, idx) => <Col md={6} xl={3} key={idx}>
      <StatCard stat={stat} number={numbers[idx]} />
    </Col>)}
  </Row>;
};
export default Statistics;