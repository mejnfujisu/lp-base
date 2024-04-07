import React, { useState } from 'react';
import './index.css'
import Tour from './component/tour'
import Schedule from './component/schedule'
import Setting from './component/setting'
import Social from './component/social'
import Mail from './component/mail'
import Bell from './component/bell'
import Profile from './component/profile';

const Ui = function () {
  const _default25 = 25;
  const _default50 = 50;
  const _default100 = 100;

  const _tourwidth = 58;
  const _tourHeight = 100;

  const _mailHeight = 10.6;

  const _profilewidth = 14.5;
  const _profileHeight = 100 - _default50 - _mailHeight - _mailHeight;

  const _scheduleWidth = 100 - _tourwidth - _profilewidth;
  const _scheduleHeight = _default50;

  const _settingWidth = _profilewidth / 2;
  const _settingHeight = _default50;

  const _socialWidth = 100 - _tourwidth - (_profilewidth / 2);
  const _socialHeight = _default50;

  const [paddingExpanded, setPaddingExpanded] = useState('');

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
    setPaddingExpanded('');
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
  };


  // Functional
  const handleTourlick = () => {
    if (tourWidth === `${_tourwidth}vw`) {
      setPaddingExpanded('0px');
      setTourWidth('100vw');
      setProfileWidth('0vw');
      setScheduleWidth('0vw');
      setSocialWidth('0vw');
      setSettingWidth('0vw');
      setMailWidth('0vw');
      setBellWidth('0vw');
    } else {
      initStatus();
    }
  };

  const handleProfileClick = () => {
    if (profileWidth === `${_profilewidth}vw`) {
      setPaddingExpanded('0px');
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
    } else {
      initStatus();
    }
  };

  const handleSocialClick = () => {
    if (socialWidth === `${_socialWidth}vw`) {
      setPaddingExpanded('0px');
      setSocialHeight('100vh');
      setSocialWidth('100vw');
      setTourWidth('0vw');
      setScheduleHeight('0vh');
      setScheduleWidth('50vw');
      setProfileHeight('0vh');
      setProfileWidth('50vw');
      setSettingWidth('0vw');
      setSettingHeight('100vh');
      setBellWidth('25vw');
      setMailWidth('25vw');
      setBellHeight('0vh');
      setMailHeight('0vh');
    } else {
      initStatus();
    }
  };

  return (
    // <div className='full-height'>I am a DIV that will stretch to fit the whole width and height of the browser window!</div>
    <div className="container">
      <div
        id="tour"
        className="box"
        style={{ width: tourWidth, height: tourHeight, padding: paddingExpanded }}
        onClick={handleTourlick}
      > <Tour/></div>
      <div>
        <div className='block-2' style={{ display: 'flex' }}>
          <div>
            <div
              id="top-profile"
              className="box"
              style={{ width: mailWidth, height: mailHeight, padding: paddingExpanded }}
            // onClick={handleProfileClick}
            ></div>
            <div
              id="profile"
              className="box"
              style={{ width: profileWidth, height: profileHeight, padding: paddingExpanded }}
              onClick={handleProfileClick}
            ><Profile/></div>
            <div style={{ display: 'flex' }}>
              <div
                id="mail"
                className="box"
                style={{ width: mailWidth, height: mailHeight, padding: paddingExpanded }}
              // onClick={handleProfileClick}
              ><Mail/></div>
              <div
                id="bell"
                className="box"
                style={{ width: bellWidth, height: bellHeight, padding: paddingExpanded }}
              // onClick={handleProfileClick}
              ><Bell/></div>
            </div>
          </div>
          <div
            id="schedule"
            className="box"
            style={{ width: scheduleWidth, height: scheduleHeight, padding: paddingExpanded }}
          // onClick={handleDiv2Click}
          ><Schedule/></div>
        </div>
        <div className='block-2' style={{ display: 'flex' }}>
          <div
            id="setting"
            className="box"
            style={{ width: settingWidth, height: settingHeight, padding: paddingExpanded }}
          // onClick={handleProfileClick}
          ><Setting/></div>
          <div
            id="social"
            className="box"
            style={{ width: socialWidth, height: socialHeight, padding: paddingExpanded }}
            onClick={handleSocialClick}
          ><Social/></div>
        </div>
      </div>
    </div>
  );
}

export default Ui;
