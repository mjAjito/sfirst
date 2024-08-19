import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Role {
  ADMIN = "ADMIN",
  TEAMLEAD = "TEAMLEAD",
  EMPLOYEE = "EMPLOYEE"
}

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
  WATER_FILLED_BARRELS = "WATER_FILLED_BARRELS"
}

export enum JobStage {
  PLANNED = "PLANNED",
  INPROGRESS = "INPROGRESS",
  COMPLETE = "COMPLETE"
}

export enum FluidLevel {
  LOW = "LOW",
  NORMAL = "NORMAL",
  OVER = "OVER"
}

export enum CompCondition {
  GOOD = "GOOD",
  REPLACE = "REPLACE"
}

export enum ListType {
  TAILGATE = "TAILGATE",
  TEARDOWN = "TEARDOWN"
}

export enum PicType {
  INITIAL = "INITIAL",
  CHECKIN = "CHECKIN"
}



type EagerEmployee = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Employee, 'empID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly empID: string;
  readonly firstName: string;
  readonly middleInitial?: string | null;
  readonly lastName: string;
  readonly suffix?: string | null;
  readonly role: Role | keyof typeof Role;
  readonly email: string;
  readonly phone: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly photo?: string | null;
  readonly gender?: string | null;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Employee, 'empID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly empID: string;
  readonly firstName: string;
  readonly middleInitial?: string | null;
  readonly lastName: string;
  readonly suffix?: string | null;
  readonly role: Role | keyof typeof Role;
  readonly email: string;
  readonly phone: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly photo?: string | null;
  readonly gender?: string | null;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

type EagerEquipment = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Equipment, 'equipID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly equipID: string;
  readonly serialNumber?: string | null;
  readonly description: string;
  readonly location?: string | null;
  readonly equipPhoto?: string | null;
  readonly totalNumber: number;
  readonly rentalRateDay: number;
  readonly rentalRateWeek: number;
  readonly rentalRateMonth: number;
  readonly purchasePrice: number;
  readonly availableNumber: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipment = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Equipment, 'equipID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly equipID: string;
  readonly serialNumber?: string | null;
  readonly description: string;
  readonly location?: string | null;
  readonly equipPhoto?: string | null;
  readonly totalNumber: number;
  readonly rentalRateDay: number;
  readonly rentalRateWeek: number;
  readonly rentalRateMonth: number;
  readonly purchasePrice: number;
  readonly availableNumber: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipment = LazyLoading extends LazyLoadingDisabled ? EagerEquipment : LazyEquipment

