import { FC } from 'react';
import styles from './self.module.css';
import { ModalProps, Skeleton } from 'antd';
import PopContent from '.';

interface Props extends ModalProps {
   size?: string;
   background?: string;
   style?: any;
   active?: boolean;
   isBlock?: boolean;
}

const SkeletonLoading: FC<Props> = (props) => {
   const { size, isBlock, style, active } = props;
   
   // style.blockSize = ''
   style.minWidth = '0px'
   if(!active) style.backgroundColor = '';
   
   switch (size) {
      case 'very-small':
         style.height = style.height && style.height !== 'fit-content' ? style.height : '27px'
         break;

      case 'small':
         style.height = style.height && style.height !== 'fit-content' ? style.height : '35px'
         break;

      case 'medium':
         style.height = style.height && style.height !== 'fit-content' ? style.height : '40px'
         break;

      case 'filter':
         style.height = style.height && style.height !== 'fit-content' ? style.height : '34px'
         break;

      case 'large':
         style.height = style.height && style.height !== 'fit-content' ? style.height : '155px'
         break;
   }

   return (
      <>
         <Skeleton.Input
            block={isBlock === undefined ? true : false}
            active={active}
            style={style}
         />

      </>
   );
};

export default SkeletonLoading;
