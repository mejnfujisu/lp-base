import { Button, Col, Input, Modal, ModalProps, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { FilterDays, FilterFrom, FilterTo } from '../../../../../../../element/icons';
import { CloseOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import { useSelector, useDispatch } from 'react-redux';
import { IFilterTour } from '../../../../../../../interface/ITour';
import { setFilter } from '../../../../../../../store/action/tour';
import { MONTH } from '../../../../../../common/constant/object';

let modalWidth: number | undefined

interface Props extends ModalProps {
   isOpen: boolean;
   activePosition: any;
   setIsOpen: (value: boolean) => void;
}

export const ModalFilter: FC<Props> = (props) => {
   const { isOpen, activePosition, setIsOpen } = props;
   const dispatch = useDispatch();

   // STATES
   const [selectedMonth, setSelectedMonth] = useState<string>('mar');
   const [inputFilter, setInputFilter] = useState<IFilterTour>();

   // STORE
   const { filter } = useSelector((state: any) => state.tour);

   useEffect(() => {
      setIsOpen(false)
      const elementModal = document.querySelector<HTMLElement>('.custom-filter-modal')
      const rect = elementModal?.getBoundingClientRect();
      modalWidth = rect?.width
      setInputFilter(filter);
   }, []);


   function onFieldChange(type: string, value: any) {
      const newObject: IFilterTour = JSON.parse(JSON.stringify(inputFilter))
      switch (type) {
         case 'from':
            newObject.from = value
            break;

         case 'to':
            newObject.to = value
            break;

         case 'number-of-day':
            // eslint-disable-next-line camelcase
            newObject.number_of_day = parseInt(value)
            break;

         case 'number-of-slot':
            // eslint-disable-next-line camelcase
            newObject.number_of_slot = parseInt(value)
            break;

         default:
            newObject.month = value
            break;
      }
      setInputFilter(newObject);
   }

   function onApply() {
      const newInputFilter: IFilterTour = JSON.parse(JSON.stringify(inputFilter));
      newInputFilter.month = selectedMonth
      console.log('---------', newInputFilter)

      dispatch(setFilter(newInputFilter))
      setIsOpen(false)
   }

   // COMPONENTS
   function ModalContent() {
      return (
         <div className={'custom-filter-modal'}
            style={{
               width: 'fit-content'
            }}>
            <Row>
               <Col span={24}>
                  <div style={{ width: 'fit-content', float: 'right', marginBottom: 10 }}>
                     <Button
                        onClick={onApply}
                        type="primary"
                        style={{
                           boxShadow: '0px 3px 4px 0px #00000026',
                           background: '#8BC34A',
                           color: '#FFFFFF',
                           borderRadius: 10,
                           margin: '5px 4px',
                           height: 34
                        }}
                     >
                        Apply
                     </Button>
                     <Button
                        onClick={() => setIsOpen(false)}
                        type="primary"
                        style={{
                           boxShadow: '0px 3px 4px 0px #00000026',
                           background: '#FF6F00',
                           color: '#FFFFFF',
                           borderRadius: 18,
                           margin: '5px 4px',
                           width: 34,
                           height: 34
                        }}
                        icon={<CloseOutlined />}
                     />
                  </div>
               </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
               <Col span={24}>
                  <div style={{ alignItems: 'center' }}>
                     <span>Go from</span>
                     <Input
                        value={inputFilter?.from}
                        onChange={(e) => onFieldChange('from', e.target.value)}
                        style={{
                           borderStyle: 'dashed',
                           borderColor: '#8BC34A',
                           borderWidth: '1.5px',
                           borderRadius: 12,
                           height: 34,
                           padding: '9px 50px'
                        }}
                        suffix={<FilterFrom width={''} height={''} fill={''} style={{
                           position: 'absolute',
                           left: 0,
                           marginLeft: 9
                        }} />}
                     />
                  </div>
               </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
               <Col span={24}>
                  <div style={{ alignItems: 'center' }}>
                     <span>Destination</span>
                     <Input
                        onChange={(e) => onFieldChange('to', e.target.value)}
                        value={inputFilter?.to}
                        style={{
                           borderStyle: 'dashed',
                           borderColor: '#FF6F00',
                           borderWidth: '1.5px',
                           borderRadius: 12,
                           height: 34,
                           padding: '9px 50px'
                        }}
                        suffix={<FilterTo width={''} height={''} fill={''} style={{
                           position: 'absolute',
                           left: 0,
                           marginLeft: 9
                        }} />}
                     />
                  </div>
               </Col>
            </Row>
            <Row style={{ marginBottom: 10 }}>
               <Col span={24}>
                  <Row>
                     <Col span={12}>
                        <Row>
                           <span>Number of Day</span>
                        </Row>
                        <Row>
                           <div style={{ alignItems: 'center', display: 'flex' }}>
                              <FilterDays width={''} height={''} fill={''} style={{
                                 // left: 0,
                                 // marginLeft: 9
                              }} />
                              <Input
                                 onChange={(e) => onFieldChange('number-of-day', e.target.value)}
                                 value={inputFilter?.number_of_day}
                                 style={{
                                    borderRadius: 9,
                                    width: 40,
                                    height: 25,
                                    margin: '0px 5px'
                                 }}
                              />
                              <h4 style={{ margin: 0, textAlign: 'center' }}>day</h4>
                              <h6 style={{ margin: '1px 0px 0px 1px' }}>(s)</h6>
                           </div>
                        </Row>
                     </Col>
                     <Col span={12}>
                        <Row>
                           <span>Number of Slot</span>
                        </Row>
                        <Row>
                           <div style={{ alignItems: 'center', display: 'flex' }}>
                              <FilterDays width={''} height={''} fill={''} style={{
                                 // left: 0,
                                 // marginLeft: 9
                              }} />
                              <Input
                                 onChange={(e) => onFieldChange('number-of-slot', e.target.value)}
                                 value={inputFilter?.number_of_slot}
                                 style={{
                                    borderRadius: 9,
                                    width: 40,
                                    height: 25,
                                    margin: '0px 5px'
                                 }}
                              />
                              <h4 style={{ margin: 0, textAlign: 'center' }}>slot</h4>
                              <h6 style={{ margin: '1px 0px 0px 1px' }}>(s)</h6>
                           </div>
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row>
               <Col span={24}>
                  <div style={{ width: 'fit-contetnt' }}>
                     <span>Month</span>
                     <div style={{ borderStyle: 'dashed', borderRadius: 12, border: '0.5px solid rgba(41, 45, 50, 0.2)' }}>
                        <Row style={{ width: 'fit-content' }}>
                           {/* <Col span={12} style={{width: 'fit-content'}}>
                              <Input style={{minWidth: 0, width: '100%'}}/>
                           </Col>
                           <Col span={12}>
                              <Input style={{minWidth: 0, width: '100%'}}/>
                           </Col> */}
                        </Row>
                        <Row>
                           <Col span={8} style={{ padding: '25px 12.5px 12.5px 25px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'jan' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('jan')}
                              >
                                 Jan
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '25px 12.5px 12.5px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'feb' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('feb')}
                              >
                                 Feb
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '25px 25px 12.5px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'mar' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('mar')}
                              >
                                 <h4>Mar</h4>
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col span={8} style={{ padding: '12.5px 12.5px 12.5px 25px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'apr' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('apr')}
                              >
                                 Apr
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '12.5px 12.5px 12.5px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'may' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('may')}
                              >
                                 May
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '12.5px 25px 12.5px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'jun' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('jun')}
                              >
                                 Jun
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col span={8} style={{ padding: '12.5px 12.5px 12.5px 25px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'jul' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('jul')}
                              >
                                 Jul
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '12.5px 12.5px 12.5px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'aug' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('aug')}
                              >
                                 Aug
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '12.5px 25px 12.5px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'sep' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('sep')}
                              >
                                 Sep
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col span={8} style={{ padding: '12.5px 12.5px 25px 25px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'oct' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('oct')}
                              >
                                 Oct
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '12.5px 12.5px 25px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'nov' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('nov')}
                              >
                                 Nov
                              </div>
                           </Col>
                           <Col span={8} style={{ padding: '12.5px 25px 25px 15px' }}>
                              <div
                                 className={`${styles['month-picker']} ${styles[selectedMonth === 'dec' ? 'selected-month' : '']}`}
                                 onClick={() => setSelectedMonth('dec')}
                              >
                                 Dec
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      )
   }

   return (
      <Modal
         closeIcon={false}
         footer={null}
         className='filterModal'
         width={'fit-content'}
         style={{
            minWidth: 0,
            position: 'absolute',
            top: activePosition.y,
            left: activePosition.x - (modalWidth || 0),
         }}
         centered
         open={isOpen}
      >
         {ModalContent()}
      </Modal>
   );
};
