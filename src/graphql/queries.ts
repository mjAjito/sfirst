/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../data/src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getEmployee = /* GraphQL */ `query GetEmployee($empID: ID!) {
  getEmployee(empID: $empID) {
    empID
    firstName
    middleInitial
    lastName
    suffix
    role
    email
    phone
    address1
    address2
    city
    state
    zip
    photo
    gender
    active
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEmployeeQueryVariables,
  APITypes.GetEmployeeQuery
>;
export const listEmployees = /* GraphQL */ `query ListEmployees(
  $empID: ID
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEmployees(
    empID: $empID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      empID
      firstName
      middleInitial
      lastName
      suffix
      role
      email
      phone
      address1
      address2
      city
      state
      zip
      photo
      gender
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmployeesQueryVariables,
  APITypes.ListEmployeesQuery
>;
export const syncEmployees = /* GraphQL */ `query SyncEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEmployees(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      empID
      firstName
      middleInitial
      lastName
      suffix
      role
      email
      phone
      address1
      address2
      city
      state
      zip
      photo
      gender
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEmployeesQueryVariables,
  APITypes.SyncEmployeesQuery
>;
export const getEquipment = /* GraphQL */ `query GetEquipment($equipID: ID!) {
  getEquipment(equipID: $equipID) {
    equipID
    serialNumber
    description
    location
    equipPhoto
    totalNumber
    rentalRateDay
    rentalRateWeek
    rentalRateMonth
    purchasePrice
    availableNumer
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEquipmentQueryVariables,
  APITypes.GetEquipmentQuery
>;
export const listEquipment = /* GraphQL */ `query ListEquipment(
  $equipID: ID
  $filter: ModelEquipmentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEquipment(
    equipID: $equipID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      equipID
      serialNumber
      description
      location
      equipPhoto
      totalNumber
      rentalRateDay
      rentalRateWeek
      rentalRateMonth
      purchasePrice
      availableNumer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEquipmentQueryVariables,
  APITypes.ListEquipmentQuery
>;
export const syncEquipment = /* GraphQL */ `query SyncEquipment(
  $filter: ModelEquipmentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEquipment(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      equipID
      serialNumber
      description
      location
      equipPhoto
      totalNumber
      rentalRateDay
      rentalRateWeek
      rentalRateMonth
      purchasePrice
      availableNumer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEquipmentQueryVariables,
  APITypes.SyncEquipmentQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($customerID: ID!) {
  getCustomer(customerID: $customerID) {
    customerID
    companyName
    contactFirstName
    contactLastName
    email
    phone
    address1
    address2
    city
    state
    zip
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $customerID: ID
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCustomers(
    customerID: $customerID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      customerID
      companyName
      contactFirstName
      contactLastName
      email
      phone
      address1
      address2
      city
      state
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const syncCustomers = /* GraphQL */ `query SyncCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCustomers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      customerID
      companyName
      contactFirstName
      contactLastName
      email
      phone
      address1
      address2
      city
      state
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCustomersQueryVariables,
  APITypes.SyncCustomersQuery
>;
export const getProject = /* GraphQL */ `query GetProject($projectID: ID!) {
  getProject(projectID: $projectID) {
    projectID
    jobName
    companyName
    description
    jobDate
    address1
    address2
    city
    state
    zip
    teamLead
    trafficControlDiagram
    jobType
    jobLatitude
    jobLongitude
    expectedSetupTime
    jobSetupComplete
    jobStage
    jobPercentComplete
    teamLeftHQ
    teamArrivedAtSite
    teamArrivedAtOffice
    projectTeam {
      nextToken
      startedAt
      __typename
    }
    equipmentList {
      nextToken
      startedAt
      __typename
    }
    jobSitePics {
      nextToken
      startedAt
      __typename
    }
    teamLeadSurvey {
      nextToken
      startedAt
      __typename
    }
    preTripChecklist {
      nextToken
      startedAt
      __typename
    }
    checklists {
      nextToken
      startedAt
      __typename
    }
    hourlyCheckins {
      nextToken
      startedAt
      __typename
    }
    contract {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
  $projectID: ID
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjects(
    projectID: $projectID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
export const syncProjects = /* GraphQL */ `query SyncProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProjects(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProjectsQueryVariables,
  APITypes.SyncProjectsQuery
>;
export const getProjectTeam = /* GraphQL */ `query GetProjectTeam($teamMemberID: ID!) {
  getProjectTeam(teamMemberID: $teamMemberID) {
    teamMemberID
    projectID
    empID
    name
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectProjectTeamProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectTeamQueryVariables,
  APITypes.GetProjectTeamQuery
>;
export const listProjectTeams = /* GraphQL */ `query ListProjectTeams(
  $teamMemberID: ID
  $filter: ModelProjectTeamFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjectTeams(
    teamMemberID: $teamMemberID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      teamMemberID
      projectID
      empID
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectProjectTeamProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectTeamsQueryVariables,
  APITypes.ListProjectTeamsQuery
>;
export const syncProjectTeams = /* GraphQL */ `query SyncProjectTeams(
  $filter: ModelProjectTeamFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProjectTeams(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      teamMemberID
      projectID
      empID
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectProjectTeamProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProjectTeamsQueryVariables,
  APITypes.SyncProjectTeamsQuery
>;
export const getEquipmentList = /* GraphQL */ `query GetEquipmentList($equipListID: ID!) {
  getEquipmentList(equipListID: $equipListID) {
    equipListID
    projectID
    equipID
    description
    quantity
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectEquipmentListProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEquipmentListQueryVariables,
  APITypes.GetEquipmentListQuery
>;
export const listEquipmentLists = /* GraphQL */ `query ListEquipmentLists(
  $equipListID: ID
  $filter: ModelEquipmentListFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEquipmentLists(
    equipListID: $equipListID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      equipListID
      projectID
      equipID
      description
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectEquipmentListProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEquipmentListsQueryVariables,
  APITypes.ListEquipmentListsQuery
>;
export const syncEquipmentLists = /* GraphQL */ `query SyncEquipmentLists(
  $filter: ModelEquipmentListFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEquipmentLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      equipListID
      projectID
      equipID
      description
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectEquipmentListProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEquipmentListsQueryVariables,
  APITypes.SyncEquipmentListsQuery
>;
export const getPreTripCheckList = /* GraphQL */ `query GetPreTripCheckList($preCheckListID: ID!) {
  getPreTripCheckList(preCheckListID: $preCheckListID) {
    preCheckListID
    projectID
    truckNum
    registrationAvailable
    registrationExpDate
    stickerOnPlate
    insuranceCard
    insuranceExpDate
    oilLevel
    oilLife
    coolantLevel
    transmissionLevel
    wiperBlades
    lights
    lightReplacement
    tires
    timeReplacement
    bodyCondition
    completedTS
    completedBy
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectPreTripChecklistProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPreTripCheckListQueryVariables,
  APITypes.GetPreTripCheckListQuery
>;
export const listPreTripCheckLists = /* GraphQL */ `query ListPreTripCheckLists(
  $preCheckListID: ID
  $filter: ModelPreTripCheckListFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPreTripCheckLists(
    preCheckListID: $preCheckListID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      preCheckListID
      projectID
      truckNum
      registrationAvailable
      registrationExpDate
      stickerOnPlate
      insuranceCard
      insuranceExpDate
      oilLevel
      oilLife
      coolantLevel
      transmissionLevel
      wiperBlades
      lights
      lightReplacement
      tires
      timeReplacement
      bodyCondition
      completedTS
      completedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectPreTripChecklistProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPreTripCheckListsQueryVariables,
  APITypes.ListPreTripCheckListsQuery
>;
export const syncPreTripCheckLists = /* GraphQL */ `query SyncPreTripCheckLists(
  $filter: ModelPreTripCheckListFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPreTripCheckLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      preCheckListID
      projectID
      truckNum
      registrationAvailable
      registrationExpDate
      stickerOnPlate
      insuranceCard
      insuranceExpDate
      oilLevel
      oilLife
      coolantLevel
      transmissionLevel
      wiperBlades
      lights
      lightReplacement
      tires
      timeReplacement
      bodyCondition
      completedTS
      completedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectPreTripChecklistProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPreTripCheckListsQueryVariables,
  APITypes.SyncPreTripCheckListsQuery
>;
export const getCheckLists = /* GraphQL */ `query GetCheckLists($checkListID: ID!) {
  getCheckLists(checkListID: $checkListID) {
    checkListID
    projectID
    listType
    taskDescription
    completedTS
    completedBy
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectChecklistsProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCheckListsQueryVariables,
  APITypes.GetCheckListsQuery
>;
export const listCheckLists = /* GraphQL */ `query ListCheckLists(
  $checkListID: ID
  $filter: ModelCheckListsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCheckLists(
    checkListID: $checkListID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      checkListID
      projectID
      listType
      taskDescription
      completedTS
      completedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectChecklistsProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckListsQueryVariables,
  APITypes.ListCheckListsQuery
>;
export const syncCheckLists = /* GraphQL */ `query SyncCheckLists(
  $filter: ModelCheckListsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCheckLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      checkListID
      projectID
      listType
      taskDescription
      completedTS
      completedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectChecklistsProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCheckListsQueryVariables,
  APITypes.SyncCheckListsQuery
>;
export const getHourlyCheckins = /* GraphQL */ `query GetHourlyCheckins($checkinID: ID!) {
  getHourlyCheckins(checkinID: $checkinID) {
    checkinID
    projectID
    checkinTimeActual
    equipmentCheck
    employeeCheck
    customerCheck
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectHourlyCheckinsProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHourlyCheckinsQueryVariables,
  APITypes.GetHourlyCheckinsQuery
>;
export const listHourlyCheckins = /* GraphQL */ `query ListHourlyCheckins(
  $checkinID: ID
  $filter: ModelHourlyCheckinsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listHourlyCheckins(
    checkinID: $checkinID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      checkinID
      projectID
      checkinTimeActual
      equipmentCheck
      employeeCheck
      customerCheck
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectHourlyCheckinsProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHourlyCheckinsQueryVariables,
  APITypes.ListHourlyCheckinsQuery
>;
export const syncHourlyCheckins = /* GraphQL */ `query SyncHourlyCheckins(
  $filter: ModelHourlyCheckinsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncHourlyCheckins(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      checkinID
      projectID
      checkinTimeActual
      equipmentCheck
      employeeCheck
      customerCheck
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectHourlyCheckinsProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncHourlyCheckinsQueryVariables,
  APITypes.SyncHourlyCheckinsQuery
>;
export const getJobSitePics = /* GraphQL */ `query GetJobSitePics($picID: ID!) {
  getJobSitePics(picID: $picID) {
    picID
    projectID
    picTime
    picPath
    picType
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectJobSitePicsProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobSitePicsQueryVariables,
  APITypes.GetJobSitePicsQuery
>;
export const listJobSitePics = /* GraphQL */ `query ListJobSitePics(
  $picID: ID
  $filter: ModelJobSitePicsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listJobSitePics(
    picID: $picID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      picID
      projectID
      picTime
      picPath
      picType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectJobSitePicsProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobSitePicsQueryVariables,
  APITypes.ListJobSitePicsQuery
>;
export const syncJobSitePics = /* GraphQL */ `query SyncJobSitePics(
  $filter: ModelJobSitePicsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncJobSitePics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      picID
      projectID
      picTime
      picPath
      picType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectJobSitePicsProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncJobSitePicsQueryVariables,
  APITypes.SyncJobSitePicsQuery
>;
export const getTeamLeadSurvey = /* GraphQL */ `query GetTeamLeadSurvey($surveyID: ID!) {
  getTeamLeadSurvey(surveyID: $surveyID) {
    surveyID
    projectID
    surveyTime
    equipDamage
    equipDamageDesc
    perfRating
    perfRatingDesc
    training
    trainingDesc
    officeNotification
    officeNotificationDesc
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectTeamLeadSurveyProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTeamLeadSurveyQueryVariables,
  APITypes.GetTeamLeadSurveyQuery
>;
export const listTeamLeadSurveys = /* GraphQL */ `query ListTeamLeadSurveys(
  $surveyID: ID
  $filter: ModelTeamLeadSurveyFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTeamLeadSurveys(
    surveyID: $surveyID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      surveyID
      projectID
      surveyTime
      equipDamage
      equipDamageDesc
      perfRating
      perfRatingDesc
      training
      trainingDesc
      officeNotification
      officeNotificationDesc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTeamLeadSurveyProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeamLeadSurveysQueryVariables,
  APITypes.ListTeamLeadSurveysQuery
>;
export const syncTeamLeadSurveys = /* GraphQL */ `query SyncTeamLeadSurveys(
  $filter: ModelTeamLeadSurveyFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTeamLeadSurveys(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      surveyID
      projectID
      surveyTime
      equipDamage
      equipDamageDesc
      perfRating
      perfRatingDesc
      training
      trainingDesc
      officeNotification
      officeNotificationDesc
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTeamLeadSurveyProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTeamLeadSurveysQueryVariables,
  APITypes.SyncTeamLeadSurveysQuery
>;
export const getContract = /* GraphQL */ `query GetContract($contractID: ID!) {
  getContract(contractID: $contractID) {
    contractID
    projectID
    signedTime
    lastUpdateTime
    office
    sAndE
    workOrder
    callerName
    cod
    charge
    poNumber
    serviceDate
    project {
      projectID
      jobName
      companyName
      description
      jobDate
      address1
      address2
      city
      state
      zip
      teamLead
      trafficControlDiagram
      jobType
      jobLatitude
      jobLongitude
      expectedSetupTime
      jobSetupComplete
      jobStage
      jobPercentComplete
      teamLeftHQ
      teamArrivedAtSite
      teamArrivedAtOffice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    leasedItems {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    projectContractProjectID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContractQueryVariables,
  APITypes.GetContractQuery
>;
export const listContracts = /* GraphQL */ `query ListContracts(
  $contractID: ID
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listContracts(
    contractID: $contractID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      contractID
      projectID
      signedTime
      lastUpdateTime
      office
      sAndE
      workOrder
      callerName
      cod
      charge
      poNumber
      serviceDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectContractProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractsQueryVariables,
  APITypes.ListContractsQuery
>;
export const syncContracts = /* GraphQL */ `query SyncContracts(
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncContracts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      contractID
      projectID
      signedTime
      lastUpdateTime
      office
      sAndE
      workOrder
      callerName
      cod
      charge
      poNumber
      serviceDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectContractProjectID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncContractsQueryVariables,
  APITypes.SyncContractsQuery
>;
export const getLeasedItems = /* GraphQL */ `query GetLeasedItems($itemID: ID!) {
  getLeasedItems(itemID: $itemID) {
    itemID
    contractID
    equipmentID
    count
    description
    prevBalance
    newBalance
    unitRate
    lesseeAgent
    lessorAgent
    customerEmail
    equipmentLocation
    contract {
      contractID
      projectID
      signedTime
      lastUpdateTime
      office
      sAndE
      workOrder
      callerName
      cod
      charge
      poNumber
      serviceDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectContractProjectID
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    contractLeasedItemsContractID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLeasedItemsQueryVariables,
  APITypes.GetLeasedItemsQuery
>;
export const listLeasedItems = /* GraphQL */ `query ListLeasedItems(
  $itemID: ID
  $filter: ModelLeasedItemsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLeasedItems(
    itemID: $itemID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      itemID
      contractID
      equipmentID
      count
      description
      prevBalance
      newBalance
      unitRate
      lesseeAgent
      lessorAgent
      customerEmail
      equipmentLocation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contractLeasedItemsContractID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeasedItemsQueryVariables,
  APITypes.ListLeasedItemsQuery
>;
export const syncLeasedItems = /* GraphQL */ `query SyncLeasedItems(
  $filter: ModelLeasedItemsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLeasedItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      itemID
      contractID
      equipmentID
      count
      description
      prevBalance
      newBalance
      unitRate
      lesseeAgent
      lessorAgent
      customerEmail
      equipmentLocation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      contractLeasedItemsContractID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncLeasedItemsQueryVariables,
  APITypes.SyncLeasedItemsQuery
>;
export const getQuotes = /* GraphQL */ `query GetQuotes($quoteID: ID!) {
  getQuotes(quoteID: $quoteID) {
    quoteID
    quoteText
    quoteAttributed
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetQuotesQueryVariables, APITypes.GetQuotesQuery>;
export const listQuotes = /* GraphQL */ `query ListQuotes(
  $quoteID: ID
  $filter: ModelQuotesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listQuotes(
    quoteID: $quoteID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      quoteID
      quoteText
      quoteAttributed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuotesQueryVariables,
  APITypes.ListQuotesQuery
>;
export const syncQuotes = /* GraphQL */ `query SyncQuotes(
  $filter: ModelQuotesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncQuotes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      quoteID
      quoteText
      quoteAttributed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncQuotesQueryVariables,
  APITypes.SyncQuotesQuery
>;
export const getDefaultEquipmentLists = /* GraphQL */ `query GetDefaultEquipmentLists($defaultListID: ID!) {
  getDefaultEquipmentLists(defaultListID: $defaultListID) {
    defaultListID
    jobName
    setupTime
    defaultEquipment {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDefaultEquipmentListsQueryVariables,
  APITypes.GetDefaultEquipmentListsQuery
>;
export const listDefaultEquipmentLists = /* GraphQL */ `query ListDefaultEquipmentLists(
  $defaultListID: ID
  $filter: ModelDefaultEquipmentListsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDefaultEquipmentLists(
    defaultListID: $defaultListID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      defaultListID
      jobName
      setupTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDefaultEquipmentListsQueryVariables,
  APITypes.ListDefaultEquipmentListsQuery
>;
export const syncDefaultEquipmentLists = /* GraphQL */ `query SyncDefaultEquipmentLists(
  $filter: ModelDefaultEquipmentListsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDefaultEquipmentLists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      defaultListID
      jobName
      setupTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDefaultEquipmentListsQueryVariables,
  APITypes.SyncDefaultEquipmentListsQuery
>;
export const getDefaultEquipment = /* GraphQL */ `query GetDefaultEquipment($defaultEquipID: ID!) {
  getDefaultEquipment(defaultEquipID: $defaultEquipID) {
    defaultEquipID
    listID
    equipmentID
    description
    totalRequired
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    defaultEquipmentListsDefaultEquipmentDefaultListID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDefaultEquipmentQueryVariables,
  APITypes.GetDefaultEquipmentQuery
>;
export const listDefaultEquipments = /* GraphQL */ `query ListDefaultEquipments(
  $defaultEquipID: ID
  $filter: ModelDefaultEquipmentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDefaultEquipments(
    defaultEquipID: $defaultEquipID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      defaultEquipID
      listID
      equipmentID
      description
      totalRequired
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      defaultEquipmentListsDefaultEquipmentDefaultListID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDefaultEquipmentsQueryVariables,
  APITypes.ListDefaultEquipmentsQuery
>;
export const syncDefaultEquipments = /* GraphQL */ `query SyncDefaultEquipments(
  $filter: ModelDefaultEquipmentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDefaultEquipments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      defaultEquipID
      listID
      equipmentID
      description
      totalRequired
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      defaultEquipmentListsDefaultEquipmentDefaultListID
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDefaultEquipmentsQueryVariables,
  APITypes.SyncDefaultEquipmentsQuery
>;
