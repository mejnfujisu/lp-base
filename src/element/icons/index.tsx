import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import homeSvg from './homeSvg';
import mailSvg from './mailSvg';
import spellSvg from './spellSvg';
import settingSvg from './settingSvg';
import startSchedulePointSvg from './startSchedulePointSvg';
import endSchedulePointSvg from './endSchedulePointSvg';
import schedulePointSvg from './schedulePointSvg';
import scheduleSaveSvg from './scheduleSaveSvg';
import scheduleEditSvg from './scheduleEditSvg';
import filterFormSvg from './filterFormSvg';
import filterDashSvg from './filterDashSvg';
import filterToSvg from './filterToSvg';
import filterMonthSvg from './filterMonthSvg';
import filterDaysSvg from './filterDaysSvg';
import filterSlotsSvg from './filterSlotsSvg';
import filterCustomSvg from './filterCustomSvg';
import homeMailSvg from './homeMailSvg';
import homeBell from './homeBell';
import homeSetting from './homeSetting';
import loadMore from './moreSvg';

// MENU-BAR
export const HomeIcon = (props: CustomIconComponentProps) => (
  <Icon component={homeSvg} {...props} />
);

export const MailIcon = (props: CustomIconComponentProps) => (
  <Icon component={mailSvg} {...props} />
);

export const SpellIcon = (props: CustomIconComponentProps) => (
  <Icon component={spellSvg} {...props} />
);

export const SettingSvg = (props: CustomIconComponentProps) => (
  <Icon component={settingSvg} {...props} />
);


// SCHEDULE-LIST
export const StartSchedulePoint = (props: CustomIconComponentProps) => (
  <Icon component={startSchedulePointSvg} {...props} />
);

export const SchedulePoint = (props: CustomIconComponentProps) => (
  <Icon component={schedulePointSvg} {...props} />
);

export const EndSchedulePoint = (props: CustomIconComponentProps) => (
  <Icon component={endSchedulePointSvg} {...props} />
);

export const ScheduleSave = (props: CustomIconComponentProps) => (
  <Icon component={scheduleSaveSvg} {...props} />
);

export const ScheduleEdit = (props: CustomIconComponentProps) => (
  <Icon component={scheduleEditSvg} {...props} />
);


// FILTER
export const FilterFrom = (props: CustomIconComponentProps) => (
  <Icon component={filterFormSvg} {...props} />
);

export const FilterDash = (props: CustomIconComponentProps) => (
  <Icon component={filterDashSvg} {...props} />
);

export const FilterTo = (props: CustomIconComponentProps) => (
  <Icon component={filterToSvg} {...props} />
);

export const FilterMonth = (props: CustomIconComponentProps) => (
  <Icon component={filterMonthSvg} {...props} />
);

export const FilterDays = (props: CustomIconComponentProps) => (
  <Icon component={filterDaysSvg} {...props} />
);

export const FilterSlots = (props: CustomIconComponentProps) => (
  <Icon component={filterSlotsSvg} {...props} />
);

export const FilterCustom = (props: CustomIconComponentProps) => (
  <Icon component={filterCustomSvg} {...props} />
);

export const HomeMail = (props: CustomIconComponentProps) => (
  <Icon component={homeMailSvg} {...props} />
);

export const HomeBell = (props: CustomIconComponentProps) => (
  <Icon component={homeBell} {...props} />
);

export const HomeSetting = (props: CustomIconComponentProps) => (
  <Icon component={homeSetting} {...props} />
);

export const LoadMore = (props: CustomIconComponentProps) => (
  <Icon component={loadMore} {...props} />
);