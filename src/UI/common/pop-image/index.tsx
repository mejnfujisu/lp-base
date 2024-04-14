import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { ModalProps, Skeleton } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import SkeletonLoading from './SkeletonLoading';

interface Props extends ModalProps {
   src: any;
   loading?: boolean,
   height?: string | number;
   width?: string | number;
   style?: any;
   type: string;
   active?: boolean;
}

const PopImage: FC<Props> = (props) => {
   const { src, height, width, style, loading, active, type } = props;

   const selfStyle = Object.assign({
      borderColor: '#FFFFFF',
      borderStyle: 'solid'

   }, style ? style : {});

   switch (type) {
      case 'circle':
         break;

      case 'large':
         selfStyle.borderRadius = 25
         break;

      case 'medium':
         selfStyle.borderRadius = 18
         break;

      case 'small':
         break;
   }

   return (
      <>
         {loading ? (
            <SkeletonLoading 
            active={active}
            height={`${height ? height : 'fit-content'}`}
            width={`${width ? width : '100%'}`}
            style={selfStyle} 
            />
         ) : (
            <img
               style={selfStyle}
               height={`${height ? height : 'fit-content'}`}
               width={`${width ? width : '100%'}`}
               src={src} alt=""
            />
         )}
      </>
   );
};

export default PopImage;