export declare const Equipment: (new (init: ModelInit<Equipment>) => Equipment) & {
  copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment>) => MutableModel<Equipment> | void): Equipment;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Customer, 'customerID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customerID: string;
  readonly companyName: string;
  readonly contactFirstName: string;
  readonly contactLastName: string;
  readonly email: string;
  readonly phone: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Customer, 'customerID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly customerID: string;
  readonly companyName: string;
  readonly contactFirstName: string;
  readonly contactLastName: string;
  readonly email: string;
  readonly phone: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Project, 'projectID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly projectID: string;
  readonly jobName: string;
  readonly companyName: string;
  readonly description: string;
  readonly jobDate: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly teamLead: string;
  readonly trafficControlDiagram: string;
  readonly jobType: JobType | keyof typeof JobType;
  readonly jobLatitude: number;
  readonly jobLongitude: number;
  readonly expectedSetupTime: number;
  readonly jobSetupComplete?: string | null;
  readonly jobStage: JobStage | keyof typeof JobStage;
  readonly jobPercentComplete: number;
  readonly teamLeftHQ?: string | null;
  readonly teamArrivedAtSite?: string | null;
  readonly teamArrivedAtOffice?: string | null;
  readonly projectTeam: ProjectTeam[];
  readonly equipmentList: EquipmentList[];
  readonly jobSitePics: JobSitePics[];
  readonly teamLeadSurvey: TeamLeadSurvey[];
  readonly preTripChecklist: PreTripCheckList[];
  readonly checklists: CheckLists[];
  readonly hourlyCheckins: HourlyCheckins[];
  readonly contract: Contract[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Project, 'projectID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly projectID: string;
  readonly jobName: string;
  readonly companyName: string;
  readonly description: string;
  readonly jobDate: string;
  readonly address1: string;
  readonly address2?: string | null;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly teamLead: string;
  readonly trafficControlDiagram: string;
  readonly jobType: JobType | keyof typeof JobType;
  readonly jobLatitude: number;
  readonly jobLongitude: number;
  readonly expectedSetupTime: number;
  readonly jobSetupComplete?: string | null;
  readonly jobStage: JobStage | keyof typeof JobStage;
  readonly jobPercentComplete: number;
  readonly teamLeftHQ?: string | null;
  readonly teamArrivedAtSite?: string | null;
  readonly teamArrivedAtOffice?: string | null;
  readonly projectTeam: AsyncCollection<ProjectTeam>;
  readonly equipmentList: AsyncCollection<EquipmentList>;
  readonly jobSitePics: AsyncCollection<JobSitePics>;
  readonly teamLeadSurvey: AsyncCollection<TeamLeadSurvey>;
  readonly preTripChecklist: AsyncCollection<PreTripCheckList>;
  readonly checklists: AsyncCollection<CheckLists>;
  readonly hourlyCheckins: AsyncCollection<HourlyCheckins>;
  readonly contract: AsyncCollection<Contract>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerProjectTeam = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<ProjectTeam, 'teamMemberID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly teamMemberID: string;
  readonly projectID: string;
  readonly empID: string;
  readonly name: string;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectProjectTeamProjectID?: string | null;
}

type LazyProjectTeam = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<ProjectTeam, 'teamMemberID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly teamMemberID: string;
  readonly projectID: string;
  readonly empID: string;
  readonly name: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectProjectTeamProjectID?: string | null;
}

export declare type ProjectTeam = LazyLoading extends LazyLoadingDisabled ? EagerProjectTeam : LazyProjectTeam

export declare const ProjectTeam: (new (init: ModelInit<ProjectTeam>) => ProjectTeam) & {
  copyOf(source: ProjectTeam, mutator: (draft: MutableModel<ProjectTeam>) => MutableModel<ProjectTeam> | void): ProjectTeam;
}

type EagerEquipmentList = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<EquipmentList, 'equipListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly equipListID: string;
  readonly projectID: string;
  readonly equipID: string;
  readonly description: string;
  readonly quantity: number;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectEquipmentListProjectID?: string | null;
}

type LazyEquipmentList = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<EquipmentList, 'equipListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly equipListID: string;
  readonly projectID: string;
  readonly equipID: string;
  readonly description: string;
  readonly quantity: number;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectEquipmentListProjectID?: string | null;
}

export declare type EquipmentList = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentList : LazyEquipmentList

export declare const EquipmentList: (new (init: ModelInit<EquipmentList>) => EquipmentList) & {
  copyOf(source: EquipmentList, mutator: (draft: MutableModel<EquipmentList>) => MutableModel<EquipmentList> | void): EquipmentList;
}

type EagerPreTripCheckList = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<PreTripCheckList, 'preCheckListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly preCheckListID: string;
  readonly projectID: string;
  readonly truckNum: string;
  readonly registrationAvailable: boolean;
  readonly registrationExpDate: string;
  readonly stickerOnPlate: boolean;
  readonly insuranceCard: boolean;
  readonly insuranceExpDate: string;
  readonly oilLevel: FluidLevel | keyof typeof FluidLevel;
  readonly oilLife: number;
  readonly coolantLevel: FluidLevel | keyof typeof FluidLevel;
  readonly transmissionLevel: FluidLevel | keyof typeof FluidLevel;
  readonly wiperBlades: CompCondition | keyof typeof CompCondition;
  readonly lights: CompCondition | keyof typeof CompCondition;
  readonly lightReplacement?: string | null;
  readonly tires: CompCondition | keyof typeof CompCondition;
  readonly tireReplacement?: string | null;
  readonly bodyCondition?: string | null;
  readonly completedTS: string;
  readonly completedBy: string;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectPreTripChecklistProjectID?: string | null;
}

