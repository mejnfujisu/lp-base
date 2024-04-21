import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { HomeSetting } from '../../../element/icons';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0 });

   useEffect(() => {
      if (hidding) {
         setTimeout(() => {
            setIsDisplay('none');
         }, 2000);
      } else setIsDisplay('')

      if (active) {
         setTimeout(() => {
            setVisisbleAnimation({
               padding: '15%',
               transition: 'opacity 2s',
               opacity: 1,
            });
         }, 100);
      } else setVisisbleAnimation({ opacity: 0 });
   }, [hidding, active]);

   return (
      <>
         {!active ?
            (
               <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{ display: isDisplay }}>
                  <div className={styles['h-content']}>
                     <div style={{ padding: '15%' }}>
                        <HomeSetting width={''} height={''} fill={''} />
                     </div>
                  </div>
               </div>
            ) :
            (
               <div className={`${styles['section']} ${styles['s-filled']}`}>
                  <div className={styles['s-content']}>
                     <div style={{ padding: '15%' }}>
                        <HomeSetting width={''} height={''} fill={''} />
                     </div>
                     <div style={visisbleAnimation}>
                        <HomeSetting width={''} height={''} fill={''} />
                     </div>
                     <div style={visisbleAnimation}>
                        <HomeSetting width={''} height={''} fill={''} />
                     </div>
                     <div style={visisbleAnimation}>
                        <HomeSetting width={''} height={''} fill={''} />
                     </div>
                  </div>
               </div>
            )
         }
      </>
   );
}

export default Component;
