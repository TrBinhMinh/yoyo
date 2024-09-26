import { Feed } from '../pages/Homepage';
import classes from './Feeds.module.css';

interface ContainerProps {
  feeds: Feed[];
}

const Feeds: React.FC<ContainerProps> = ({ feeds }) => {
  return (
    <div className={classes.container}>
      {feeds.map(({ _id, title, content, creator, comments }) =>
        <div className={classes.feeds} key={_id}>
          <p>{creator}</p>
          <p>{title}</p>
          <p>{content}</p>
          <div>{comments.map(comment => <p>{comment.content}</p>)}</div>
        </div>
      )}
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default Feeds;
