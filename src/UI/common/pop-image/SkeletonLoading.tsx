import { FC } from 'react';
import { ModalProps, Skeleton } from 'antd';

interface Props extends ModalProps {
   height?: string | number;
   width?: string | number;
   style?: any;
   active?: boolean;
}

const SkeletonLoading: FC<Props> = (props) => {
   const { height, width, style, active } = props;
   style.minWidth = '0px'
   style.height = `${height ? height : 'fit-content'}`
   style.width = `${width ? width : '100%'}`
   style.display = 'table';
   style.backgroundColor = '#FFFFFF';
   if(!active) style.backgroundColor = '';

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
