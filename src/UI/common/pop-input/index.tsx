import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { ModalProps, Skeleton } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import SkeletonLoading from './SkeletonLoading';

interface Props extends ModalProps {
   id: number;
   background?: string;
   content: string;
   loading?: boolean,
   height?: string | number;
   width?: string | number;
   border?: string | number;
   radius?: string | number;
   padding?: string;
   style?: any;
   editAble?: boolean;
   active?: boolean;
   opacity?: number;
}

const PopInput: FC<Props> = (props) => {
   const { id, background, content, height, opacity, loading, radius, padding, border, style, editAble, active } = props;

   const selfStyle = Object.assign({
      // blockSize: 'fit-content',
      backgroundColor: `${background ? background : '#ffffff'}`,
      height: 'fit-content',
      width: '100%',
      padding: `${padding ? padding : '8px 12px'}`,
      borderRadius: `${radius ? radius : '12px'}`,
      border: `${border ? border : '2px'}`,
      transform: `translateY(${editAble ? '-1px' : '0px'})`,
      boxShadow: `${editAble ? '0px 6px 10px 0px #00000040' : ''}`,
      opacity: `${opacity ? opacity : 1}`

   }, style ? style : {});

   const [value, setValue] = useState<string>(content || '');

   return (
      <>
         {loading ? (
            <SkeletonLoading height={height} active={active} style={selfStyle} />
         ) : (
            <div
               id={`pop-input-${id}`}
               style={selfStyle}>
               <TextArea
                  className={styles['text-pop-input']}
                  readOnly={!editAble}
                  value={value}
                  style={{ width: '100%', borderColor: '#FFFFFF' }}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 1, maxRows: 100 }}
               />
            </div>
         )}
      </>
   );
};

export default PopInput;
