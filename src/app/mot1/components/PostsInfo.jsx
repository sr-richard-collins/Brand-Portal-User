import React, { useEffect, useState } from 'react';
import { useNotificationContext } from '@/context/useNotificationContext';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import * as API from '../dashAPI';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

export const stateData = [{
  icon: 'iconamoon:folder-document',
  iconColor: 'info',
  amount: '59.6',
  title: 'Total Active Posts',
  badgeIcon: 'iconamoon:certificate-badge'
}, {
  icon: 'iconamoon:folder-remove',
  iconColor: 'success',
  amount: '24.03',
  title: 'Total InActive Posts',
  badgeIcon: 'iconamoon:badge'
}];

const StatCard = ({ stat }) => {
  const {
    amount,
    badgeIcon,
    icon,
    iconColor,
    title
  } = stat;
  return (
    <Card>
      <CardBody className="overflow-hidden position-relative">
        <IconifyIcon icon={icon} className={`fs-36 text-${iconColor}`} />
        <h3 className="mb-0 fw-bold mt-3 mb-1">
          {amount}
        </h3>
        <p className="text-muted">{title}</p>
        <IconifyIcon icon={badgeIcon} className="widget-icon" />
      </CardBody>
    </Card>
  );
};
const TreeNode = ({ node }) => {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: '20px', marginBottom: '10px', fontSize: '25px' }}>
      <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span><strong>{node.name}</strong></span>
        <span style={{ marginLeft: 'auto', paddingLeft: '10px', marginRight: "20px" }}>{node.total_post_count}</span>
      </li>
      {node.children && node.children.length > 0 && (
        <ul style={{ listStyleType: 'none', paddingLeft: '20px', marginBottom: '10px' }}>
          {node.children.map((child, idx) => (
            <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {">>"} &nbsp;
              <span>{child.name}</span>
              <span style={{ marginLeft: 'auto', marginRight: "20px" }}><strong>{child.total_post_count}</strong></span>
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
};

const PostsInfo = () => {
  const { showNotification } = useNotificationContext();
  const [postStates, setPostStates] = useState([0, 0]);
  const [treeData, setData] = useState([]);

  useEffect(() => {
    API.getPosts().then((res) => {
      setPostStates([res.data["Total Active Posts"], res.data["Total InActive Posts"]]);
      setData(res.data["Category Wise Post"]);
    }).catch((e) => {
      if (e.response?.data?.message) {
        showNotification({
          message: e.response?.data?.message,
          variant: 'danger'
        });
      } else {
        showNotification({
          message: "Server Connection Failed",
          variant: 'danger'
        });
      }
    });
  }, []);


  return (
    <>
      <Row>
        {stateData.map((stat, idx) => (
          <Col lg={6} md={12} className="col-xl" key={idx}>
            <StatCard stat={{ ...stat, amount: postStates[idx] }} />
          </Col>
        ))}
      </Row>
      <Card>
        <CardBody className="overflow-hidden position-relative">
          {treeData.map((node, idx) => (
            <TreeNode node={node} key={idx} />
          ))}
        </CardBody>
      </Card>
    </>
  );
}

export default PostsInfo;
