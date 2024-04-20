import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { Button, Col, Row } from 'antd';

interface Props {
  active?: boolean;
  hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
  const { active, hidding } = props;
  const [isDisplay, setIsDisplay] = useState('');
  const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0.2 });
  const demoList = [1, 2, 3];

  useEffect(() => {
    if (hidding) {
      setTimeout(() => {
        setIsDisplay('none');
      }, 2000);
    } else setIsDisplay('')

    if (active) {
      setTimeout(() => {
        setVisisbleAnimation({
          transition: 'opacity 2s',
          opacity: 1,
        });
      }, 100);
    } else setVisisbleAnimation({ opacity: 0.2 });
  }, [hidding, active]);



  return (
    <>
      <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{ display: isDisplay }}>
        <div className={styles['h-content']}>
          <Row style={{padding: 15}}>
            <Col span={24}>
              <Row style={{ padding: '10px 45px 40px 45px' }} className={styles['title']}>
                <h4 style={{ margin: 0 }}>{'Up-coming suggest holidays'}</h4>
              </Row>
              <Row style={{ padding: 15 }} className={styles['header']}>
                <Col span={15}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h5 style={{ margin: 0, textAlign: 'center' }}>Public</h5>
                  </div>
                </Col>
                <Col span={9}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h5 style={{ margin: 0, textAlign: 'center' }}>Expanse</h5>
                    <h6 style={{ margin: '0px 2px' }}> (possibility) </h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  {demoList?.map((value: any, index: number) => {
                    return (
                      <Row key={index + 1}
                        className={styles['time-item']}
                      >
                        <Col span={8} className={styles['vertical-center']}>
                          <Row>
                            <Col>
                              <Row>
                                <h5 style={{ margin: 0 }}>{'Nov'}</h5>
                              </Row>
                              <Row>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                  <h5 style={{ margin: 0, textAlign: 'center' }}>15</h5>
                                  <h6 style={{ margin: '0px 5px' }}> to </h6>
                                  <h5 style={{ margin: 0, textAlign: 'center' }}>18</h5>
                                </div>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={8} className={styles['vertical-center']}>
                          <Row>
                            <Col>
                              <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                <h5 style={{ margin: 0 }}>8</h5>
                                <h6 style={{ margin: '0px 2px' }}> days </h6>
                              </Row>
                              <Row>
                                <Button
                                  type="primary"
                                  style={{
                                    // position: 'absolute',
                                    float: 'right',
                                    boxShadow: '0px 3px 4px 0px #00000026',
                                    background: '#ffffff',
                                    color: 'rgb(41, 45, 50, 0.5)',
                                    borderRadius: 20,
                                    top: 0,
                                    right: 0,
                                    marginTop: 5
                                    // margin: '5px 4px'
                                  }}
                                >
                                  <h5 style={{margin: 0}}>Detail</h5>
                                </Button>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={8} className={styles['vertical-center']}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, textAlign: 'center' }}>19</h5>
                            <h6 style={{ margin: '0px 2px' }}> (Thur) </h6>
                            <h5 style={{ margin: 0, textAlign: 'center' }}>20</h5>
                            <h6 style={{ margin: '0px 2px' }}> (Fri) </h6>
                          </div>
                        </Col>
                      </Row>
                    )
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Component;