type LazyPreTripCheckList = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<PreTripCheckList, 'preCheckListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly preCheckListID: string;
  readonly projectID: string;
  readonly truckNum: string;
  readonly registrationAvailable: boolean;
  readonly registrationExpDate: string;
  readonly stickerOnPlate: boolean;
  readonly insuranceCard: boolean;
  readonly insuranceExpDate: string;
  readonly oilLevel: FluidLevel | keyof typeof FluidLevel;
  readonly oilLife: number;
  readonly coolantLevel: FluidLevel | keyof typeof FluidLevel;
  readonly transmissionLevel: FluidLevel | keyof typeof FluidLevel;
  readonly wiperBlades: CompCondition | keyof typeof CompCondition;
  readonly lights: CompCondition | keyof typeof CompCondition;
  readonly lightReplacement?: string | null;
  readonly tires: CompCondition | keyof typeof CompCondition;
  readonly tireReplacement?: string | null;
  readonly bodyCondition?: string | null;
  readonly completedTS: string;
  readonly completedBy: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectPreTripChecklistProjectID?: string | null;
}

export declare type PreTripCheckList = LazyLoading extends LazyLoadingDisabled ? EagerPreTripCheckList : LazyPreTripCheckList

export declare const PreTripCheckList: (new (init: ModelInit<PreTripCheckList>) => PreTripCheckList) & {
  copyOf(source: PreTripCheckList, mutator: (draft: MutableModel<PreTripCheckList>) => MutableModel<PreTripCheckList> | void): PreTripCheckList;
}

type EagerCheckLists = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<CheckLists, 'checkListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly checkListID: string;
  readonly projectID: string;
  readonly listType: ListType | keyof typeof ListType;
  readonly taskDescription: string;
  readonly completedTS: string;
  readonly completedBy: string;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectChecklistsProjectID?: string | null;
}

type LazyCheckLists = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<CheckLists, 'checkListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly checkListID: string;
  readonly projectID: string;
  readonly listType: ListType | keyof typeof ListType;
  readonly taskDescription: string;
  readonly completedTS: string;
  readonly completedBy: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectChecklistsProjectID?: string | null;
}

export declare type CheckLists = LazyLoading extends LazyLoadingDisabled ? EagerCheckLists : LazyCheckLists

export declare const CheckLists: (new (init: ModelInit<CheckLists>) => CheckLists) & {
  copyOf(source: CheckLists, mutator: (draft: MutableModel<CheckLists>) => MutableModel<CheckLists> | void): CheckLists;
}

type EagerHourlyCheckins = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<HourlyCheckins, 'checkinID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly checkinID: string;
  readonly projectID: string;
  readonly checkinTimeActual: string;
  readonly equipmentCheck: string;
  readonly employeeCheck: string;
  readonly customerCheck: string;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectHourlyCheckinsProjectID?: string | null;
}

type LazyHourlyCheckins = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<HourlyCheckins, 'checkinID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly checkinID: string;
  readonly projectID: string;
  readonly checkinTimeActual: string;
  readonly equipmentCheck: string;
  readonly employeeCheck: string;
  readonly customerCheck: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectHourlyCheckinsProjectID?: string | null;
}

export declare type HourlyCheckins = LazyLoading extends LazyLoadingDisabled ? EagerHourlyCheckins : LazyHourlyCheckins

export declare const HourlyCheckins: (new (init: ModelInit<HourlyCheckins>) => HourlyCheckins) & {
  copyOf(source: HourlyCheckins, mutator: (draft: MutableModel<HourlyCheckins>) => MutableModel<HourlyCheckins> | void): HourlyCheckins;
}

type EagerJobSitePics = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<JobSitePics, 'picID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly picID: string;
  readonly projectID: string;
  readonly picTime: string;
  readonly picPath: string;
  readonly picType: PicType | keyof typeof PicType;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectJobSitePicsProjectID?: string | null;
}

