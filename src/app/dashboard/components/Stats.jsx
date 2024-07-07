import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useState, useEffect } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import * as API from "../dashAPI"
export const stateData = [{
  icon: 'iconamoon:profile',
  variant: 'primary'
}, {
  icon: 'iconamoon:edit-duotone',
  variant: 'success'
}, {
  icon: 'iconamoon:box',
  variant: 'danger'
}, {
  icon: 'iconamoon:profile-circle-duotone',
  variant: 'warning'
}, {
  icon: 'iconamoon:trend-up-bold',
  variant: 'info'
}, {
  icon: 'iconamoon:trend-up-bold',
  variant: 'primary'
}];
const StatCard = ({ info, name, amount }) => {
  return <Card>
    <CardBody>
      <Row>
        <Col xs={6}>
          <div className={`avatar-md bg-opacity-10 rounded flex-centered bg-${info.variant}`}>
            <IconifyIcon icon={info.icon} height={32} width={32} className={`text-${info.variant} `} />
          </div>
        </Col>
        <Col xs={6} className="text-end">
          <h4 className="text-muted mb-0 text-truncate">{name}</h4>
          <h3 className="text-dark mt-1 mb-0">{amount}</h3>
        </Col>
      </Row>
    </CardBody>
  </Card>;
};
const Stats = () => {
  const [states, setStates] = useState([])
  useEffect(() => {
    API.getEmployee().then((res) => {
      const result = []
      Object.keys(res.data).map(key => {
        result.push({ name: key.toUpperCase(), amount: res.data[key] })
      });
      setStates(result)
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
    {states.map((state, idx) => <Col md={6} xxl={12} key={idx}>
      <StatCard info={stateData[idx]} name={state.name} amount={state.amount} />
    </Col>)}
  </Row>;
};
export default Stats;