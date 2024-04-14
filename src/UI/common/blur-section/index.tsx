import { FC } from 'react';
import styles from './self.module.css';
import { ModalProps } from 'antd';

interface Props extends ModalProps {
  height?: string | number;
  width?: string | number;
  padding?: string;
  radius?: string;
}

const BlurSection: FC<Props> = (props) => {
  const { height, width, padding, radius } = props;
  return (
    <>
      <div className={styles['background']}
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          height: `${height ? height : 'fit-content'}`,
          width: `${width ? width : '100%'}`,
          padding: `${padding ? padding : '40px 15px 40px 30px'}`,
          borderRadius: `${radius ? radius : '25px'}`,
        }}>
        {props.children}
      </div>
    </>
  );
};

export default BlurSection;
