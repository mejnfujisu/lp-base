'use stric: false'
import { FC, useEffect, useState } from 'react';
// import styles from './self.module.css';
import { Button, Col, ModalProps, Row } from 'antd';
import {
   DragDropContext,
   Droppable,
   Draggable,
   OnDragEndResponder
} from 'react-beautiful-dnd';
import PopContent from '../pop-content';
import PopInput from '../pop-input';
import { StartSchedulePoint, SchedulePoint, EndSchedulePoint, ScheduleEdit, ScheduleSave } from '../../../element/icons';
import { ISchedule } from '../../../interface/ITour';

let opacity = 0.01

interface Props extends ModalProps {
   action?: boolean;
   schedule: any;
   loading: boolean;
}

const ScheduleTree: FC<Props> = (props) => {
   const { schedule, loading } = props;
   const [selfLoading, setSelfLoading] = useState<boolean>(false);
   const [cards, setCards] = useState<any>([]);

   useEffect(() => {
      if(loading) opacity = 1
      setSelfLoading(loading)
   }, [loading]);

   useEffect(() => {
      convertData(schedule || [])
   }, [schedule]);

   function convertData(list: any) {
      const newList: any = []
      if(list?.length === 0) return list
      list.forEach((row: any) => {
         const item: any = JSON.parse(JSON.stringify(row))
         item.content = `• ${item.content}`
         item.content = item.content.replace(/_\+_/g, '\n• ')
         newList.push(item)
      });
      setCards(newList)
   }

   const onDragEnd: OnDragEndResponder = ({ source, destination }) => {
      if (!destination || !source) return;

      const copiedCards = JSON.parse(JSON.stringify(cards));
      const newList = copiedCards.splice(source.index, 1)[0]
      copiedCards.splice(destination.index, 0, newList);
      setCards(copiedCards);
   };

   function onEdit(id: number) {
      const newCards = JSON.parse(JSON.stringify(cards))
      for (const item of newCards) {
         if (item.id === id) {
            // eslint-disable-next-line camelcase
            item.is_active_edit = !item.is_active_edit
            break
         }
      }
      setCards(newCards);
   }

   const Card = (card: any) => {
      return (
         <div style={{ display: 'flex', padding: '4px 8px', background: '' }}>
            <div  style={{ width: '100%' }}>
            <Row style={{ marginBottom: 5, width: '100%' }}>
                     <Col span={2} style={{}}>
                        {(() => {
                           switch (card?.id) {
                              case 1:
                                 return (
                                    <StartSchedulePoint width={''} height={''} fill={''} />
                                 )

                              default:
                                 return (
                                    <SchedulePoint width={''} height={''} fill={''} />
                                 )
                           }
                        })()}
                     </Col>
                     <Col span={5} style={{ paddingLeft: 10 }}>
                        <PopContent
                           active
                           size='very-small'
                           loading={selfLoading}
                           width={'100%'}
                           content={
                              <div style={{ display: 'flex' }}>
                                 <h5 style={{ margin: 0 }}>Day. {card?.id}</h5>
                              </div>
                           }
                        />
                     </Col>
                     <Col span={7} style={{ paddingLeft: 10 }}>
                        <PopContent
                           active
                           size='very-small'
                           loading={selfLoading}
                           width={'100%'}
                           content={
                              <div style={{ display: 'flex' }}>
                                 <h5 style={{ margin: 0 }}>{card?.date}</h5>
                              </div>
                           }
                        />
                     </Col>
                     <Col span={7} />
                     <Col span={3} style={{ paddingLeft: 10 }}>
                        <Button
                           onClick={() => onEdit(card?.id)}
                           type="primary"
                           style={{
                              position: 'absolute',
                              height: '100%',
                              boxShadow: '0px 3px 4px 0px #00000026',
                              background: card?.is_active_edit ? '#8BC34A' : '#FFFFFF',
                              color: 'rgb(41, 45, 50, 0.5)',
                              borderRadius: 8,
                              borderColor: card?.is_active_edit ? '#FFFFFF' : '#F8A435',
                              top: 0,
                              right: 0,
                              padding:'4px 5px'
                           }}
                        >
                           {(() => {
                           switch (card?.is_active_edit) {
                              case false:
                                 return (
                                    <ScheduleEdit width={''} height={''} fill={''} />
                                 )

                              default:
                                 return (
                                    <ScheduleSave width={''} height={''} fill={''} />
                                 )
                           }
                        })()}
                        </Button>
                     </Col>
                  </Row>
                  <Row style={{ marginBottom: 10, width: '100%' }}>
                     <Col span={2} style={{ background: '' }}>
                     {(() => {
                           switch (card?.id) {
                              case cards.length:
                                 return (
                                    <>
                                       <div style={{ background: '#FFFFFF', width: 5, height: '100%', borderRadius: 2, margin: '0px 10.5px' }}></div>
                                       <EndSchedulePoint width={''} height={''} fill={''} />
                                    </>
                                 )

                              default:
                                 return (
                                    <div style={{ background: '#FFFFFF', width: 5, height: '100%', borderRadius: 2, margin: '0px 10px' }}></div>
                                 )
                           }
                        })()}
                     </Col>
                     <Col span={22} style={{ background: '', width: '100%', marginBottom: card?.id === cards.length ? 0 : 25 }}>
                        <PopInput
                           opacity={opacity}
                           height={card?.height}
                           id={card?.id}
                           active
                           loading={selfLoading}
                           editAble={card?.is_active_edit}
                           radius='12px'
                           width='100%'
                           content={card?.content}
                        />
                     </Col>
                  </Row>
            </div>
         </div>
      );
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId='list-1' type='CARD'>
            {({ innerRef, droppableProps, placeholder }) => (
               <div
                  ref={innerRef}
                  {...droppableProps}
               >
                  {cards?.map((card: any) => (
                     <Draggable
                        isDragDisabled={false}
                        key={card?.id}
                        draggableId={`${card?.id}`}
                        index={card?.id}
                     >
                        {({ innerRef, draggableProps, dragHandleProps }) => (
                           <div
                              ref={innerRef}
                              {...draggableProps}
                              {...dragHandleProps}
                           >
                              {Card(card)}
                           </div>
                        )}
                     </Draggable>
                  ))}
                  {placeholder}
               </div>
            )}
         </Droppable>
      </DragDropContext>
   );
};

export default ScheduleTree;
