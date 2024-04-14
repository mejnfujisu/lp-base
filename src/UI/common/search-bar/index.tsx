import { FC } from 'react';
import styles from './self.module.css';
import { Button, Col, Input, ModalProps, Row } from 'antd';

interface Props extends ModalProps {
   height?: string | number;
}

const SearchBar: FC<Props> = (props) => {
   const { height } = props;

   return (
      <>
         <div
            style={{
               width: '100%'
            }}>
            <Input 
            placeholder='Type a name here'
            style={{
               height: '50px',
               width: '100%',
               borderRadius: 15,
               border: '4px solid #ffffff',
               background: '#F3F3F3'
            }}
            />
            <Button
               type="primary"
               style={{
                  position: 'absolute',
                  float: 'right',
                  boxShadow: '0px 3px 4px 0px #00000026',
                  background: '#ffffff',
                  color: 'rgb(41, 45, 50, 0.5)',
                  width: 85,
                  height: 40,
                  borderRadius: 10,
                  top: 0,
                  right: 0,
                  margin: '5px 4px'
               }}
            >
               Search
            </Button>
         </div>
         {/* <div className={styles['background']}
            style={{
               maxHeight: `${height ? height : '300px'}`,
               blockSize: 'fit-content',
               height: 'fit-content',
               width: '100%'
            }}>
            <Row>
               <Col span={22}>
                  {props.children}
               </Col>
               <Col span={2}>
               </Col>
            </Row>
         </div> */}
      </>
   );
};

export default SearchBar;
