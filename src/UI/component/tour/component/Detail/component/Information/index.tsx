/* eslint-disable camelcase */
import { FC, useEffect, useState } from 'react';
// import styles from './self.module.css';
import { ModalProps, Col, Row, Button } from 'antd';
import PopContent from '../../../../../../common/pop-content';
import PopImage from '../../../../../../common/pop-image';
import { ITourDetail } from '../../../../../../../interface/ITour';
import { useSelector } from 'react-redux';

interface Props extends ModalProps {
   action?: boolean;
}

export const Information: FC<Props> = (props) => {
   const { action } = props;
   const { detail, loading_detail } = useSelector((state: any) => state.tour);
   const [data, setData] = useState<ITourDetail>();

   
   useEffect(() => {
      setData(detail)
   }, [detail]);


   function leader(value: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h5 style={{ margin: '0px 2px 0px 0px', color: 'rgba(41, 45, 50, 0.5)' }}>{'Leader.'}</h5>
            <h4 style={{ margin: 0 }}>{value}</h4>
         </div>
      )
   }

   function group(value: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h5 style={{ margin: '0px 2px 0px 0px', color: 'rgba(41, 45, 50, 0.5)' }}>{'Grp.'}</h5>
            <h4 style={{ margin: 0 }}>{value}</h4>
         </div>
      )
   }

   function startTime(value: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h6 style={{ margin: '0px 5px 0px 0px', color: 'rgba(139, 195, 74, 1)' }}>Start.</h6>
            <h5 style={{ margin: 0 }}>{value}</h5>
         </div>
      )
   }

   function endTime(value: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h6 style={{ margin: '0px 5px 0px 0px', color: 'rgba(255, 111, 0, 1)' }}>End.</h6>
            <h5 style={{ margin: 0 }}>{value}</h5>
         </div>
      )
   }

   function member(value: number, max: number) {
      return (
         <div style={{ display: 'flex' }}>
            <h6 style={{ margin: '0px 2px 0px 0px', color: 'rgba(41, 45, 50, 0.5)' }}>{'Members.'}</h6>
            <h5 style={{ margin: 0, color: 'rgba(139, 195, 74, 1)' }}>{value}</h5>
            <h5 style={{ margin: 0, color: 'rgba(41, 45, 50, 0.5)' }}>/</h5>
            <h5 style={{ margin: 0 }}>{max}</h5>
         </div>
      )
   }

   return (
      <>
         <Row style={{ marginBottom: 15 }}>
            <Col span={24}>
               <PopImage
                  type='large'
                  active
                  height={'260px'}
                  loading={loading_detail}
                  src={require(`./img/tour/0${data?.images[0] || 1}.png`)}
               />
            </Col>
         </Row>
         <Row style={{ marginBottom: 15 }}>
            <Col span={15} style={{ paddingRight: 15 }}>
               <PopImage
                  type='large'
                  active
                  height={'160px'}
                  loading={loading_detail}
                  src={require(`./img/tour/0${data?.images[1] || 2}.png`)}
               />
            </Col>
            <Col span={9}>
               <PopImage
                  type='large'
                  active
                  height={'160px'}
                  loading={loading_detail}
                  src={require(`./img/tour/0${data?.images[2] || 3}.png`)}
               />
            </Col>
         </Row>
         <Row style={{ marginBottom: 10}}>
            <Col span={24}
            >
               <PopContent
                  active
                  size='large'
                  loading={loading_detail}
                  width={'100%'}
                  height={'136.56px'}
                  content={
                     <div>
                        <h3 style={{ margin: '0px 0px 10px 0px' }}>{`${data?.from} - ${data?.to}`}</h3>
                        <h4>{data?.content}</h4>
                     </div>
                  }
                  style={{ marginBottom: 10 }}
               />
            </Col>
         </Row>
         <Row style={{ marginBottom: 10 }}>
            <Col span={10}>
               <PopContent
                  active
                  size='medium'
                  loading={loading_detail}
                  width={'100%'}
                  content={
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                           style={{ borderRadius: 25, borderColor: '#ffffff', borderStyle: 'solid', marginRight: 10 }}
                           height='24px'
                           width='24px'
                           src={require(`./img/tour/0${data?.images[0] || 1}.png`)} alt=""
                        />
                        {leader(data?.leader || '')}
                     </div>
                  }
               />
            </Col>
            <Col span={14} style={{ paddingLeft: 10 }}>
               <PopContent
                  active
                  size='medium'
                  loading={loading_detail}
                  width={'100%'}
                  content={
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                           style={{ borderRadius: 25, borderColor: '#ffffff', borderStyle: 'solid', marginRight: 10 }}
                           height='24px'
                           width='24px'
                           src={require(`./img/tour/0${data?.images[0] || 1}.png`)} alt=""
                        />
                        {group(data?.group || '')}
                     </div>
                  }
               />
            </Col>
         </Row>
         <Row>
            <Col span={6}>
               <PopContent
                  active
                  size='very-small'
                  loading={loading_detail}
                  width={'100%'}
                  content={startTime('Aug 12')}
               />
            </Col>
            <Col span={6} style={{ paddingLeft: 10 }}>
               <PopContent
                  active
                  size='very-small'
                  loading={loading_detail}
                  width={'100%'}
                  content={endTime('Aug 20')}
               />
            </Col>
            <Col span={8} style={{ paddingLeft: 10 }}>
               <PopContent
                  active
                  size='very-small'
                  loading={loading_detail}
                  width={'100%'}
                  content={member(16, 20)}
               />
            </Col>
            <Col span={3} style={{ marginLeft: 10 }}>
               <Button
                  // onClick={() => onEdit(card.id)}
                  type="primary"
                  style={{
                     position: 'absolute',
                     float: 'right',
                     boxShadow: '0px 3px 4px 0px #00000026',
                     background: '#8BC34A',
                     borderRadius: 30,
                     width: '100%',
                     height: '100%',
                     right: 0,
                     padding: '2px 15px'
                  }}
               >
                  <h5 style={{ margin: 0, color: '#FFFFFF', textAlign: 'center' }} >Join</h5>
               </Button>
            </Col>
         </Row>
      </>
   );
};
