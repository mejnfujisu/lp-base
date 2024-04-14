import React from 'react';
import styles from './self.module.css';

interface Props {
  active?: boolean;
}

const Tour: React.FC<Props> = (props) => {

  const { active } = props;
  return (
    <>
      {!active ?
        (
          <div className={`${styles['s-section']}`}>
            <div className={styles['content']}></div>
          </div>
        ) :
        (
          <div className={`${styles['s-section']}`}>
            <div className={styles['content']}></div>
          </div>
        )
      }
    </>
  );
}

export default Tour;
