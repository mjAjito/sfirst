/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEmployeeInput = {
  empID: string,
  firstName: string,
  middleInitial?: string | null,
  lastName: string,
  suffix?: string | null,
  role: Role,
  email: string,
  phone: string,
  address1: string,
  address2?: string | null,
  city: string,
  state: string,
  zip: string,
  photo?: string | null,
  gender?: string | null,
  active: boolean,
  _version?: number | null,
};

export enum Role {
  ADMIN = "ADMIN",
  TEAMLEAD = "TEAMLEAD",
  EMPLOYEE = "EMPLOYEE",
}


export type ModelEmployeeConditionInput = {
  firstName?: ModelStringInput | null,
  middleInitial?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  suffix?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRoleInput = {
  eq?: Role | null,
  ne?: Role | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Employee = {
  __typename: "Employee",
  empID: string,
  firstName: string,
  middleInitial?: string | null,
  lastName: string,
  suffix?: string | null,
  role: Role,
  email: string,
  phone: string,
  address1: string,
  address2?: string | null,
  city: string,
  state: string,
  zip: string,
  photo?: string | null,
  gender?: string | null,
  active: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEmployeeInput = {
  empID: string,
  firstName?: string | null,
  middleInitial?: string | null,
  lastName?: string | null,
  suffix?: string | null,
  role?: Role | null,
  email?: string | null,
  phone?: string | null,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  photo?: string | null,
  gender?: string | null,
  active?: boolean | null,
  _version?: number | null,
};

export type DeleteEmployeeInput = {
  empID: string,
  _version?: number | null,
};

export type CreateEquipmentInput = {
  equipID: string,
  serialNumber?: string | null,
  description: string,
  location?: string | null,
  equipPhoto?: string | null,
  totalNumber: number,
  rentalRateDay: number,
  rentalRateWeek: number,
  rentalRateMonth: number,
  purchasePrice: number,
  availableNumer: number,
  _version?: number | null,
};

export type ModelEquipmentConditionInput = {
  serialNumber?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  equipPhoto?: ModelStringInput | null,
  totalNumber?: ModelIntInput | null,
  rentalRateDay?: ModelFloatInput | null,
  rentalRateWeek?: ModelFloatInput | null,
  rentalRateMonth?: ModelFloatInput | null,
  purchasePrice?: ModelFloatInput | null,
  availableNumer?: ModelIntInput | null,
  and?: Array< ModelEquipmentConditionInput | null > | null,
  or?: Array< ModelEquipmentConditionInput | null > | null,
  not?: ModelEquipmentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Equipment = {
  __typename: "Equipment",
  equipID: string,
  serialNumber?: string | null,
  description: string,
  location?: string | null,
  equipPhoto?: string | null,
  totalNumber: number,
  rentalRateDay: number,
  rentalRateWeek: number,
  rentalRateMonth: number,
  purchasePrice: number,
  availableNumer: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEquipmentInput = {
  equipID: string,
  serialNumber?: string | null,
  description?: string | null,
  location?: string | null,
  equipPhoto?: string | null,
  totalNumber?: number | null,
  rentalRateDay?: number | null,
  rentalRateWeek?: number | null,
  rentalRateMonth?: number | null,
  purchasePrice?: number | null,
  availableNumer?: number | null,
  _version?: number | null,
};

export type DeleteEquipmentInput = {
  equipID: string,
  _version?: number | null,
};

export type CreateCustomerInput = {
  customerID: string,
  companyName: string,
  contactFirstName: string,
  contactLastName: string,
  email: string,
  phone: string,
  address1: string,
  address2?: string | null,
  city: string,
  state: string,
  zip?: number | null,
  _version?: number | null,
};

export type ModelCustomerConditionInput = {
  companyName?: ModelStringInput | null,
  contactFirstName?: ModelStringInput | null,
  contactLastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelIntInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Customer = {
  __typename: "Customer",
  customerID: string,
  companyName: string,
  contactFirstName: string,
  contactLastName: string,
  email: string,
  phone: string,
  address1: string,
  address2?: string | null,
  city: string,
  state: string,
  zip?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCustomerInput = {
  customerID: string,
  companyName?: string | null,
  contactFirstName?: string | null,
  contactLastName?: string | null,
  email?: string | null,
  phone?: string | null,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: number | null,
  _version?: number | null,
};

export type DeleteCustomerInput = {
  customerID: string,
  _version?: number | null,
};

export type CreateProjectInput = {
  projectID: string,
  jobName: string,
  companyName: string,
  description: string,
  jobDate: string,
  address1: string,
  address2?: string | null,
  city: string,
  state: string,
  zip: string,
  teamLead: string,
  trafficControlDiagram: string,
  jobType: JobType,
  jobLatitude: number,
  jobLongitude: number,
  expectedSetupTime: number,
  jobSetupComplete?: string | null,
  jobStage: JobStage,
  jobPercentComplete: number,
  teamLeftHQ?: string | null,
  teamArrivedAtSite?: string | null,
  teamArrivedAtOffice?: string | null,
  _version?: number | null,
};

export enum JobType {
  THREE_PERSON_FLAGGING = "THREE_PERSON_FLAGGING",
  FOUR_PERSON_FLAGGING = "FOUR_PERSON_FLAGGING",
  FIVE_PERSON_FLAGGING = "FIVE_PERSON_FLAGGING",
  SIX_PERSON_FLAGGING = "SIX_PERSON_FLAGGING",
  LEFT_LANE_CLOSURE_UNDIVIDED = "LEFT_LANE_CLOSURE_UNDIVIDED",
  LEFT_LANE_CLOSURE_DIVIDED = "LEFT_LANE_CLOSURE_DIVIDED",
  DOUBLE_LEFT_LANE_CLOSURE_UNDIVIDED = "DOUBLE_LEFT_LANE_CLOSURE_UNDIVIDED",
  DOUBLE_LEFT_LANE_CLOSURE_DIVIDED = "DOUBLE_LEFT_LANE_CLOSURE_DIVIDED",
  RIGHT_LANE_CLOSURE_UNDIVIDED = "RIGHT_LANE_CLOSURE_UNDIVIDED",
  RIGHT_LANE_CLOSURE_DIVIDED = "RIGHT_LANE_CLOSURE_DIVIDED",
  DOUBLE_RIGHT_LANE_CLOSURE_UNDIVIDED = "DOUBLE_RIGHT_LANE_CLOSURE_UNDIVIDED",
  DOUBLE_RIGHT_LANE_CLOSURE_DIVIDED = "DOUBLE_RIGHT_LANE_CLOSURE_DIVIDED",
  LEFT_TRAFFIC_SHIFT = "LEFT_TRAFFIC_SHIFT",
  RIGHT_TRAFFIC_SHIFT = "RIGHT_TRAFFIC_SHIFT",
  SHOULDER_CLOSURE = "SHOULDER_CLOSURE",
  NON_SPECIFIC_DETOUR = "NON_SPECIFIC_DETOUR",
  TMA_JOBS = "TMA_JOBS",
  WATER_FILLED_BARRELS = "WATER_FILLED_BARRELS",
}


export enum JobStage {
  PLANNED = "PLANNED",
  INPROGRESS = "INPROGRESS",
  COMPLETE = "COMPLETE",
}


export type ModelProjectConditionInput = {
  jobName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  jobDate?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  teamLead?: ModelIDInput | null,
  trafficControlDiagram?: ModelStringInput | null,
  jobType?: ModelJobTypeInput | null,
  jobLatitude?: ModelFloatInput | null,
  jobLongitude?: ModelFloatInput | null,
  expectedSetupTime?: ModelFloatInput | null,
  jobSetupComplete?: ModelStringInput | null,
  jobStage?: ModelJobStageInput | null,
  jobPercentComplete?: ModelIntInput | null,
  teamLeftHQ?: ModelStringInput | null,
  teamArrivedAtSite?: ModelStringInput | null,
  teamArrivedAtOffice?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJobTypeInput = {
  eq?: JobType | null,
  ne?: JobType | null,
};

export type ModelJobStageInput = {
  eq?: JobStage | null,
  ne?: JobStage | null,
};

export type Project = {
  __typename: "Project",
  projectID: string,
  jobName: string,
  companyName: string,
  description: string,
  jobDate: string,
  address1: string,
  address2?: string | null,
  city: string,
  state: string,
  zip: string,
  teamLead: string,
  trafficControlDiagram: string,
  jobType: JobType,
  jobLatitude: number,
  jobLongitude: number,
  expectedSetupTime: number,
  jobSetupComplete?: string | null,
  jobStage: JobStage,
  jobPercentComplete: number,
  teamLeftHQ?: string | null,
  teamArrivedAtSite?: string | null,
  teamArrivedAtOffice?: string | null,
  projectTeam?: ModelProjectTeamConnection | null,
  equipmentList?: ModelEquipmentListConnection | null,
  jobSitePics?: ModelJobSitePicsConnection | null,
  teamLeadSurvey?: ModelTeamLeadSurveyConnection | null,
  preTripChecklist?: ModelPreTripCheckListConnection | null,
  checklists?: ModelCheckListsConnection | null,
  hourlyCheckins?: ModelHourlyCheckinsConnection | null,
  contract?: ModelContractConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProjectTeamConnection = {
  __typename: "ModelProjectTeamConnection",
  items:  Array<ProjectTeam | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProjectTeam = {
  __typename: "ProjectTeam",
  teamMemberID: string,
  projectID: string,
  empID: string,
  name: string,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectProjectTeamProjectID: string,
};

export type ModelEquipmentListConnection = {
  __typename: "ModelEquipmentListConnection",
  items:  Array<EquipmentList | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type EquipmentList = {
  __typename: "EquipmentList",
  equipListID: string,
  projectID: string,
  equipID: string,
  description: string,
  quantity: number,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectEquipmentListProjectID: string,
};

export type ModelJobSitePicsConnection = {
  __typename: "ModelJobSitePicsConnection",
  items:  Array<JobSitePics | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type JobSitePics = {
  __typename: "JobSitePics",
  picID: string,
  projectID: string,
  picTime: string,
  picPath: string,
  picType: PicType,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectJobSitePicsProjectID: string,
};

export enum PicType {
  INITIAL = "INITIAL",
  CHECKIN = "CHECKIN",
}


export type ModelTeamLeadSurveyConnection = {
  __typename: "ModelTeamLeadSurveyConnection",
  items:  Array<TeamLeadSurvey | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TeamLeadSurvey = {
  __typename: "TeamLeadSurvey",
  surveyID: string,
  projectID: string,
  surveyTime: string,
  equipDamage: boolean,
  equipDamageDesc: string,
  perfRating: number,
  perfRatingDesc: string,
  training: boolean,
  trainingDesc: string,
  officeNotification: boolean,
  officeNotificationDesc: string,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectTeamLeadSurveyProjectID: string,
};

export type ModelPreTripCheckListConnection = {
  __typename: "ModelPreTripCheckListConnection",
  items:  Array<PreTripCheckList | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PreTripCheckList = {
  __typename: "PreTripCheckList",
  preCheckListID: string,
  projectID: string,
  truckNum: string,
  registrationAvailable: boolean,
  registrationExpDate: string,
  stickerOnPlate: boolean,
  insuranceCard: boolean,
  insuranceExpDate: string,
  oilLevel: FluidLevel,
  oilLife: number,
  coolantLevel: FluidLevel,
  transmissionLevel: FluidLevel,
  wiperBlades: CompCondition,
  lights: CompCondition,
  lightReplacement: string,
  tires: CompCondition,
  timeReplacement: string,
  bodyCondition?: string | null,
  completedTS: string,
  completedBy: string,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectPreTripChecklistProjectID: string,
};

export enum FluidLevel {
  LOW = "LOW",
  NORMAL = "NORMAL",
  OVER = "OVER",
}


export enum CompCondition {
  GOOD = "GOOD",
  REPLACE = "REPLACE",
}


export type ModelCheckListsConnection = {
  __typename: "ModelCheckListsConnection",
  items:  Array<CheckLists | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CheckLists = {
  __typename: "CheckLists",
  checkListID: string,
  projectID: string,
  listType: ListType,
  taskDescription: string,
  completedTS: string,
  completedBy: string,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectChecklistsProjectID: string,
};

export enum ListType {
  TAILGATE = "TAILGATE",
  TEARDOWN = "TEARDOWN",
}


export type ModelHourlyCheckinsConnection = {
  __typename: "ModelHourlyCheckinsConnection",
  items:  Array<HourlyCheckins | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type HourlyCheckins = {
  __typename: "HourlyCheckins",
  checkinID: string,
  projectID: string,
  checkinTimeActual: string,
  equipmentCheck: string,
  employeeCheck: string,
  customerCheck: string,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectHourlyCheckinsProjectID: string,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items:  Array<Contract | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Contract = {
  __typename: "Contract",
  contractID: string,
  projectID: string,
  signedTime: string,
  lastUpdateTime: string,
  office: string,
  sAndE: string,
  workOrder: number,
  callerName: string,
  cod: boolean,
  charge: string,
  poNumber: string,
  serviceDate: string,
  project?: Project | null,
  leasedItems?: ModelLeasedItemsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectContractProjectID: string,
};

export type ModelLeasedItemsConnection = {
  __typename: "ModelLeasedItemsConnection",
  items:  Array<LeasedItems | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LeasedItems = {
  __typename: "LeasedItems",
  itemID: string,
  contractID: string,
  equipmentID: string,
  count: number,
  description: string,
  prevBalance: number,
  newBalance: number,
  unitRate: number,
  lesseeAgent: string,
  lessorAgent: string,
  customerEmail: string,
  equipmentLocation: string,
  contract?: Contract | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  contractLeasedItemsContractID: string,
};

export type UpdateProjectInput = {
  projectID: string,
  jobName?: string | null,
  companyName?: string | null,
  description?: string | null,
  jobDate?: string | null,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  teamLead?: string | null,
  trafficControlDiagram?: string | null,
  jobType?: JobType | null,
  jobLatitude?: number | null,
  jobLongitude?: number | null,
  expectedSetupTime?: number | null,
  jobSetupComplete?: string | null,
  jobStage?: JobStage | null,
  jobPercentComplete?: number | null,
  teamLeftHQ?: string | null,
  teamArrivedAtSite?: string | null,
  teamArrivedAtOffice?: string | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  projectID: string,
  _version?: number | null,
};

export type CreateProjectTeamInput = {
  teamMemberID: string,
  projectID: string,
  empID: string,
  name: string,
  _version?: number | null,
  projectProjectTeamProjectID: string,
};

export type ModelProjectTeamConditionInput = {
  projectID?: ModelIDInput | null,
  empID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectTeamConditionInput | null > | null,
  or?: Array< ModelProjectTeamConditionInput | null > | null,
  not?: ModelProjectTeamConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectProjectTeamProjectID?: ModelIDInput | null,
};

export type UpdateProjectTeamInput = {
  teamMemberID: string,
  projectID?: string | null,
  empID?: string | null,
  name?: string | null,
  _version?: number | null,
  projectProjectTeamProjectID?: string | null,
};

export type DeleteProjectTeamInput = {
  teamMemberID: string,
  _version?: number | null,
};

export type CreateEquipmentListInput = {
  equipListID: string,
  projectID: string,
  equipID: string,
  description: string,
  quantity: number,
  _version?: number | null,
  projectEquipmentListProjectID: string,
};

export type ModelEquipmentListConditionInput = {
  projectID?: ModelIDInput | null,
  equipID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelEquipmentListConditionInput | null > | null,
  or?: Array< ModelEquipmentListConditionInput | null > | null,
  not?: ModelEquipmentListConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectEquipmentListProjectID?: ModelIDInput | null,
};

export type UpdateEquipmentListInput = {
  equipListID: string,
  projectID?: string | null,
  equipID?: string | null,
  description?: string | null,
  quantity?: number | null,
  _version?: number | null,
  projectEquipmentListProjectID?: string | null,
};

export type DeleteEquipmentListInput = {
  equipListID: string,
  _version?: number | null,
};

export type CreatePreTripCheckListInput = {
  preCheckListID: string,
  projectID: string,
  truckNum: string,
  registrationAvailable: boolean,
  registrationExpDate: string,
  stickerOnPlate: boolean,
  insuranceCard: boolean,
  insuranceExpDate: string,
  oilLevel: FluidLevel,
  oilLife: number,
  coolantLevel: FluidLevel,
  transmissionLevel: FluidLevel,
  wiperBlades: CompCondition,
  lights: CompCondition,
  lightReplacement: string,
  tires: CompCondition,
  timeReplacement: string,
  bodyCondition?: string | null,
  completedTS: string,
  completedBy: string,
  _version?: number | null,
  projectPreTripChecklistProjectID: string,
};

export type ModelPreTripCheckListConditionInput = {
  projectID?: ModelIDInput | null,
  truckNum?: ModelStringInput | null,
  registrationAvailable?: ModelBooleanInput | null,
  registrationExpDate?: ModelStringInput | null,
  stickerOnPlate?: ModelBooleanInput | null,
  insuranceCard?: ModelBooleanInput | null,
  insuranceExpDate?: ModelStringInput | null,
  oilLevel?: ModelFluidLevelInput | null,
  oilLife?: ModelIntInput | null,
  coolantLevel?: ModelFluidLevelInput | null,
  transmissionLevel?: ModelFluidLevelInput | null,
  wiperBlades?: ModelCompConditionInput | null,
  lights?: ModelCompConditionInput | null,
  lightReplacement?: ModelStringInput | null,
  tires?: ModelCompConditionInput | null,
  timeReplacement?: ModelStringInput | null,
  bodyCondition?: ModelStringInput | null,
  completedTS?: ModelStringInput | null,
  completedBy?: ModelIDInput | null,
  and?: Array< ModelPreTripCheckListConditionInput | null > | null,
  or?: Array< ModelPreTripCheckListConditionInput | null > | null,
  not?: ModelPreTripCheckListConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectPreTripChecklistProjectID?: ModelIDInput | null,
};

export type ModelFluidLevelInput = {
  eq?: FluidLevel | null,
  ne?: FluidLevel | null,
};

export type ModelCompConditionInput = {
  eq?: CompCondition | null,
  ne?: CompCondition | null,
};

export type UpdatePreTripCheckListInput = {
  preCheckListID: string,
  projectID?: string | null,
  truckNum?: string | null,
  registrationAvailable?: boolean | null,
  registrationExpDate?: string | null,
  stickerOnPlate?: boolean | null,
  insuranceCard?: boolean | null,
  insuranceExpDate?: string | null,
  oilLevel?: FluidLevel | null,
  oilLife?: number | null,
  coolantLevel?: FluidLevel | null,
  transmissionLevel?: FluidLevel | null,
  wiperBlades?: CompCondition | null,
  lights?: CompCondition | null,
  lightReplacement?: string | null,
  tires?: CompCondition | null,
  timeReplacement?: string | null,
  bodyCondition?: string | null,
  completedTS?: string | null,
  completedBy?: string | null,
  _version?: number | null,
  projectPreTripChecklistProjectID?: string | null,
};

export type DeletePreTripCheckListInput = {
  preCheckListID: string,
  _version?: number | null,
};

export type CreateCheckListsInput = {
  checkListID: string,
  projectID: string,
  listType: ListType,
  taskDescription: string,
  completedTS: string,
  completedBy: string,
  _version?: number | null,
  projectChecklistsProjectID: string,
};

export type ModelCheckListsConditionInput = {
  projectID?: ModelIDInput | null,
  listType?: ModelListTypeInput | null,
  taskDescription?: ModelStringInput | null,
  completedTS?: ModelStringInput | null,
  completedBy?: ModelIDInput | null,
  and?: Array< ModelCheckListsConditionInput | null > | null,
  or?: Array< ModelCheckListsConditionInput | null > | null,
  not?: ModelCheckListsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectChecklistsProjectID?: ModelIDInput | null,
};

export type ModelListTypeInput = {
  eq?: ListType | null,
  ne?: ListType | null,
};

export type UpdateCheckListsInput = {
  checkListID: string,
  projectID?: string | null,
  listType?: ListType | null,
  taskDescription?: string | null,
  completedTS?: string | null,
  completedBy?: string | null,
  _version?: number | null,
  projectChecklistsProjectID?: string | null,
};

export type DeleteCheckListsInput = {
  checkListID: string,
  _version?: number | null,
};

export type CreateHourlyCheckinsInput = {
  checkinID: string,
  projectID: string,
  checkinTimeActual: string,
  equipmentCheck: string,
  employeeCheck: string,
  customerCheck: string,
  _version?: number | null,
  projectHourlyCheckinsProjectID: string,
};

export type ModelHourlyCheckinsConditionInput = {
  projectID?: ModelIDInput | null,
  checkinTimeActual?: ModelStringInput | null,
  equipmentCheck?: ModelStringInput | null,
  employeeCheck?: ModelStringInput | null,
  customerCheck?: ModelStringInput | null,
  and?: Array< ModelHourlyCheckinsConditionInput | null > | null,
  or?: Array< ModelHourlyCheckinsConditionInput | null > | null,
  not?: ModelHourlyCheckinsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectHourlyCheckinsProjectID?: ModelIDInput | null,
};

export type UpdateHourlyCheckinsInput = {
  checkinID: string,
  projectID?: string | null,
  checkinTimeActual?: string | null,
  equipmentCheck?: string | null,
  employeeCheck?: string | null,
  customerCheck?: string | null,
  _version?: number | null,
  projectHourlyCheckinsProjectID?: string | null,
};

export type DeleteHourlyCheckinsInput = {
  checkinID: string,
  _version?: number | null,
};

export type CreateJobSitePicsInput = {
  picID: string,
  projectID: string,
  picTime: string,
  picPath: string,
  picType: PicType,
  _version?: number | null,
  projectJobSitePicsProjectID: string,
};

export type ModelJobSitePicsConditionInput = {
  projectID?: ModelIDInput | null,
  picTime?: ModelStringInput | null,
  picPath?: ModelStringInput | null,
  picType?: ModelPicTypeInput | null,
  and?: Array< ModelJobSitePicsConditionInput | null > | null,
  or?: Array< ModelJobSitePicsConditionInput | null > | null,
  not?: ModelJobSitePicsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectJobSitePicsProjectID?: ModelIDInput | null,
};

export type ModelPicTypeInput = {
  eq?: PicType | null,
  ne?: PicType | null,
};

export type UpdateJobSitePicsInput = {
  picID: string,
  projectID?: string | null,
  picTime?: string | null,
  picPath?: string | null,
  picType?: PicType | null,
  _version?: number | null,
  projectJobSitePicsProjectID?: string | null,
};

export type DeleteJobSitePicsInput = {
  picID: string,
  _version?: number | null,
};

export type CreateTeamLeadSurveyInput = {
  surveyID: string,
  projectID: string,
  surveyTime: string,
  equipDamage: boolean,
  equipDamageDesc: string,
  perfRating: number,
  perfRatingDesc: string,
  training: boolean,
  trainingDesc: string,
  officeNotification: boolean,
  officeNotificationDesc: string,
  _version?: number | null,
  projectTeamLeadSurveyProjectID: string,
};

export type ModelTeamLeadSurveyConditionInput = {
  projectID?: ModelIDInput | null,
  surveyTime?: ModelStringInput | null,
  equipDamage?: ModelBooleanInput | null,
  equipDamageDesc?: ModelStringInput | null,
  perfRating?: ModelIntInput | null,
  perfRatingDesc?: ModelStringInput | null,
  training?: ModelBooleanInput | null,
  trainingDesc?: ModelStringInput | null,
  officeNotification?: ModelBooleanInput | null,
  officeNotificationDesc?: ModelStringInput | null,
  and?: Array< ModelTeamLeadSurveyConditionInput | null > | null,
  or?: Array< ModelTeamLeadSurveyConditionInput | null > | null,
  not?: ModelTeamLeadSurveyConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectTeamLeadSurveyProjectID?: ModelIDInput | null,
};

export type UpdateTeamLeadSurveyInput = {
  surveyID: string,
  projectID?: string | null,
  surveyTime?: string | null,
  equipDamage?: boolean | null,
  equipDamageDesc?: string | null,
  perfRating?: number | null,
  perfRatingDesc?: string | null,
  training?: boolean | null,
  trainingDesc?: string | null,
  officeNotification?: boolean | null,
  officeNotificationDesc?: string | null,
  _version?: number | null,
  projectTeamLeadSurveyProjectID?: string | null,
};

export type DeleteTeamLeadSurveyInput = {
  surveyID: string,
  _version?: number | null,
};

export type CreateContractInput = {
  contractID: string,
  projectID: string,
  signedTime: string,
  lastUpdateTime: string,
  office: string,
  sAndE: string,
  workOrder: number,
  callerName: string,
  cod: boolean,
  charge: string,
  poNumber: string,
  serviceDate: string,
  _version?: number | null,
  projectContractProjectID: string,
};

export type ModelContractConditionInput = {
  projectID?: ModelIDInput | null,
  signedTime?: ModelStringInput | null,
  lastUpdateTime?: ModelStringInput | null,
  office?: ModelStringInput | null,
  sAndE?: ModelStringInput | null,
  workOrder?: ModelIntInput | null,
  callerName?: ModelStringInput | null,
  cod?: ModelBooleanInput | null,
  charge?: ModelStringInput | null,
  poNumber?: ModelStringInput | null,
  serviceDate?: ModelStringInput | null,
  and?: Array< ModelContractConditionInput | null > | null,
  or?: Array< ModelContractConditionInput | null > | null,
  not?: ModelContractConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectContractProjectID?: ModelIDInput | null,
};

export type UpdateContractInput = {
  contractID: string,
  projectID?: string | null,
  signedTime?: string | null,
  lastUpdateTime?: string | null,
  office?: string | null,
  sAndE?: string | null,
  workOrder?: number | null,
  callerName?: string | null,
  cod?: boolean | null,
  charge?: string | null,
  poNumber?: string | null,
  serviceDate?: string | null,
  _version?: number | null,
  projectContractProjectID?: string | null,
};

export type DeleteContractInput = {
  contractID: string,
  _version?: number | null,
};

export type CreateLeasedItemsInput = {
  itemID: string,
  contractID: string,
  equipmentID: string,
  count: number,
  description: string,
  prevBalance: number,
  newBalance: number,
  unitRate: number,
  lesseeAgent: string,
  lessorAgent: string,
  customerEmail: string,
  equipmentLocation: string,
  _version?: number | null,
  contractLeasedItemsContractID: string,
};

export type ModelLeasedItemsConditionInput = {
  contractID?: ModelIDInput | null,
  equipmentID?: ModelIDInput | null,
  count?: ModelIntInput | null,
  description?: ModelStringInput | null,
  prevBalance?: ModelFloatInput | null,
  newBalance?: ModelFloatInput | null,
  unitRate?: ModelFloatInput | null,
  lesseeAgent?: ModelStringInput | null,
  lessorAgent?: ModelStringInput | null,
  customerEmail?: ModelStringInput | null,
  equipmentLocation?: ModelStringInput | null,
  and?: Array< ModelLeasedItemsConditionInput | null > | null,
  or?: Array< ModelLeasedItemsConditionInput | null > | null,
  not?: ModelLeasedItemsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  contractLeasedItemsContractID?: ModelIDInput | null,
};

export type UpdateLeasedItemsInput = {
  itemID: string,
  contractID?: string | null,
  equipmentID?: string | null,
  count?: number | null,
  description?: string | null,
  prevBalance?: number | null,
  newBalance?: number | null,
  unitRate?: number | null,
  lesseeAgent?: string | null,
  lessorAgent?: string | null,
  customerEmail?: string | null,
  equipmentLocation?: string | null,
  _version?: number | null,
  contractLeasedItemsContractID?: string | null,
};

export type DeleteLeasedItemsInput = {
  itemID: string,
  _version?: number | null,
};

export type CreateQuotesInput = {
  quoteID: string,
  quoteText: string,
  quoteAttributed: string,
  _version?: number | null,
};

export type ModelQuotesConditionInput = {
  quoteText?: ModelStringInput | null,
  quoteAttributed?: ModelStringInput | null,
  and?: Array< ModelQuotesConditionInput | null > | null,
  or?: Array< ModelQuotesConditionInput | null > | null,
  not?: ModelQuotesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Quotes = {
  __typename: "Quotes",
  quoteID: string,
  quoteText: string,
  quoteAttributed: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateQuotesInput = {
  quoteID: string,
  quoteText?: string | null,
  quoteAttributed?: string | null,
  _version?: number | null,
};

export type DeleteQuotesInput = {
  quoteID: string,
  _version?: number | null,
};

export type CreateDefaultEquipmentListsInput = {
  defaultListID: string,
  jobName: string,
  setupTime?: number | null,
  _version?: number | null,
};

export type ModelDefaultEquipmentListsConditionInput = {
  jobName?: ModelStringInput | null,
  setupTime?: ModelIntInput | null,
  and?: Array< ModelDefaultEquipmentListsConditionInput | null > | null,
  or?: Array< ModelDefaultEquipmentListsConditionInput | null > | null,
  not?: ModelDefaultEquipmentListsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type DefaultEquipmentLists = {
  __typename: "DefaultEquipmentLists",
  defaultListID: string,
  jobName: string,
  setupTime?: number | null,
  defaultEquipment?: ModelDefaultEquipmentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelDefaultEquipmentConnection = {
  __typename: "ModelDefaultEquipmentConnection",
  items:  Array<DefaultEquipment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type DefaultEquipment = {
  __typename: "DefaultEquipment",
  defaultEquipID: string,
  listID: string,
  equipmentID: string,
  description: string,
  totalRequired: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  defaultEquipmentListsDefaultEquipmentDefaultListID: string,
};

export type UpdateDefaultEquipmentListsInput = {
  defaultListID: string,
  jobName?: string | null,
  setupTime?: number | null,
  _version?: number | null,
};

export type DeleteDefaultEquipmentListsInput = {
  defaultListID: string,
  _version?: number | null,
};

export type CreateDefaultEquipmentInput = {
  defaultEquipID: string,
  listID: string,
  equipmentID: string,
  description: string,
  totalRequired: number,
  _version?: number | null,
  defaultEquipmentListsDefaultEquipmentDefaultListID: string,
};

export type ModelDefaultEquipmentConditionInput = {
  listID?: ModelIDInput | null,
  equipmentID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  totalRequired?: ModelIntInput | null,
  and?: Array< ModelDefaultEquipmentConditionInput | null > | null,
  or?: Array< ModelDefaultEquipmentConditionInput | null > | null,
  not?: ModelDefaultEquipmentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  defaultEquipmentListsDefaultEquipmentDefaultListID?: ModelIDInput | null,
};

export type UpdateDefaultEquipmentInput = {
  defaultEquipID: string,
  listID?: string | null,
  equipmentID?: string | null,
  description?: string | null,
  totalRequired?: number | null,
  _version?: number | null,
  defaultEquipmentListsDefaultEquipmentDefaultListID?: string | null,
};

export type DeleteDefaultEquipmentInput = {
  defaultEquipID: string,
  _version?: number | null,
};

export type ModelEmployeeFilterInput = {
  empID?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  middleInitial?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  suffix?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items:  Array<Employee | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEquipmentFilterInput = {
  equipID?: ModelIDInput | null,
  serialNumber?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  equipPhoto?: ModelStringInput | null,
  totalNumber?: ModelIntInput | null,
  rentalRateDay?: ModelFloatInput | null,
  rentalRateWeek?: ModelFloatInput | null,
  rentalRateMonth?: ModelFloatInput | null,
  purchasePrice?: ModelFloatInput | null,
  availableNumer?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEquipmentFilterInput | null > | null,
  or?: Array< ModelEquipmentFilterInput | null > | null,
  not?: ModelEquipmentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelEquipmentConnection = {
  __typename: "ModelEquipmentConnection",
  items:  Array<Equipment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCustomerFilterInput = {
  customerID?: ModelIDInput | null,
  companyName?: ModelStringInput | null,
  contactFirstName?: ModelStringInput | null,
  contactLastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProjectFilterInput = {
  projectID?: ModelIDInput | null,
  jobName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  jobDate?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  teamLead?: ModelIDInput | null,
  trafficControlDiagram?: ModelStringInput | null,
  jobType?: ModelJobTypeInput | null,
  jobLatitude?: ModelFloatInput | null,
  jobLongitude?: ModelFloatInput | null,
  expectedSetupTime?: ModelFloatInput | null,
  jobSetupComplete?: ModelStringInput | null,
  jobStage?: ModelJobStageInput | null,
  jobPercentComplete?: ModelIntInput | null,
  teamLeftHQ?: ModelStringInput | null,
  teamArrivedAtSite?: ModelStringInput | null,
  teamArrivedAtOffice?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProjectTeamFilterInput = {
  teamMemberID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  empID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectTeamFilterInput | null > | null,
  or?: Array< ModelProjectTeamFilterInput | null > | null,
  not?: ModelProjectTeamFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectProjectTeamProjectID?: ModelIDInput | null,
};

export type ModelEquipmentListFilterInput = {
  equipListID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  equipID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEquipmentListFilterInput | null > | null,
  or?: Array< ModelEquipmentListFilterInput | null > | null,
  not?: ModelEquipmentListFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectEquipmentListProjectID?: ModelIDInput | null,
};

export type ModelPreTripCheckListFilterInput = {
  preCheckListID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  truckNum?: ModelStringInput | null,
  registrationAvailable?: ModelBooleanInput | null,
  registrationExpDate?: ModelStringInput | null,
  stickerOnPlate?: ModelBooleanInput | null,
  insuranceCard?: ModelBooleanInput | null,
  insuranceExpDate?: ModelStringInput | null,
  oilLevel?: ModelFluidLevelInput | null,
  oilLife?: ModelIntInput | null,
  coolantLevel?: ModelFluidLevelInput | null,
  transmissionLevel?: ModelFluidLevelInput | null,
  wiperBlades?: ModelCompConditionInput | null,
  lights?: ModelCompConditionInput | null,
  lightReplacement?: ModelStringInput | null,
  tires?: ModelCompConditionInput | null,
  timeReplacement?: ModelStringInput | null,
  bodyCondition?: ModelStringInput | null,
  completedTS?: ModelStringInput | null,
  completedBy?: ModelIDInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPreTripCheckListFilterInput | null > | null,
  or?: Array< ModelPreTripCheckListFilterInput | null > | null,
  not?: ModelPreTripCheckListFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectPreTripChecklistProjectID?: ModelIDInput | null,
};

export type ModelCheckListsFilterInput = {
  checkListID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  listType?: ModelListTypeInput | null,
  taskDescription?: ModelStringInput | null,
  completedTS?: ModelStringInput | null,
  completedBy?: ModelIDInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCheckListsFilterInput | null > | null,
  or?: Array< ModelCheckListsFilterInput | null > | null,
  not?: ModelCheckListsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectChecklistsProjectID?: ModelIDInput | null,
};

export type ModelHourlyCheckinsFilterInput = {
  checkinID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  checkinTimeActual?: ModelStringInput | null,
  equipmentCheck?: ModelStringInput | null,
  employeeCheck?: ModelStringInput | null,
  customerCheck?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHourlyCheckinsFilterInput | null > | null,
  or?: Array< ModelHourlyCheckinsFilterInput | null > | null,
  not?: ModelHourlyCheckinsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectHourlyCheckinsProjectID?: ModelIDInput | null,
};

export type ModelJobSitePicsFilterInput = {
  picID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  picTime?: ModelStringInput | null,
  picPath?: ModelStringInput | null,
  picType?: ModelPicTypeInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobSitePicsFilterInput | null > | null,
  or?: Array< ModelJobSitePicsFilterInput | null > | null,
  not?: ModelJobSitePicsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectJobSitePicsProjectID?: ModelIDInput | null,
};

export type ModelTeamLeadSurveyFilterInput = {
  surveyID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  surveyTime?: ModelStringInput | null,
  equipDamage?: ModelBooleanInput | null,
  equipDamageDesc?: ModelStringInput | null,
  perfRating?: ModelIntInput | null,
  perfRatingDesc?: ModelStringInput | null,
  training?: ModelBooleanInput | null,
  trainingDesc?: ModelStringInput | null,
  officeNotification?: ModelBooleanInput | null,
  officeNotificationDesc?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTeamLeadSurveyFilterInput | null > | null,
  or?: Array< ModelTeamLeadSurveyFilterInput | null > | null,
  not?: ModelTeamLeadSurveyFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectTeamLeadSurveyProjectID?: ModelIDInput | null,
};

export type ModelContractFilterInput = {
  contractID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  signedTime?: ModelStringInput | null,
  lastUpdateTime?: ModelStringInput | null,
  office?: ModelStringInput | null,
  sAndE?: ModelStringInput | null,
  workOrder?: ModelIntInput | null,
  callerName?: ModelStringInput | null,
  cod?: ModelBooleanInput | null,
  charge?: ModelStringInput | null,
  poNumber?: ModelStringInput | null,
  serviceDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContractFilterInput | null > | null,
  or?: Array< ModelContractFilterInput | null > | null,
  not?: ModelContractFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectContractProjectID?: ModelIDInput | null,
};

export type ModelLeasedItemsFilterInput = {
  itemID?: ModelIDInput | null,
  contractID?: ModelIDInput | null,
  equipmentID?: ModelIDInput | null,
  count?: ModelIntInput | null,
  description?: ModelStringInput | null,
  prevBalance?: ModelFloatInput | null,
  newBalance?: ModelFloatInput | null,
  unitRate?: ModelFloatInput | null,
  lesseeAgent?: ModelStringInput | null,
  lessorAgent?: ModelStringInput | null,
  customerEmail?: ModelStringInput | null,
  equipmentLocation?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLeasedItemsFilterInput | null > | null,
  or?: Array< ModelLeasedItemsFilterInput | null > | null,
  not?: ModelLeasedItemsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  contractLeasedItemsContractID?: ModelIDInput | null,
};

export type ModelQuotesFilterInput = {
  quoteID?: ModelIDInput | null,
  quoteText?: ModelStringInput | null,
  quoteAttributed?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuotesFilterInput | null > | null,
  or?: Array< ModelQuotesFilterInput | null > | null,
  not?: ModelQuotesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelQuotesConnection = {
  __typename: "ModelQuotesConnection",
  items:  Array<Quotes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDefaultEquipmentListsFilterInput = {
  defaultListID?: ModelIDInput | null,
  jobName?: ModelStringInput | null,
  setupTime?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDefaultEquipmentListsFilterInput | null > | null,
  or?: Array< ModelDefaultEquipmentListsFilterInput | null > | null,
  not?: ModelDefaultEquipmentListsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDefaultEquipmentListsConnection = {
  __typename: "ModelDefaultEquipmentListsConnection",
  items:  Array<DefaultEquipmentLists | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDefaultEquipmentFilterInput = {
  defaultEquipID?: ModelIDInput | null,
  listID?: ModelIDInput | null,
  equipmentID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  totalRequired?: ModelIntInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDefaultEquipmentFilterInput | null > | null,
  or?: Array< ModelDefaultEquipmentFilterInput | null > | null,
  not?: ModelDefaultEquipmentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  defaultEquipmentListsDefaultEquipmentDefaultListID?: ModelIDInput | null,
};

export type ModelSubscriptionEmployeeFilterInput = {
  empID?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  middleInitial?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  suffix?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address1?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
  photo?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionEquipmentFilterInput = {
  equipID?: ModelSubscriptionIDInput | null,
  serialNumber?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  equipPhoto?: ModelSubscriptionStringInput | null,
  totalNumber?: ModelSubscriptionIntInput | null,
  rentalRateDay?: ModelSubscriptionFloatInput | null,
  rentalRateWeek?: ModelSubscriptionFloatInput | null,
  rentalRateMonth?: ModelSubscriptionFloatInput | null,
  purchasePrice?: ModelSubscriptionFloatInput | null,
  availableNumer?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEquipmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  customerID?: ModelSubscriptionIDInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  contactFirstName?: ModelSubscriptionStringInput | null,
  contactLastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address1?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProjectFilterInput = {
  projectID?: ModelSubscriptionIDInput | null,
  jobName?: ModelSubscriptionStringInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  jobDate?: ModelSubscriptionStringInput | null,
  address1?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
  teamLead?: ModelSubscriptionIDInput | null,
  trafficControlDiagram?: ModelSubscriptionStringInput | null,
  jobType?: ModelSubscriptionStringInput | null,
  jobLatitude?: ModelSubscriptionFloatInput | null,
  jobLongitude?: ModelSubscriptionFloatInput | null,
  expectedSetupTime?: ModelSubscriptionFloatInput | null,
  jobSetupComplete?: ModelSubscriptionStringInput | null,
  jobStage?: ModelSubscriptionStringInput | null,
  jobPercentComplete?: ModelSubscriptionIntInput | null,
  teamLeftHQ?: ModelSubscriptionStringInput | null,
  teamArrivedAtSite?: ModelSubscriptionStringInput | null,
  teamArrivedAtOffice?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  projectProjectTeamProjectID?: ModelSubscriptionIDInput | null,
  projectEquipmentListProjectID?: ModelSubscriptionIDInput | null,
  projectJobSitePicsProjectID?: ModelSubscriptionIDInput | null,
  projectTeamLeadSurveyProjectID?: ModelSubscriptionIDInput | null,
  projectPreTripChecklistProjectID?: ModelSubscriptionIDInput | null,
  projectChecklistsProjectID?: ModelSubscriptionIDInput | null,
  projectHourlyCheckinsProjectID?: ModelSubscriptionIDInput | null,
  projectContractProjectID?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionProjectTeamFilterInput = {
  teamMemberID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  empID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectTeamFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionEquipmentListFilterInput = {
  equipListID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  equipID?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEquipmentListFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentListFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPreTripCheckListFilterInput = {
  preCheckListID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  truckNum?: ModelSubscriptionStringInput | null,
  registrationAvailable?: ModelSubscriptionBooleanInput | null,
  registrationExpDate?: ModelSubscriptionStringInput | null,
  stickerOnPlate?: ModelSubscriptionBooleanInput | null,
  insuranceCard?: ModelSubscriptionBooleanInput | null,
  insuranceExpDate?: ModelSubscriptionStringInput | null,
  oilLevel?: ModelSubscriptionStringInput | null,
  oilLife?: ModelSubscriptionIntInput | null,
  coolantLevel?: ModelSubscriptionStringInput | null,
  transmissionLevel?: ModelSubscriptionStringInput | null,
  wiperBlades?: ModelSubscriptionStringInput | null,
  lights?: ModelSubscriptionStringInput | null,
  lightReplacement?: ModelSubscriptionStringInput | null,
  tires?: ModelSubscriptionStringInput | null,
  timeReplacement?: ModelSubscriptionStringInput | null,
  bodyCondition?: ModelSubscriptionStringInput | null,
  completedTS?: ModelSubscriptionStringInput | null,
  completedBy?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPreTripCheckListFilterInput | null > | null,
  or?: Array< ModelSubscriptionPreTripCheckListFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCheckListsFilterInput = {
  checkListID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  listType?: ModelSubscriptionStringInput | null,
  taskDescription?: ModelSubscriptionStringInput | null,
  completedTS?: ModelSubscriptionStringInput | null,
  completedBy?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCheckListsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCheckListsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionHourlyCheckinsFilterInput = {
  checkinID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  checkinTimeActual?: ModelSubscriptionStringInput | null,
  equipmentCheck?: ModelSubscriptionStringInput | null,
  employeeCheck?: ModelSubscriptionStringInput | null,
  customerCheck?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHourlyCheckinsFilterInput | null > | null,
  or?: Array< ModelSubscriptionHourlyCheckinsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionJobSitePicsFilterInput = {
  picID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  picTime?: ModelSubscriptionStringInput | null,
  picPath?: ModelSubscriptionStringInput | null,
  picType?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobSitePicsFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobSitePicsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTeamLeadSurveyFilterInput = {
  surveyID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  surveyTime?: ModelSubscriptionStringInput | null,
  equipDamage?: ModelSubscriptionBooleanInput | null,
  equipDamageDesc?: ModelSubscriptionStringInput | null,
  perfRating?: ModelSubscriptionIntInput | null,
  perfRatingDesc?: ModelSubscriptionStringInput | null,
  training?: ModelSubscriptionBooleanInput | null,
  trainingDesc?: ModelSubscriptionStringInput | null,
  officeNotification?: ModelSubscriptionBooleanInput | null,
  officeNotificationDesc?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamLeadSurveyFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamLeadSurveyFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionContractFilterInput = {
  contractID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  signedTime?: ModelSubscriptionStringInput | null,
  lastUpdateTime?: ModelSubscriptionStringInput | null,
  office?: ModelSubscriptionStringInput | null,
  sAndE?: ModelSubscriptionStringInput | null,
  workOrder?: ModelSubscriptionIntInput | null,
  callerName?: ModelSubscriptionStringInput | null,
  cod?: ModelSubscriptionBooleanInput | null,
  charge?: ModelSubscriptionStringInput | null,
  poNumber?: ModelSubscriptionStringInput | null,
  serviceDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContractFilterInput | null > | null,
  or?: Array< ModelSubscriptionContractFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  contractLeasedItemsContractID?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionLeasedItemsFilterInput = {
  itemID?: ModelSubscriptionIDInput | null,
  contractID?: ModelSubscriptionIDInput | null,
  equipmentID?: ModelSubscriptionIDInput | null,
  count?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  prevBalance?: ModelSubscriptionFloatInput | null,
  newBalance?: ModelSubscriptionFloatInput | null,
  unitRate?: ModelSubscriptionFloatInput | null,
  lesseeAgent?: ModelSubscriptionStringInput | null,
  lessorAgent?: ModelSubscriptionStringInput | null,
  customerEmail?: ModelSubscriptionStringInput | null,
  equipmentLocation?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLeasedItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionLeasedItemsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionQuotesFilterInput = {
  quoteID?: ModelSubscriptionIDInput | null,
  quoteText?: ModelSubscriptionStringInput | null,
  quoteAttributed?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuotesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDefaultEquipmentListsFilterInput = {
  defaultListID?: ModelSubscriptionIDInput | null,
  jobName?: ModelSubscriptionStringInput | null,
  setupTime?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDefaultEquipmentListsFilterInput | null > | null,
  or?: Array< ModelSubscriptionDefaultEquipmentListsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  defaultEquipmentListsDefaultEquipmentDefaultListID?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionDefaultEquipmentFilterInput = {
  defaultEquipID?: ModelSubscriptionIDInput | null,
  listID?: ModelSubscriptionIDInput | null,
  equipmentID?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  totalRequired?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDefaultEquipmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDefaultEquipmentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEquipmentMutationVariables = {
  input: CreateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type CreateEquipmentMutation = {
  createEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEquipmentMutationVariables = {
  input: UpdateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type UpdateEquipmentMutation = {
  updateEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEquipmentMutationVariables = {
  input: DeleteEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type DeleteEquipmentMutation = {
  deleteEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProjectTeamMutationVariables = {
  input: CreateProjectTeamInput,
  condition?: ModelProjectTeamConditionInput | null,
};

export type CreateProjectTeamMutation = {
  createProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type UpdateProjectTeamMutationVariables = {
  input: UpdateProjectTeamInput,
  condition?: ModelProjectTeamConditionInput | null,
};

export type UpdateProjectTeamMutation = {
  updateProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type DeleteProjectTeamMutationVariables = {
  input: DeleteProjectTeamInput,
  condition?: ModelProjectTeamConditionInput | null,
};

export type DeleteProjectTeamMutation = {
  deleteProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type CreateEquipmentListMutationVariables = {
  input: CreateEquipmentListInput,
  condition?: ModelEquipmentListConditionInput | null,
};

export type CreateEquipmentListMutation = {
  createEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type UpdateEquipmentListMutationVariables = {
  input: UpdateEquipmentListInput,
  condition?: ModelEquipmentListConditionInput | null,
};

export type UpdateEquipmentListMutation = {
  updateEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type DeleteEquipmentListMutationVariables = {
  input: DeleteEquipmentListInput,
  condition?: ModelEquipmentListConditionInput | null,
};

export type DeleteEquipmentListMutation = {
  deleteEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type CreatePreTripCheckListMutationVariables = {
  input: CreatePreTripCheckListInput,
  condition?: ModelPreTripCheckListConditionInput | null,
};

export type CreatePreTripCheckListMutation = {
  createPreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type UpdatePreTripCheckListMutationVariables = {
  input: UpdatePreTripCheckListInput,
  condition?: ModelPreTripCheckListConditionInput | null,
};

export type UpdatePreTripCheckListMutation = {
  updatePreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type DeletePreTripCheckListMutationVariables = {
  input: DeletePreTripCheckListInput,
  condition?: ModelPreTripCheckListConditionInput | null,
};

export type DeletePreTripCheckListMutation = {
  deletePreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type CreateCheckListsMutationVariables = {
  input: CreateCheckListsInput,
  condition?: ModelCheckListsConditionInput | null,
};

export type CreateCheckListsMutation = {
  createCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type UpdateCheckListsMutationVariables = {
  input: UpdateCheckListsInput,
  condition?: ModelCheckListsConditionInput | null,
};

export type UpdateCheckListsMutation = {
  updateCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type DeleteCheckListsMutationVariables = {
  input: DeleteCheckListsInput,
  condition?: ModelCheckListsConditionInput | null,
};

export type DeleteCheckListsMutation = {
  deleteCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type CreateHourlyCheckinsMutationVariables = {
  input: CreateHourlyCheckinsInput,
  condition?: ModelHourlyCheckinsConditionInput | null,
};

export type CreateHourlyCheckinsMutation = {
  createHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type UpdateHourlyCheckinsMutationVariables = {
  input: UpdateHourlyCheckinsInput,
  condition?: ModelHourlyCheckinsConditionInput | null,
};

export type UpdateHourlyCheckinsMutation = {
  updateHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type DeleteHourlyCheckinsMutationVariables = {
  input: DeleteHourlyCheckinsInput,
  condition?: ModelHourlyCheckinsConditionInput | null,
};

export type DeleteHourlyCheckinsMutation = {
  deleteHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type CreateJobSitePicsMutationVariables = {
  input: CreateJobSitePicsInput,
  condition?: ModelJobSitePicsConditionInput | null,
};

export type CreateJobSitePicsMutation = {
  createJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type UpdateJobSitePicsMutationVariables = {
  input: UpdateJobSitePicsInput,
  condition?: ModelJobSitePicsConditionInput | null,
};

export type UpdateJobSitePicsMutation = {
  updateJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type DeleteJobSitePicsMutationVariables = {
  input: DeleteJobSitePicsInput,
  condition?: ModelJobSitePicsConditionInput | null,
};

export type DeleteJobSitePicsMutation = {
  deleteJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type CreateTeamLeadSurveyMutationVariables = {
  input: CreateTeamLeadSurveyInput,
  condition?: ModelTeamLeadSurveyConditionInput | null,
};

export type CreateTeamLeadSurveyMutation = {
  createTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type UpdateTeamLeadSurveyMutationVariables = {
  input: UpdateTeamLeadSurveyInput,
  condition?: ModelTeamLeadSurveyConditionInput | null,
};

export type UpdateTeamLeadSurveyMutation = {
  updateTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type DeleteTeamLeadSurveyMutationVariables = {
  input: DeleteTeamLeadSurveyInput,
  condition?: ModelTeamLeadSurveyConditionInput | null,
};

export type DeleteTeamLeadSurveyMutation = {
  deleteTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type CreateContractMutationVariables = {
  input: CreateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type CreateContractMutation = {
  createContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type UpdateContractMutationVariables = {
  input: UpdateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type UpdateContractMutation = {
  updateContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type DeleteContractMutationVariables = {
  input: DeleteContractInput,
  condition?: ModelContractConditionInput | null,
};

export type DeleteContractMutation = {
  deleteContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type CreateLeasedItemsMutationVariables = {
  input: CreateLeasedItemsInput,
  condition?: ModelLeasedItemsConditionInput | null,
};

export type CreateLeasedItemsMutation = {
  createLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type UpdateLeasedItemsMutationVariables = {
  input: UpdateLeasedItemsInput,
  condition?: ModelLeasedItemsConditionInput | null,
};

export type UpdateLeasedItemsMutation = {
  updateLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type DeleteLeasedItemsMutationVariables = {
  input: DeleteLeasedItemsInput,
  condition?: ModelLeasedItemsConditionInput | null,
};

export type DeleteLeasedItemsMutation = {
  deleteLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type CreateQuotesMutationVariables = {
  input: CreateQuotesInput,
  condition?: ModelQuotesConditionInput | null,
};

export type CreateQuotesMutation = {
  createQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuotesMutationVariables = {
  input: UpdateQuotesInput,
  condition?: ModelQuotesConditionInput | null,
};

export type UpdateQuotesMutation = {
  updateQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuotesMutationVariables = {
  input: DeleteQuotesInput,
  condition?: ModelQuotesConditionInput | null,
};

export type DeleteQuotesMutation = {
  deleteQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDefaultEquipmentListsMutationVariables = {
  input: CreateDefaultEquipmentListsInput,
  condition?: ModelDefaultEquipmentListsConditionInput | null,
};

export type CreateDefaultEquipmentListsMutation = {
  createDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDefaultEquipmentListsMutationVariables = {
  input: UpdateDefaultEquipmentListsInput,
  condition?: ModelDefaultEquipmentListsConditionInput | null,
};

export type UpdateDefaultEquipmentListsMutation = {
  updateDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDefaultEquipmentListsMutationVariables = {
  input: DeleteDefaultEquipmentListsInput,
  condition?: ModelDefaultEquipmentListsConditionInput | null,
};

export type DeleteDefaultEquipmentListsMutation = {
  deleteDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDefaultEquipmentMutationVariables = {
  input: CreateDefaultEquipmentInput,
  condition?: ModelDefaultEquipmentConditionInput | null,
};

export type CreateDefaultEquipmentMutation = {
  createDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};

export type UpdateDefaultEquipmentMutationVariables = {
  input: UpdateDefaultEquipmentInput,
  condition?: ModelDefaultEquipmentConditionInput | null,
};

export type UpdateDefaultEquipmentMutation = {
  updateDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};

export type DeleteDefaultEquipmentMutationVariables = {
  input: DeleteDefaultEquipmentInput,
  condition?: ModelDefaultEquipmentConditionInput | null,
};

export type DeleteDefaultEquipmentMutation = {
  deleteDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};

export type GetEmployeeQueryVariables = {
  empID: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEmployeesQueryVariables = {
  empID?: string | null,
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      empID: string,
      firstName: string,
      middleInitial?: string | null,
      lastName: string,
      suffix?: string | null,
      role: Role,
      email: string,
      phone: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      photo?: string | null,
      gender?: string | null,
      active: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmployeesQuery = {
  syncEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      empID: string,
      firstName: string,
      middleInitial?: string | null,
      lastName: string,
      suffix?: string | null,
      role: Role,
      email: string,
      phone: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      photo?: string | null,
      gender?: string | null,
      active: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentQueryVariables = {
  equipID: string,
};

export type GetEquipmentQuery = {
  getEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEquipmentQueryVariables = {
  equipID?: string | null,
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEquipmentQuery = {
  listEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      equipID: string,
      serialNumber?: string | null,
      description: string,
      location?: string | null,
      equipPhoto?: string | null,
      totalNumber: number,
      rentalRateDay: number,
      rentalRateWeek: number,
      rentalRateMonth: number,
      purchasePrice: number,
      availableNumer: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentQueryVariables = {
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentQuery = {
  syncEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      equipID: string,
      serialNumber?: string | null,
      description: string,
      location?: string | null,
      equipPhoto?: string | null,
      totalNumber: number,
      rentalRateDay: number,
      rentalRateWeek: number,
      rentalRateMonth: number,
      purchasePrice: number,
      availableNumer: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  customerID: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCustomersQueryVariables = {
  customerID?: string | null,
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      customerID: string,
      companyName: string,
      contactFirstName: string,
      contactLastName: string,
      email: string,
      phone: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCustomersQuery = {
  syncCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      customerID: string,
      companyName: string,
      contactFirstName: string,
      contactLastName: string,
      email: string,
      phone: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProjectQueryVariables = {
  projectID: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProjectsQueryVariables = {
  projectID?: string | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectsQuery = {
  syncProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProjectTeamQueryVariables = {
  teamMemberID: string,
};

export type GetProjectTeamQuery = {
  getProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type ListProjectTeamsQueryVariables = {
  teamMemberID?: string | null,
  filter?: ModelProjectTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectTeamsQuery = {
  listProjectTeams?:  {
    __typename: "ModelProjectTeamConnection",
    items:  Array< {
      __typename: "ProjectTeam",
      teamMemberID: string,
      projectID: string,
      empID: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectProjectTeamProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProjectTeamsQueryVariables = {
  filter?: ModelProjectTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectTeamsQuery = {
  syncProjectTeams?:  {
    __typename: "ModelProjectTeamConnection",
    items:  Array< {
      __typename: "ProjectTeam",
      teamMemberID: string,
      projectID: string,
      empID: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectProjectTeamProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentListQueryVariables = {
  equipListID: string,
};

export type GetEquipmentListQuery = {
  getEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type ListEquipmentListsQueryVariables = {
  equipListID?: string | null,
  filter?: ModelEquipmentListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEquipmentListsQuery = {
  listEquipmentLists?:  {
    __typename: "ModelEquipmentListConnection",
    items:  Array< {
      __typename: "EquipmentList",
      equipListID: string,
      projectID: string,
      equipID: string,
      description: string,
      quantity: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectEquipmentListProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentListsQueryVariables = {
  filter?: ModelEquipmentListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentListsQuery = {
  syncEquipmentLists?:  {
    __typename: "ModelEquipmentListConnection",
    items:  Array< {
      __typename: "EquipmentList",
      equipListID: string,
      projectID: string,
      equipID: string,
      description: string,
      quantity: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectEquipmentListProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPreTripCheckListQueryVariables = {
  preCheckListID: string,
};

export type GetPreTripCheckListQuery = {
  getPreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type ListPreTripCheckListsQueryVariables = {
  preCheckListID?: string | null,
  filter?: ModelPreTripCheckListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPreTripCheckListsQuery = {
  listPreTripCheckLists?:  {
    __typename: "ModelPreTripCheckListConnection",
    items:  Array< {
      __typename: "PreTripCheckList",
      preCheckListID: string,
      projectID: string,
      truckNum: string,
      registrationAvailable: boolean,
      registrationExpDate: string,
      stickerOnPlate: boolean,
      insuranceCard: boolean,
      insuranceExpDate: string,
      oilLevel: FluidLevel,
      oilLife: number,
      coolantLevel: FluidLevel,
      transmissionLevel: FluidLevel,
      wiperBlades: CompCondition,
      lights: CompCondition,
      lightReplacement: string,
      tires: CompCondition,
      timeReplacement: string,
      bodyCondition?: string | null,
      completedTS: string,
      completedBy: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectPreTripChecklistProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPreTripCheckListsQueryVariables = {
  filter?: ModelPreTripCheckListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPreTripCheckListsQuery = {
  syncPreTripCheckLists?:  {
    __typename: "ModelPreTripCheckListConnection",
    items:  Array< {
      __typename: "PreTripCheckList",
      preCheckListID: string,
      projectID: string,
      truckNum: string,
      registrationAvailable: boolean,
      registrationExpDate: string,
      stickerOnPlate: boolean,
      insuranceCard: boolean,
      insuranceExpDate: string,
      oilLevel: FluidLevel,
      oilLife: number,
      coolantLevel: FluidLevel,
      transmissionLevel: FluidLevel,
      wiperBlades: CompCondition,
      lights: CompCondition,
      lightReplacement: string,
      tires: CompCondition,
      timeReplacement: string,
      bodyCondition?: string | null,
      completedTS: string,
      completedBy: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectPreTripChecklistProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCheckListsQueryVariables = {
  checkListID: string,
};

export type GetCheckListsQuery = {
  getCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type ListCheckListsQueryVariables = {
  checkListID?: string | null,
  filter?: ModelCheckListsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCheckListsQuery = {
  listCheckLists?:  {
    __typename: "ModelCheckListsConnection",
    items:  Array< {
      __typename: "CheckLists",
      checkListID: string,
      projectID: string,
      listType: ListType,
      taskDescription: string,
      completedTS: string,
      completedBy: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectChecklistsProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCheckListsQueryVariables = {
  filter?: ModelCheckListsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCheckListsQuery = {
  syncCheckLists?:  {
    __typename: "ModelCheckListsConnection",
    items:  Array< {
      __typename: "CheckLists",
      checkListID: string,
      projectID: string,
      listType: ListType,
      taskDescription: string,
      completedTS: string,
      completedBy: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectChecklistsProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHourlyCheckinsQueryVariables = {
  checkinID: string,
};

export type GetHourlyCheckinsQuery = {
  getHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type ListHourlyCheckinsQueryVariables = {
  checkinID?: string | null,
  filter?: ModelHourlyCheckinsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListHourlyCheckinsQuery = {
  listHourlyCheckins?:  {
    __typename: "ModelHourlyCheckinsConnection",
    items:  Array< {
      __typename: "HourlyCheckins",
      checkinID: string,
      projectID: string,
      checkinTimeActual: string,
      equipmentCheck: string,
      employeeCheck: string,
      customerCheck: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectHourlyCheckinsProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHourlyCheckinsQueryVariables = {
  filter?: ModelHourlyCheckinsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHourlyCheckinsQuery = {
  syncHourlyCheckins?:  {
    __typename: "ModelHourlyCheckinsConnection",
    items:  Array< {
      __typename: "HourlyCheckins",
      checkinID: string,
      projectID: string,
      checkinTimeActual: string,
      equipmentCheck: string,
      employeeCheck: string,
      customerCheck: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectHourlyCheckinsProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetJobSitePicsQueryVariables = {
  picID: string,
};

export type GetJobSitePicsQuery = {
  getJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type ListJobSitePicsQueryVariables = {
  picID?: string | null,
  filter?: ModelJobSitePicsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListJobSitePicsQuery = {
  listJobSitePics?:  {
    __typename: "ModelJobSitePicsConnection",
    items:  Array< {
      __typename: "JobSitePics",
      picID: string,
      projectID: string,
      picTime: string,
      picPath: string,
      picType: PicType,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectJobSitePicsProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncJobSitePicsQueryVariables = {
  filter?: ModelJobSitePicsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncJobSitePicsQuery = {
  syncJobSitePics?:  {
    __typename: "ModelJobSitePicsConnection",
    items:  Array< {
      __typename: "JobSitePics",
      picID: string,
      projectID: string,
      picTime: string,
      picPath: string,
      picType: PicType,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectJobSitePicsProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTeamLeadSurveyQueryVariables = {
  surveyID: string,
};

export type GetTeamLeadSurveyQuery = {
  getTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type ListTeamLeadSurveysQueryVariables = {
  surveyID?: string | null,
  filter?: ModelTeamLeadSurveyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTeamLeadSurveysQuery = {
  listTeamLeadSurveys?:  {
    __typename: "ModelTeamLeadSurveyConnection",
    items:  Array< {
      __typename: "TeamLeadSurvey",
      surveyID: string,
      projectID: string,
      surveyTime: string,
      equipDamage: boolean,
      equipDamageDesc: string,
      perfRating: number,
      perfRatingDesc: string,
      training: boolean,
      trainingDesc: string,
      officeNotification: boolean,
      officeNotificationDesc: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectTeamLeadSurveyProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTeamLeadSurveysQueryVariables = {
  filter?: ModelTeamLeadSurveyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeamLeadSurveysQuery = {
  syncTeamLeadSurveys?:  {
    __typename: "ModelTeamLeadSurveyConnection",
    items:  Array< {
      __typename: "TeamLeadSurvey",
      surveyID: string,
      projectID: string,
      surveyTime: string,
      equipDamage: boolean,
      equipDamageDesc: string,
      perfRating: number,
      perfRatingDesc: string,
      training: boolean,
      trainingDesc: string,
      officeNotification: boolean,
      officeNotificationDesc: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectTeamLeadSurveyProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetContractQueryVariables = {
  contractID: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type ListContractsQueryVariables = {
  contractID?: string | null,
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListContractsQuery = {
  listContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncContractsQuery = {
  syncContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLeasedItemsQueryVariables = {
  itemID: string,
};

export type GetLeasedItemsQuery = {
  getLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type ListLeasedItemsQueryVariables = {
  itemID?: string | null,
  filter?: ModelLeasedItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLeasedItemsQuery = {
  listLeasedItems?:  {
    __typename: "ModelLeasedItemsConnection",
    items:  Array< {
      __typename: "LeasedItems",
      itemID: string,
      contractID: string,
      equipmentID: string,
      count: number,
      description: string,
      prevBalance: number,
      newBalance: number,
      unitRate: number,
      lesseeAgent: string,
      lessorAgent: string,
      customerEmail: string,
      equipmentLocation: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      contractLeasedItemsContractID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLeasedItemsQueryVariables = {
  filter?: ModelLeasedItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLeasedItemsQuery = {
  syncLeasedItems?:  {
    __typename: "ModelLeasedItemsConnection",
    items:  Array< {
      __typename: "LeasedItems",
      itemID: string,
      contractID: string,
      equipmentID: string,
      count: number,
      description: string,
      prevBalance: number,
      newBalance: number,
      unitRate: number,
      lesseeAgent: string,
      lessorAgent: string,
      customerEmail: string,
      equipmentLocation: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      contractLeasedItemsContractID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuotesQueryVariables = {
  quoteID: string,
};

export type GetQuotesQuery = {
  getQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuotesQueryVariables = {
  quoteID?: string | null,
  filter?: ModelQuotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuotesQuery = {
  listQuotes?:  {
    __typename: "ModelQuotesConnection",
    items:  Array< {
      __typename: "Quotes",
      quoteID: string,
      quoteText: string,
      quoteAttributed: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuotesQueryVariables = {
  filter?: ModelQuotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuotesQuery = {
  syncQuotes?:  {
    __typename: "ModelQuotesConnection",
    items:  Array< {
      __typename: "Quotes",
      quoteID: string,
      quoteText: string,
      quoteAttributed: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDefaultEquipmentListsQueryVariables = {
  defaultListID: string,
};

export type GetDefaultEquipmentListsQuery = {
  getDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDefaultEquipmentListsQueryVariables = {
  defaultListID?: string | null,
  filter?: ModelDefaultEquipmentListsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDefaultEquipmentListsQuery = {
  listDefaultEquipmentLists?:  {
    __typename: "ModelDefaultEquipmentListsConnection",
    items:  Array< {
      __typename: "DefaultEquipmentLists",
      defaultListID: string,
      jobName: string,
      setupTime?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDefaultEquipmentListsQueryVariables = {
  filter?: ModelDefaultEquipmentListsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDefaultEquipmentListsQuery = {
  syncDefaultEquipmentLists?:  {
    __typename: "ModelDefaultEquipmentListsConnection",
    items:  Array< {
      __typename: "DefaultEquipmentLists",
      defaultListID: string,
      jobName: string,
      setupTime?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDefaultEquipmentQueryVariables = {
  defaultEquipID: string,
};

export type GetDefaultEquipmentQuery = {
  getDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};

export type ListDefaultEquipmentsQueryVariables = {
  defaultEquipID?: string | null,
  filter?: ModelDefaultEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDefaultEquipmentsQuery = {
  listDefaultEquipments?:  {
    __typename: "ModelDefaultEquipmentConnection",
    items:  Array< {
      __typename: "DefaultEquipment",
      defaultEquipID: string,
      listID: string,
      equipmentID: string,
      description: string,
      totalRequired: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      defaultEquipmentListsDefaultEquipmentDefaultListID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDefaultEquipmentsQueryVariables = {
  filter?: ModelDefaultEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDefaultEquipmentsQuery = {
  syncDefaultEquipments?:  {
    __typename: "ModelDefaultEquipmentConnection",
    items:  Array< {
      __typename: "DefaultEquipment",
      defaultEquipID: string,
      listID: string,
      equipmentID: string,
      description: string,
      totalRequired: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      defaultEquipmentListsDefaultEquipmentDefaultListID: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    empID: string,
    firstName: string,
    middleInitial?: string | null,
    lastName: string,
    suffix?: string | null,
    role: Role,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    photo?: string | null,
    gender?: string | null,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
};

export type OnCreateEquipmentSubscription = {
  onCreateEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
};

export type OnUpdateEquipmentSubscription = {
  onUpdateEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
};

export type OnDeleteEquipmentSubscription = {
  onDeleteEquipment?:  {
    __typename: "Equipment",
    equipID: string,
    serialNumber?: string | null,
    description: string,
    location?: string | null,
    equipPhoto?: string | null,
    totalNumber: number,
    rentalRateDay: number,
    rentalRateWeek: number,
    rentalRateMonth: number,
    purchasePrice: number,
    availableNumer: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    customerID: string,
    companyName: string,
    contactFirstName: string,
    contactLastName: string,
    email: string,
    phone: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    projectID: string,
    jobName: string,
    companyName: string,
    description: string,
    jobDate: string,
    address1: string,
    address2?: string | null,
    city: string,
    state: string,
    zip: string,
    teamLead: string,
    trafficControlDiagram: string,
    jobType: JobType,
    jobLatitude: number,
    jobLongitude: number,
    expectedSetupTime: number,
    jobSetupComplete?: string | null,
    jobStage: JobStage,
    jobPercentComplete: number,
    teamLeftHQ?: string | null,
    teamArrivedAtSite?: string | null,
    teamArrivedAtOffice?: string | null,
    projectTeam?:  {
      __typename: "ModelProjectTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    equipmentList?:  {
      __typename: "ModelEquipmentListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    jobSitePics?:  {
      __typename: "ModelJobSitePicsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teamLeadSurvey?:  {
      __typename: "ModelTeamLeadSurveyConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    preTripChecklist?:  {
      __typename: "ModelPreTripCheckListConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    checklists?:  {
      __typename: "ModelCheckListsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    hourlyCheckins?:  {
      __typename: "ModelHourlyCheckinsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    contract?:  {
      __typename: "ModelContractConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProjectTeamSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTeamFilterInput | null,
};

export type OnCreateProjectTeamSubscription = {
  onCreateProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type OnUpdateProjectTeamSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTeamFilterInput | null,
};

export type OnUpdateProjectTeamSubscription = {
  onUpdateProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type OnDeleteProjectTeamSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTeamFilterInput | null,
};

export type OnDeleteProjectTeamSubscription = {
  onDeleteProjectTeam?:  {
    __typename: "ProjectTeam",
    teamMemberID: string,
    projectID: string,
    empID: string,
    name: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectProjectTeamProjectID: string,
  } | null,
};

export type OnCreateEquipmentListSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentListFilterInput | null,
};

export type OnCreateEquipmentListSubscription = {
  onCreateEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type OnUpdateEquipmentListSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentListFilterInput | null,
};

export type OnUpdateEquipmentListSubscription = {
  onUpdateEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type OnDeleteEquipmentListSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentListFilterInput | null,
};

export type OnDeleteEquipmentListSubscription = {
  onDeleteEquipmentList?:  {
    __typename: "EquipmentList",
    equipListID: string,
    projectID: string,
    equipID: string,
    description: string,
    quantity: number,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectEquipmentListProjectID: string,
  } | null,
};

export type OnCreatePreTripCheckListSubscriptionVariables = {
  filter?: ModelSubscriptionPreTripCheckListFilterInput | null,
};

export type OnCreatePreTripCheckListSubscription = {
  onCreatePreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type OnUpdatePreTripCheckListSubscriptionVariables = {
  filter?: ModelSubscriptionPreTripCheckListFilterInput | null,
};

export type OnUpdatePreTripCheckListSubscription = {
  onUpdatePreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type OnDeletePreTripCheckListSubscriptionVariables = {
  filter?: ModelSubscriptionPreTripCheckListFilterInput | null,
};

export type OnDeletePreTripCheckListSubscription = {
  onDeletePreTripCheckList?:  {
    __typename: "PreTripCheckList",
    preCheckListID: string,
    projectID: string,
    truckNum: string,
    registrationAvailable: boolean,
    registrationExpDate: string,
    stickerOnPlate: boolean,
    insuranceCard: boolean,
    insuranceExpDate: string,
    oilLevel: FluidLevel,
    oilLife: number,
    coolantLevel: FluidLevel,
    transmissionLevel: FluidLevel,
    wiperBlades: CompCondition,
    lights: CompCondition,
    lightReplacement: string,
    tires: CompCondition,
    timeReplacement: string,
    bodyCondition?: string | null,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectPreTripChecklistProjectID: string,
  } | null,
};

export type OnCreateCheckListsSubscriptionVariables = {
  filter?: ModelSubscriptionCheckListsFilterInput | null,
};

export type OnCreateCheckListsSubscription = {
  onCreateCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type OnUpdateCheckListsSubscriptionVariables = {
  filter?: ModelSubscriptionCheckListsFilterInput | null,
};

export type OnUpdateCheckListsSubscription = {
  onUpdateCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type OnDeleteCheckListsSubscriptionVariables = {
  filter?: ModelSubscriptionCheckListsFilterInput | null,
};

export type OnDeleteCheckListsSubscription = {
  onDeleteCheckLists?:  {
    __typename: "CheckLists",
    checkListID: string,
    projectID: string,
    listType: ListType,
    taskDescription: string,
    completedTS: string,
    completedBy: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectChecklistsProjectID: string,
  } | null,
};

export type OnCreateHourlyCheckinsSubscriptionVariables = {
  filter?: ModelSubscriptionHourlyCheckinsFilterInput | null,
};

export type OnCreateHourlyCheckinsSubscription = {
  onCreateHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type OnUpdateHourlyCheckinsSubscriptionVariables = {
  filter?: ModelSubscriptionHourlyCheckinsFilterInput | null,
};

export type OnUpdateHourlyCheckinsSubscription = {
  onUpdateHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type OnDeleteHourlyCheckinsSubscriptionVariables = {
  filter?: ModelSubscriptionHourlyCheckinsFilterInput | null,
};

export type OnDeleteHourlyCheckinsSubscription = {
  onDeleteHourlyCheckins?:  {
    __typename: "HourlyCheckins",
    checkinID: string,
    projectID: string,
    checkinTimeActual: string,
    equipmentCheck: string,
    employeeCheck: string,
    customerCheck: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectHourlyCheckinsProjectID: string,
  } | null,
};

export type OnCreateJobSitePicsSubscriptionVariables = {
  filter?: ModelSubscriptionJobSitePicsFilterInput | null,
};

export type OnCreateJobSitePicsSubscription = {
  onCreateJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type OnUpdateJobSitePicsSubscriptionVariables = {
  filter?: ModelSubscriptionJobSitePicsFilterInput | null,
};

export type OnUpdateJobSitePicsSubscription = {
  onUpdateJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type OnDeleteJobSitePicsSubscriptionVariables = {
  filter?: ModelSubscriptionJobSitePicsFilterInput | null,
};

export type OnDeleteJobSitePicsSubscription = {
  onDeleteJobSitePics?:  {
    __typename: "JobSitePics",
    picID: string,
    projectID: string,
    picTime: string,
    picPath: string,
    picType: PicType,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectJobSitePicsProjectID: string,
  } | null,
};

export type OnCreateTeamLeadSurveySubscriptionVariables = {
  filter?: ModelSubscriptionTeamLeadSurveyFilterInput | null,
};

export type OnCreateTeamLeadSurveySubscription = {
  onCreateTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type OnUpdateTeamLeadSurveySubscriptionVariables = {
  filter?: ModelSubscriptionTeamLeadSurveyFilterInput | null,
};

export type OnUpdateTeamLeadSurveySubscription = {
  onUpdateTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type OnDeleteTeamLeadSurveySubscriptionVariables = {
  filter?: ModelSubscriptionTeamLeadSurveyFilterInput | null,
};

export type OnDeleteTeamLeadSurveySubscription = {
  onDeleteTeamLeadSurvey?:  {
    __typename: "TeamLeadSurvey",
    surveyID: string,
    projectID: string,
    surveyTime: string,
    equipDamage: boolean,
    equipDamageDesc: string,
    perfRating: number,
    perfRatingDesc: string,
    training: boolean,
    trainingDesc: string,
    officeNotification: boolean,
    officeNotificationDesc: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectTeamLeadSurveyProjectID: string,
  } | null,
};

export type OnCreateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type OnUpdateContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type OnDeleteContractSubscriptionVariables = {
  filter?: ModelSubscriptionContractFilterInput | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    contractID: string,
    projectID: string,
    signedTime: string,
    lastUpdateTime: string,
    office: string,
    sAndE: string,
    workOrder: number,
    callerName: string,
    cod: boolean,
    charge: string,
    poNumber: string,
    serviceDate: string,
    project?:  {
      __typename: "Project",
      projectID: string,
      jobName: string,
      companyName: string,
      description: string,
      jobDate: string,
      address1: string,
      address2?: string | null,
      city: string,
      state: string,
      zip: string,
      teamLead: string,
      trafficControlDiagram: string,
      jobType: JobType,
      jobLatitude: number,
      jobLongitude: number,
      expectedSetupTime: number,
      jobSetupComplete?: string | null,
      jobStage: JobStage,
      jobPercentComplete: number,
      teamLeftHQ?: string | null,
      teamArrivedAtSite?: string | null,
      teamArrivedAtOffice?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    leasedItems?:  {
      __typename: "ModelLeasedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectContractProjectID: string,
  } | null,
};

export type OnCreateLeasedItemsSubscriptionVariables = {
  filter?: ModelSubscriptionLeasedItemsFilterInput | null,
};

export type OnCreateLeasedItemsSubscription = {
  onCreateLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type OnUpdateLeasedItemsSubscriptionVariables = {
  filter?: ModelSubscriptionLeasedItemsFilterInput | null,
};

export type OnUpdateLeasedItemsSubscription = {
  onUpdateLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type OnDeleteLeasedItemsSubscriptionVariables = {
  filter?: ModelSubscriptionLeasedItemsFilterInput | null,
};

export type OnDeleteLeasedItemsSubscription = {
  onDeleteLeasedItems?:  {
    __typename: "LeasedItems",
    itemID: string,
    contractID: string,
    equipmentID: string,
    count: number,
    description: string,
    prevBalance: number,
    newBalance: number,
    unitRate: number,
    lesseeAgent: string,
    lessorAgent: string,
    customerEmail: string,
    equipmentLocation: string,
    contract?:  {
      __typename: "Contract",
      contractID: string,
      projectID: string,
      signedTime: string,
      lastUpdateTime: string,
      office: string,
      sAndE: string,
      workOrder: number,
      callerName: string,
      cod: boolean,
      charge: string,
      poNumber: string,
      serviceDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectContractProjectID: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    contractLeasedItemsContractID: string,
  } | null,
};

export type OnCreateQuotesSubscriptionVariables = {
  filter?: ModelSubscriptionQuotesFilterInput | null,
};

export type OnCreateQuotesSubscription = {
  onCreateQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuotesSubscriptionVariables = {
  filter?: ModelSubscriptionQuotesFilterInput | null,
};

export type OnUpdateQuotesSubscription = {
  onUpdateQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuotesSubscriptionVariables = {
  filter?: ModelSubscriptionQuotesFilterInput | null,
};

export type OnDeleteQuotesSubscription = {
  onDeleteQuotes?:  {
    __typename: "Quotes",
    quoteID: string,
    quoteText: string,
    quoteAttributed: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDefaultEquipmentListsSubscriptionVariables = {
  filter?: ModelSubscriptionDefaultEquipmentListsFilterInput | null,
};

export type OnCreateDefaultEquipmentListsSubscription = {
  onCreateDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDefaultEquipmentListsSubscriptionVariables = {
  filter?: ModelSubscriptionDefaultEquipmentListsFilterInput | null,
};

export type OnUpdateDefaultEquipmentListsSubscription = {
  onUpdateDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDefaultEquipmentListsSubscriptionVariables = {
  filter?: ModelSubscriptionDefaultEquipmentListsFilterInput | null,
};

export type OnDeleteDefaultEquipmentListsSubscription = {
  onDeleteDefaultEquipmentLists?:  {
    __typename: "DefaultEquipmentLists",
    defaultListID: string,
    jobName: string,
    setupTime?: number | null,
    defaultEquipment?:  {
      __typename: "ModelDefaultEquipmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDefaultEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionDefaultEquipmentFilterInput | null,
};

export type OnCreateDefaultEquipmentSubscription = {
  onCreateDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};

export type OnUpdateDefaultEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionDefaultEquipmentFilterInput | null,
};

export type OnUpdateDefaultEquipmentSubscription = {
  onUpdateDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};

export type OnDeleteDefaultEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionDefaultEquipmentFilterInput | null,
};

export type OnDeleteDefaultEquipmentSubscription = {
  onDeleteDefaultEquipment?:  {
    __typename: "DefaultEquipment",
    defaultEquipID: string,
    listID: string,
    equipmentID: string,
    description: string,
    totalRequired: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    defaultEquipmentListsDefaultEquipmentDefaultListID: string,
  } | null,
};
