// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Role = {
  "ADMIN": "ADMIN",
  "TEAMLEAD": "TEAMLEAD",
  "EMPLOYEE": "EMPLOYEE"
};

const JobType = {
  "THREE_PERSON_FLAGGING": "THREE_PERSON_FLAGGING",
  "FOUR_PERSON_FLAGGING": "FOUR_PERSON_FLAGGING",
  "FIVE_PERSON_FLAGGING": "FIVE_PERSON_FLAGGING",
  "SIX_PERSON_FLAGGING": "SIX_PERSON_FLAGGING",
  "LEFT_LANE_CLOSURE_UNDIVIDED": "LEFT_LANE_CLOSURE_UNDIVIDED",
  "LEFT_LANE_CLOSURE_DIVIDED": "LEFT_LANE_CLOSURE_DIVIDED",
  "DOUBLE_LEFT_LANE_CLOSURE_UNDIVIDED": "DOUBLE_LEFT_LANE_CLOSURE_UNDIVIDED",
  "DOUBLE_LEFT_LANE_CLOSURE_DIVIDED": "DOUBLE_LEFT_LANE_CLOSURE_DIVIDED",
  "RIGHT_LANE_CLOSURE_UNDIVIDED": "RIGHT_LANE_CLOSURE_UNDIVIDED",
  "RIGHT_LANE_CLOSURE_DIVIDED": "RIGHT_LANE_CLOSURE_DIVIDED",
  "DOUBLE_RIGHT_LANE_CLOSURE_UNDIVIDED": "DOUBLE_RIGHT_LANE_CLOSURE_UNDIVIDED",
  "DOUBLE_RIGHT_LANE_CLOSURE_DIVIDED": "DOUBLE_RIGHT_LANE_CLOSURE_DIVIDED",
  "LEFT_TRAFFIC_SHIFT": "LEFT_TRAFFIC_SHIFT",
  "RIGHT_TRAFFIC_SHIFT": "RIGHT_TRAFFIC_SHIFT",
  "SHOULDER_CLOSURE": "SHOULDER_CLOSURE",
  "NON_SPECIFIC_DETOUR": "NON_SPECIFIC_DETOUR",
  "TMA_JOBS": "TMA_JOBS",
  "WATER_FILLED_BARRELS": "WATER_FILLED_BARRELS"
};

const JobStage = {
  "PLANNED": "PLANNED",
  "INPROGRESS": "INPROGRESS",
  "COMPLETE": "COMPLETE"
};

const FluidLevel = {
  "LOW": "LOW",
  "NORMAL": "NORMAL",
  "OVER": "OVER"
};

const CompCondition = {
  "GOOD": "GOOD",
  "REPLACE": "REPLACE"
};

const ListType = {
  "TAILGATE": "TAILGATE",
  "TEARDOWN": "TEARDOWN"
};

const PicType = {
  "INITIAL": "INITIAL",
  "CHECKIN": "CHECKIN"
};

const { Employee, Equipment, Customer, Project, ProjectTeam, EquipmentList, PreTripCheckList, CheckLists, HourlyCheckins, JobSitePics, TeamLeadSurvey, Contract, LeasedItems, Quotes, DefaultEquipmentLists, DefaultEquipment } = initSchema(schema);

export {
  Employee,
  Equipment,
  Customer,
  Project,
  ProjectTeam,
  EquipmentList,
  PreTripCheckList,
  CheckLists,
  HourlyCheckins,
  JobSitePics,
  TeamLeadSurvey,
  Contract,
  LeasedItems,
  Quotes,
  DefaultEquipmentLists,
  DefaultEquipment,
  Role,
  JobType,
  JobStage,
  FluidLevel,
  CompCondition,
  ListType,
  PicType
};