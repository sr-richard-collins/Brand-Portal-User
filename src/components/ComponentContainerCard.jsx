import clsx from 'clsx';
import { Card, CardBody, CardTitle } from 'react-bootstrap';
const ComponentContainerCard = ({
  title,
  id,
  description,
  children,
  titleClass
}) => {
  return <Card>
      <CardBody>
        <CardTitle as={'h5'} className={clsx('anchor mb-1', titleClass)} id={id}>
          {title}
          <a className="anchor-link" href={`#${id}`}>
            #
          </a>
        </CardTitle>
        {!!description && <p className="text-muted">{description}</p>}
        <>{children}</>
      </CardBody>
    </Card>;
};
export default ComponentContainerCard;