import { FC } from 'react';
import styles from './self.module.css';
import { Col, ModalProps, Row } from 'antd';

interface Props extends ModalProps {
   height?: string | number;
   type?: string;
}

const SearchBar: FC<Props> = (props) => {
   const { height, type } = props;

   return (
      <>
         <div className={!type ? styles['background'] : styles[`background-${type}`]}
            style={{
               maxHeight: `${height ? height : '700px'}`,
               minHeight: `${height ? height : '700px'}`,
               blockSize: 'fit-content',
               height: 'fit-content',
               width: '100%'
            }}>
            <Row>
               <Col span={22} style={{marginLeft: 10}}>
                  {props.children}
               </Col>
               <Col span={2}>
               </Col>
            </Row>
         </div>
      </>
   );
};

export default SearchBar;
