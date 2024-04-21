import { FC, useEffect, useState } from 'react';
import './self.module.css';
import { ModalProps, Menu, MenuProps, Row, Col } from 'antd';
import { SettingSvg } from '../../../../../element/icons';


interface Props extends ModalProps {
   action?: boolean;
}

export const Tool: FC<Props> = (props) => {
   const { action } = props;
   // const dispatch = useDispatch();
   const [openKeys, setOpenKeys] = useState(['sub1']);

   const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

   // useEffect(() => {
   //    dispatch(getTourList())
   // }, []);

   // useEffect(() => {
   //    setLoading(true)
   //    setTimeout(() => {
   //       setLoading(false)
   //    }, 1500);
   // }, [list]);

   // COMPONENTS


   // CSS CHANGE
   const base = {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#FFFFFF',
      borderRadius: 30,
      padding: 15,
      width: '100%',
      height: 'fit-content'
   }
   const styleFirstChil: any = JSON.parse(JSON.stringify(base))
   styleFirstChil.margin = '0px 0px 10px 0px'

   const style: any = JSON.parse(JSON.stringify(base))
   style.margin = '10px 0px'

   const styleLastChil: any = JSON.parse(JSON.stringify(base))
   styleLastChil.margin = '10px 0px 0px 0px'

   const styleText: any = {
      background: '#FFFFFF',
      borderRadius: 30,
      padding: '10px 15px',
      height: '100%',
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: 'rgba(41, 45, 50, 0.6)',
      letterSpacing: '0.01em',
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '15px',
      textAlign: 'left'
   }



   // ACTIONS
   const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
         setOpenKeys(keys);
      } else {
         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
   };

   return (
      <Menu
         mode="inline"
         openKeys={openKeys}
         onOpenChange={onOpenChange}
         style={{ width: '100%', borderInlineEnd: 'none' }}
      >
         <Menu.Item style={styleFirstChil}>
            <Row>
               <Col span={3} style={{ height: 40 }}>
                  <SettingSvg width={''} height={''} fill={''} />
               </Col>
               <Col span={21}>
                  <div style={styleText}>
                     <h4 style={{ margin: 0 }}>Documents</h4>
                  </div>
               </Col>
            </Row>
         </Menu.Item>

         <Menu.SubMenu
            style={style}
            title={
               <Row>
               <Col span={3} style={{ height: 40 }}>
                  <SettingSvg width={''} height={''} fill={''} />
               </Col>
               <Col span={21}>
                  <div style={styleText}>
                     <h4 style={{ margin: 0 }}>Images</h4>
                  </div>
               </Col>
            </Row>
            }
         >
            <Menu.Item style={{ height: 348, maxHeight: 348 }}>
               <div style={{ height: '500px', maxHeight: 500 }}>
                  {/* item 1 */}
               </div>
            </Menu.Item>
         </Menu.SubMenu>

         <Menu.Item style={style}>
            <Row>
               <Col span={3} style={{ height: 40 }}>
                  <SettingSvg width={''} height={''} fill={''} />
               </Col>
               <Col span={21}>
                  <div style={styleText}>
                     <h4 style={{ margin: 0 }}>Notes</h4>
                  </div>
               </Col>
            </Row>
         </Menu.Item>

         <Menu.SubMenu
            style={styleLastChil}
            title={
               <Row>
               <Col span={3} style={{ height: 40 }}>
                  <SettingSvg width={''} height={''} fill={''} />
               </Col>
               <Col span={21}>
                  <div style={styleText}>
                     <h4 style={{ margin: 0 }}>Links</h4>
                  </div>
               </Col>
            </Row>
            }
         >
            <Menu.Item style={{ height: 348, maxHeight: 348 }}>
               <div>
                  item 1
               </div>
            </Menu.Item>
         </Menu.SubMenu>

         <Menu.SubMenu
            style={styleLastChil}
            title={
               <Row>
               <Col span={3} style={{ height: 40 }}>
                  <SettingSvg width={''} height={''} fill={''} />
               </Col>
               <Col span={21}>
                  <div style={styleText}>
                     <h4 style={{ margin: 0 }}>Votes</h4>
                  </div>
               </Col>
            </Row>
            }
         >
            <Menu.Item style={{ height: 348, maxHeight: 348 }}>
               <div>
                  item 1
               </div>
            </Menu.Item>
         </Menu.SubMenu>
      </Menu>
   );
};
