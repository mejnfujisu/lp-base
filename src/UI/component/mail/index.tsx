import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { Badge } from 'antd';
import { HomeMail } from '../../../element/icons';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   // const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0.2 });

   useEffect(() => {
      if (hidding) {
         setTimeout(() => {
            setIsDisplay('none');
         }, 2000);
      } else setIsDisplay('')

      // if (active) {
      //    setTimeout(() => {
      //       setVisisbleAnimation({
      //          transition: 'opacity 2s',
      //          opacity: 1,
      //       });
      //    }, 100);
      // } else setVisisbleAnimation({ opacity: 0.2 });
   }, [hidding, active]);



   return (
      <>
         <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{ display: isDisplay }}>
            <div className={styles['h-content']}>
               <div style={{ padding: '15%' }}>
                  <Badge size="small" count={12} color="#faad14" style={{marginRight: '5%', marginTop: '5%'}}>
                  <HomeMail width={''} height={''} fill={''} />
                  </Badge>
               </div>
            </div>
         </div>
      </>
   );
}

export default Component;
