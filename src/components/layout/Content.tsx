import type { FC } from 'react';
import '@styles/content.css';

export const Content: FC = () => {
  return (
    <div className="Content">
      <div className="flexchild flexshape01">
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et
        </div>
      </div>
      <div className="flexchild flexshape02"></div>
      <div className="flexchild flexshape01"></div>
    </div>
  );
};