type LazyJobSitePics = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<JobSitePics, 'picID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly picID: string;
  readonly projectID: string;
  readonly picTime: string;
  readonly picPath: string;
  readonly picType: PicType | keyof typeof PicType;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectJobSitePicsProjectID?: string | null;
}

export declare type JobSitePics = LazyLoading extends LazyLoadingDisabled ? EagerJobSitePics : LazyJobSitePics

export declare const JobSitePics: (new (init: ModelInit<JobSitePics>) => JobSitePics) & {
  copyOf(source: JobSitePics, mutator: (draft: MutableModel<JobSitePics>) => MutableModel<JobSitePics> | void): JobSitePics;
}

type EagerTeamLeadSurvey = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<TeamLeadSurvey, 'surveyID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly surveyID: string;
  readonly projectID: string;
  readonly surveyTime: string;
  readonly equipDamage: boolean;
  readonly equipDamageDesc: string;
  readonly perfRating: number;
  readonly perfRatingDesc: string;
  readonly training: boolean;
  readonly trainingDesc: string;
  readonly officeNotification: boolean;
  readonly officeNotificationDesc?: string | null;
  readonly project?: Project | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectTeamLeadSurveyProjectID?: string | null;
}

type LazyTeamLeadSurvey = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<TeamLeadSurvey, 'surveyID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly surveyID: string;
  readonly projectID: string;
  readonly surveyTime: string;
  readonly equipDamage: boolean;
  readonly equipDamageDesc: string;
  readonly perfRating: number;
  readonly perfRatingDesc: string;
  readonly training: boolean;
  readonly trainingDesc: string;
  readonly officeNotification: boolean;
  readonly officeNotificationDesc?: string | null;
  readonly project: AsyncItem<Project | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectTeamLeadSurveyProjectID?: string | null;
}

export declare type TeamLeadSurvey = LazyLoading extends LazyLoadingDisabled ? EagerTeamLeadSurvey : LazyTeamLeadSurvey

export declare const TeamLeadSurvey: (new (init: ModelInit<TeamLeadSurvey>) => TeamLeadSurvey) & {
  copyOf(source: TeamLeadSurvey, mutator: (draft: MutableModel<TeamLeadSurvey>) => MutableModel<TeamLeadSurvey> | void): TeamLeadSurvey;
}

type EagerContract = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Contract, 'contractID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly contractID: string;
  readonly projectID: string;
  readonly signedTime: string;
  readonly lastUpdateTime: string;
  readonly office?: string | null;
  readonly taxCode?: string | null;
  readonly minimumBilling?: number | null;
  readonly sAndE?: string | null;
  readonly workOrder?: number | null;
  readonly callerName: string;
  readonly cod: boolean;
  readonly charge: string;
  readonly poNumber?: string | null;
  readonly serviceDate: string;
  readonly project?: Project | null;
  readonly leasedItems: LeasedItems[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectContractProjectID?: string | null;
}

type LazyContract = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Contract, 'contractID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly contractID: string;
  readonly projectID: string;
  readonly signedTime: string;
  readonly lastUpdateTime: string;
  readonly office?: string | null;
  readonly taxCode?: string | null;
  readonly minimumBilling?: number | null;
  readonly sAndE?: string | null;
  readonly workOrder?: number | null;
  readonly callerName: string;
  readonly cod: boolean;
  readonly charge: string;
  readonly poNumber?: string | null;
  readonly serviceDate: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly leasedItems: AsyncCollection<LeasedItems>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectContractProjectID?: string | null;
}

export declare type Contract = LazyLoading extends LazyLoadingDisabled ? EagerContract : LazyContract

