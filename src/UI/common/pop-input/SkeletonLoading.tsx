import { FC } from 'react';
import styles from './self.module.css';
import { ModalProps, Skeleton } from 'antd';
import PopContent from '.';

interface Props extends ModalProps {
   background?: string;
   style?: any;
   active?: boolean;
   height?: string | number;
}

const SkeletonLoading: FC<Props> = (props) => {
   const { height, background, style, active } = props;
   
   if(!active) style.backgroundColor = '';
   style.height = height;

   return (
      <>
         <Skeleton.Input
            block
            active={active}
            style={style}
         />

      </>
   );
};

export default SkeletonLoading;
