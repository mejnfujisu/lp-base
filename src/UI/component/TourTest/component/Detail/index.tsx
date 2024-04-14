import { FC, useEffect } from 'react';
import { Col, ModalProps, Row } from 'antd';
import { Information } from './component/Information';
import { Schedule } from './component/Schedule';
import { useSelector, useDispatch } from 'react-redux';
import { getTourDetail } from '../../../../../store/action/tour';

interface Props extends ModalProps {
   action?: boolean;
}

export const Detail: FC<Props> = (props) => {
   const { action } = props;
   const dispatch = useDispatch();
   const { detail } = useSelector((state: any) => state.tour);

   useEffect(() => {
      dispatch(getTourDetail(1))
   }, []);

   return (
      <>
         <Row>
            <Col span={11}>
               <Information/>
            </Col>
            <Col span={13} style={{ paddingLeft: 20 }}>
               <Schedule/>
            </Col>
         </Row>
      </>
   );
};
