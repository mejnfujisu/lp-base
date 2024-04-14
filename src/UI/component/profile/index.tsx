import React from 'react';
import styles from './self.module.css';

interface Props {
  active?: boolean;
}

const Profile: React.FC<Props> = (props) => {

  const { active } = props;
  return (
    <>
      {!active ?
        (
          <div className={`g-section ${styles['s-section']}`}>
            <div className={styles['content']}></div>
          </div>
        ) :
        (
          <div className={`g-section}`}>
            <div className={styles['content']}></div>
          </div>
        )
      }
    </>
  );
}

export default Profile;
