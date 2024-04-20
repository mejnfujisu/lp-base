import React, { useState } from 'react';
import styles from './self.module.css';

interface Props {
  active?: boolean;
  hidding?: boolean;
}

const Tour: React.FC<Props> = (props) => {
  const { active, hidding } = props;

  const [sectionPadding, setSectionPadding] = useState(10);

  const element = document.getElementById('s-id');
  element?.addEventListener('transitionend', () => {
    setSectionPadding(0);
  });
  return (
    <>
      {!active ?
        (
          <div id='s-id' className={`${styles['s-section']} ${hidding ? styles['s-hidding'] : ''}`}>
            <div className={styles['content']}></div>
          </div>
        ) :
        (
          <div className={`${styles['s-section']}`}>
            <div style={{ background: 'red', height: '100%'}}></div>
          </div>
        )
      }
    </>
  );
}

export default Tour;