export declare const Contract: (new (init: ModelInit<Contract>) => Contract) & {
  copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

type EagerLeasedItems = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<LeasedItems, 'itemID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly itemID: string;
  readonly contractID: string;
  readonly equipmentID: string;
  readonly count: number;
  readonly description: string;
  readonly prevBalance: number;
  readonly newBalance: number;
  readonly unitRate: number;
  readonly rentalTime: number;
  readonly lesseeAgent: string;
  readonly lessorAgent: string;
  readonly customerEmail: string;
  readonly equipmentLocation: string;
  readonly contract?: Contract | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contractLeasedItemsContractID?: string | null;
}

type LazyLeasedItems = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<LeasedItems, 'itemID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly itemID: string;
  readonly contractID: string;
  readonly equipmentID: string;
  readonly count: number;
  readonly description: string;
  readonly prevBalance: number;
  readonly newBalance: number;
  readonly unitRate: number;
  readonly rentalTime: number;
  readonly lesseeAgent: string;
  readonly lessorAgent: string;
  readonly customerEmail: string;
  readonly equipmentLocation: string;
  readonly contract: AsyncItem<Contract | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly contractLeasedItemsContractID?: string | null;
}

export declare type LeasedItems = LazyLoading extends LazyLoadingDisabled ? EagerLeasedItems : LazyLeasedItems

export declare const LeasedItems: (new (init: ModelInit<LeasedItems>) => LeasedItems) & {
  copyOf(source: LeasedItems, mutator: (draft: MutableModel<LeasedItems>) => MutableModel<LeasedItems> | void): LeasedItems;
}

type EagerQuotes = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Quotes, 'quoteID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly quoteID: string;
  readonly quoteText: string;
  readonly quoteAttributed: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuotes = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Quotes, 'quoteID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly quoteID: string;
  readonly quoteText: string;
  readonly quoteAttributed: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Quotes = LazyLoading extends LazyLoadingDisabled ? EagerQuotes : LazyQuotes

export declare const Quotes: (new (init: ModelInit<Quotes>) => Quotes) & {
  copyOf(source: Quotes, mutator: (draft: MutableModel<Quotes>) => MutableModel<Quotes> | void): Quotes;
}

type EagerDefaultEquipmentLists = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<DefaultEquipmentLists, 'defaultListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly defaultListID: string;
  readonly jobName: string;
  readonly setupTime?: number | null;
  readonly defaultEquipment: DefaultEquipment[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDefaultEquipmentLists = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<DefaultEquipmentLists, 'defaultListID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly defaultListID: string;
  readonly jobName: string;
  readonly setupTime?: number | null;
  readonly defaultEquipment: AsyncCollection<DefaultEquipment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DefaultEquipmentLists = LazyLoading extends LazyLoadingDisabled ? EagerDefaultEquipmentLists : LazyDefaultEquipmentLists

export declare const DefaultEquipmentLists: (new (init: ModelInit<DefaultEquipmentLists>) => DefaultEquipmentLists) & {
  copyOf(source: DefaultEquipmentLists, mutator: (draft: MutableModel<DefaultEquipmentLists>) => MutableModel<DefaultEquipmentLists> | void): DefaultEquipmentLists;
}

type EagerDefaultEquipment = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<DefaultEquipment, 'defaultEquipID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly defaultEquipID: string;
  readonly listID: string;
  readonly equipmentID: string;
  readonly description: string;
  readonly totalRequired: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly defaultEquipmentListsDefaultEquipmentDefaultListID?: string | null;
}

type LazyDefaultEquipment = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<DefaultEquipment, 'defaultEquipID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly defaultEquipID: string;
  readonly listID: string;
  readonly equipmentID: string;
  readonly description: string;
  readonly totalRequired: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly defaultEquipmentListsDefaultEquipmentDefaultListID?: string | null;
}

export declare type DefaultEquipment = LazyLoading extends LazyLoadingDisabled ? EagerDefaultEquipment : LazyDefaultEquipment

export declare const DefaultEquipment: (new (init: ModelInit<DefaultEquipment>) => DefaultEquipment) & {
  copyOf(source: DefaultEquipment, mutator: (draft: MutableModel<DefaultEquipment>) => MutableModel<DefaultEquipment> | void): DefaultEquipment;
}