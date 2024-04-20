import React, { useState } from 'react';
import './index.css'
// import Tour from './component/tour'
import Schedule from './component/schedule'
import Setting from './component/setting'
import Social from './component/social'
import Mail from './component/mail'
import Bell from './component/bell'
import Profile from './component/profile';
import Tour from './component/tour'

const _topHeight = 10;
const _bottomHeight = 8;
const _default50 = 50;
const _default100 = 100;
const _tourwidth = 58;
const _mailHeight = 10.6;
const _profilewidth = 14.5;
const _profileHeight = 100 - _default50 - _mailHeight - _mailHeight;
const _scheduleWidth = 100 - _tourwidth - _profilewidth;
const _scheduleHeight = _default50;
const _settingWidth = _profilewidth / 2;
const _socialWidth = 100 - _tourwidth - (_profilewidth / 2);
const _tourHeight = 100 - _topHeight - _bottomHeight;
const _settingHeight = 100 - _topHeight - _bottomHeight - _mailHeight*2 - _profileHeight;
const _socialHeight = _settingHeight;

let _clickAble = true;

const Ui = function () {

  const [onExpand, setOnExpand] = useState('');
  const [activeExpand, setActiveExpand] = useState(false);

  const [topWidth, setTopWidth] = useState(`${_default100}vw`);
  const [topHeight, setTopHeight] = useState(`${_topHeight}vh`);

  const [bottomWidth, setBottomWidth] = useState(`${_default100}vw`);
  const [bottomHeight, setBottomHeight] = useState(`${_bottomHeight}vh`);

  const [tourWidth, setTourWidth] = useState(`${_tourwidth}vw`);
  const [tourHeight, setTourHeight] = useState(`${_tourHeight}vh`);

  const [profileWidth, setProfileWidth] = useState(`${_profilewidth}vw`);
  const [profileHeight, setProfileHeight] = useState(`${_profileHeight}vh`);

  const [scheduleWidth, setScheduleWidth] = useState(`${_scheduleWidth}vw`);
  const [scheduleHeight, setScheduleHeight] = useState(`${_scheduleHeight}vh`);

  const [settingWidth, setSettingWidth] = useState(`${_settingWidth}vw`);
  const [settingHeight, setSettingHeight] = useState(`${_settingHeight}vh`);

  const [mailWidth, setMailWidth] = useState(`${_settingWidth}vw`);
  const [mailHeight, setMailHeight] = useState(`${_mailHeight}vh`);

  const [bellWidth, setBellWidth] = useState(`${_settingWidth}vw`);
  const [bellHeight, setBellHeight] = useState(`${_mailHeight}vh`);

  const [socialWidth, setSocialWidth] = useState(`${_socialWidth}vw`);
  const [socialHeight, setSocialHeight] = useState(`${_socialHeight}vh`);


  // initial
  const initStatus = () => {
    setOnExpand('');
    setTourWidth(`${_tourwidth}vw`);
    setTourHeight(`${_tourHeight}vh`);

    setScheduleWidth(`${_scheduleWidth}vw`);
    setScheduleHeight(`${_scheduleHeight}vh`);

    setProfileWidth(`${_profilewidth}vw`);
    setProfileHeight(`${_profileHeight}vh`);

    setSocialHeight(`${_socialHeight}vh`);
    setSocialWidth(`${_socialWidth}vw`);

    setSettingWidth(`${_settingWidth}vw`);
    setSettingHeight(`${_settingHeight}vh`);

    setBellHeight(`${_mailHeight}vh`);
    setBellWidth(`${_settingWidth}vw`);

    setMailHeight(`${_mailHeight}vh`);
    setMailWidth(`${_settingWidth}vw`);
    setTopHeight(`${_topHeight}vh`);
    setBottomHeight(`${_bottomHeight}vh`);
  };


  // Functional

  function clickAble() {
    if(!_clickAble) return false;
    _clickAble = false;
    setTimeout(() => {
      _clickAble = true;
    }, 2000);
    return true;
  }
  const handleTourlick = () => {
    if(!clickAble()) return;
    if (tourWidth === `${_tourwidth}vw`) {
      setOnExpand('tour');
      setTourWidth('100vw');
      setTourHeight(`100vh`);
      setProfileWidth('0vw');
      setScheduleWidth('0vw');
      setScheduleHeight('70vh');
      setSocialHeight('30vh');
      setBellHeight('15vh');
      setMailHeight('15vh');
      setProfileHeight('40vh');
      setSocialWidth('0vw');
      setSettingWidth('0vw');
      setSettingHeight('30vh');
      setMailWidth('0vw');
      setBellWidth('0vw');
      setTopHeight('0vh');
      setBottomHeight('0vh');
    } else {
      initStatus();
    }
  };

  const handleProfileClick = () => {
    if(!clickAble()) return;
    if (profileWidth === `${_profilewidth}vw`) {
      setOnExpand('profile');
      setProfileHeight('100vh');
      setProfileWidth('100vw');
      setTourWidth('0vw');
      setScheduleWidth('0vw');
      setScheduleHeight('100vh');
      setSocialWidth('50vw');
      setSocialHeight('0vh');
      setSettingWidth('50vw');
      setSettingHeight('0vh');
      setBellWidth('50vw');
      setMailWidth('50vw');
      setBellHeight('0vh');
      setMailHeight('0vh');
      setTopHeight('0vh');
      setBottomHeight('0vh');
      setTourHeight('100vh');
    } else {
      initStatus();
    }
  };

  const handleSocialClick = () => {
    if(!clickAble()) return;
    if (socialWidth === `${_socialWidth}vw`) {
      setOnExpand('social');
      setSocialHeight('100vh');
      setSocialWidth('100vw');
      setTourWidth('0vw');
      setScheduleHeight('0vh');
      setScheduleWidth('100vw');
      setProfileHeight('0vh');
      setProfileWidth('0vw');
      setSettingWidth('0vw');
      setSettingHeight('100vh');
      setBellWidth('0vw');
      setMailWidth('0vw');
      setBellHeight('0vh');
      setMailHeight('0vh');
      setTopHeight('0vh');
      setBottomHeight('0vh');
      setTourHeight('100vh');
    } else {
      initStatus();
    }
  };

  return (
    <div className='container' >
      <div className='box' id='top' style={{ fontSize: 20, textAlign: 'center', height: topHeight, width: topWidth }}>
        {onExpand === '' ?
          (<>TOP</>) :
          (<></>)
        }
      </div>
      <div className='box' id='tour' onClick={handleTourlick} style={{ fontSize: 20, textAlign: 'center', height: tourHeight, width: tourWidth }}>
          {onExpand === 'tour' ?
            (<Tour active />) :
            (<Tour hidding={onExpand !== ''} />)
          }
      </div>
      <div className='box' id='section2' style={{ fontSize: 20, textAlign: 'center', height: mailHeight, width: mailWidth }}></div>
      <div className='box' id='schedule' style={{ fontSize: 20, textAlign: 'center', height: scheduleHeight, width: scheduleWidth }}>
        {onExpand === 'schedule' ?
          (<Schedule active />) :
          (<Schedule hidding={onExpand !== ''} />)
        }
      </div>
      <div className='box' id='profile' onClick={handleProfileClick} style={{ fontSize: 20, textAlign: 'center', height: profileHeight, width: profileWidth }}>
        {onExpand === 'profile' ?
          (<Profile active />) :
          (<Profile hidding={onExpand !== ''} />)
        }
      </div>
      <div className='box' id='mail' style={{ fontSize: 20, textAlign: 'center', height: mailHeight, width: mailWidth }}>
        {onExpand === 'mail' ?
          (<Mail active />) :
          (<Mail hidding={onExpand !== ''} />)
        }
      </div>
      <div className='box' id='bell' style={{ fontSize: 20, textAlign: 'center', height: bellHeight, width: bellWidth }}>
        {onExpand === 'bell' ?
          (<Bell active />) :
          (<Bell hidding={onExpand !== ''} />)
        }
      </div>
      <div className='box' id='setting' style={{ fontSize: 20, textAlign: 'center', height: settingHeight, width: settingWidth }}>
        {onExpand === 'setting' ?
          (<Setting active />) :
          (<Setting hidding={onExpand !== ''} />)
        }
      </div>
      <div className='box' id='social' onClick={handleSocialClick} style={{ fontSize: 20, textAlign: 'center', height: socialHeight, width: socialWidth }}>
        {onExpand === 'social' ?
          (<Social active />) :
          (<Social hidding={onExpand !== ''} />)
        }
      </div>
      <div className='box' id='bottom' style={{ fontSize: 20, textAlign: 'center', height: bottomHeight, width: bottomWidth }}>
        {onExpand === '' ?
          (<>bottom</>) :
          (<></>)
        }
      </div>
    </div>
  );
}

export default Ui;
