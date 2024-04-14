import { FC } from 'react';
import styles from './self.module.css';
import { ModalProps, Skeleton } from 'antd';
import SkeletonLoading from './SkeletonLoading';

interface Props extends ModalProps {
   size?: string;
   background?: string;
   content: string | React.ReactNode;
   loading?: boolean,
   height?: string | number;
   width?: string | number;
   border?: string | number;
   radius?: string | number;
   padding?: string;
   style?: any;
   active?: boolean;
   isBlock?: boolean;
   id?: string | number;
   opacity?: number;
}

const PopContent: FC<Props> = (props) => {
   const { size, background, content, height, width, loading, radius, padding, style, active, isBlock, id, opacity } = props;
   const base = {
      blockSize: 'fit-content',
      backgroundColor: `${background ? background : '#FFFFFF'}`,
      height: `${height ? height : 'fit-content'}`,
      width: `${width ? width : 'fit-content'}`,
      opacity: `${opacity ? opacity : 1}`
   }
   let selfStyle = {};

   switch (size) {
      case 'very-small':
         selfStyle = Object.assign(base, {
            padding: `${padding ? padding : '6px 15px'}`,
            borderRadius: `${radius ? radius : '7px'}`
         }, style ? style : {})
         break;

      case 'small':
         selfStyle = Object.assign(base, {
            padding: `${padding ? padding : '10px 15px'}`,
            borderRadius: `${radius ? radius : '9px'}`
         }, style ? style : {})
         break;

      case 'medium':
         selfStyle = Object.assign(base, {
            padding: `${padding ? padding : '8px 15px 8px 8px'}`,
            borderRadius: `${radius ? radius : '11px'}`
         }, style ? style : {})
         break;

      case 'filter':
         selfStyle = Object.assign(base, {
            padding: `${padding ? padding : '8px 15px 8px 8px'}`,
            borderRadius: `${radius ? radius : '11px'}`
         }, style ? style : {})
         break;

      case 'large':
         selfStyle = Object.assign(base, {
            padding: `${padding ? padding : '15px 20px'}`,
            borderRadius: `${radius ? radius : '25px'}`
         }, style ? style : {})
         break;
   }

   return (
      <>
         {loading ? (
            <SkeletonLoading active={active} size={size} style={selfStyle} isBlock={isBlock} />
         ) : (
            <div
               id={id ? `pop-content-${id}` : ''}
               className={`${styles['base']} ${styles[`${size}`]}`}
               style={selfStyle}>
               <>
                  {content}
               </>
            </div>
         )}
      </>
   );
};

export default PopContent;
