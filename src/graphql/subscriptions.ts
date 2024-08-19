/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../data/src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEmployee = /* GraphQL */ `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
  onCreateEmployee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEmployeeSubscriptionVariables,
  APITypes.OnCreateEmployeeSubscription
>;
export const onUpdateEmployee = /* GraphQL */ `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
  onUpdateEmployee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEmployeeSubscriptionVariables,
  APITypes.OnUpdateEmployeeSubscription
>;
export const onDeleteEmployee = /* GraphQL */ `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
  onDeleteEmployee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEmployeeSubscriptionVariables,
  APITypes.OnDeleteEmployeeSubscription
>;
export const onCreateEquipment = /* GraphQL */ `subscription OnCreateEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
  onCreateEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEquipmentSubscriptionVariables,
  APITypes.OnCreateEquipmentSubscription
>;
export const onUpdateEquipment = /* GraphQL */ `subscription OnUpdateEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
  onUpdateEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEquipmentSubscriptionVariables,
  APITypes.OnUpdateEquipmentSubscription
>;
export const onDeleteEquipment = /* GraphQL */ `subscription OnDeleteEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
  onDeleteEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEquipmentSubscriptionVariables,
  APITypes.OnDeleteEquipmentSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
  onCreateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
  onUpdateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
  onDeleteProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateProjectTeam = /* GraphQL */ `subscription OnCreateProjectTeam(
  $filter: ModelSubscriptionProjectTeamFilterInput
) {
  onCreateProjectTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectTeamSubscriptionVariables,
  APITypes.OnCreateProjectTeamSubscription
>;
export const onUpdateProjectTeam = /* GraphQL */ `subscription OnUpdateProjectTeam(
  $filter: ModelSubscriptionProjectTeamFilterInput
) {
  onUpdateProjectTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectTeamSubscriptionVariables,
  APITypes.OnUpdateProjectTeamSubscription
>;
export const onDeleteProjectTeam = /* GraphQL */ `subscription OnDeleteProjectTeam(
  $filter: ModelSubscriptionProjectTeamFilterInput
) {
  onDeleteProjectTeam(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectTeamSubscriptionVariables,
  APITypes.OnDeleteProjectTeamSubscription
>;
export const onCreateEquipmentList = /* GraphQL */ `subscription OnCreateEquipmentList(
  $filter: ModelSubscriptionEquipmentListFilterInput
) {
  onCreateEquipmentList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEquipmentListSubscriptionVariables,
  APITypes.OnCreateEquipmentListSubscription
>;
export const onUpdateEquipmentList = /* GraphQL */ `subscription OnUpdateEquipmentList(
  $filter: ModelSubscriptionEquipmentListFilterInput
) {
  onUpdateEquipmentList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEquipmentListSubscriptionVariables,
  APITypes.OnUpdateEquipmentListSubscription
>;
export const onDeleteEquipmentList = /* GraphQL */ `subscription OnDeleteEquipmentList(
  $filter: ModelSubscriptionEquipmentListFilterInput
) {
  onDeleteEquipmentList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEquipmentListSubscriptionVariables,
  APITypes.OnDeleteEquipmentListSubscription
>;
export const onCreatePreTripCheckList = /* GraphQL */ `subscription OnCreatePreTripCheckList(
  $filter: ModelSubscriptionPreTripCheckListFilterInput
) {
  onCreatePreTripCheckList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePreTripCheckListSubscriptionVariables,
  APITypes.OnCreatePreTripCheckListSubscription
>;
export const onUpdatePreTripCheckList = /* GraphQL */ `subscription OnUpdatePreTripCheckList(
  $filter: ModelSubscriptionPreTripCheckListFilterInput
) {
  onUpdatePreTripCheckList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePreTripCheckListSubscriptionVariables,
  APITypes.OnUpdatePreTripCheckListSubscription
>;
export const onDeletePreTripCheckList = /* GraphQL */ `subscription OnDeletePreTripCheckList(
  $filter: ModelSubscriptionPreTripCheckListFilterInput
) {
  onDeletePreTripCheckList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePreTripCheckListSubscriptionVariables,
  APITypes.OnDeletePreTripCheckListSubscription
>;
export const onCreateCheckLists = /* GraphQL */ `subscription OnCreateCheckLists(
  $filter: ModelSubscriptionCheckListsFilterInput
) {
  onCreateCheckLists(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckListsSubscriptionVariables,
  APITypes.OnCreateCheckListsSubscription
>;
export const onUpdateCheckLists = /* GraphQL */ `subscription OnUpdateCheckLists(
  $filter: ModelSubscriptionCheckListsFilterInput
) {
  onUpdateCheckLists(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckListsSubscriptionVariables,
  APITypes.OnUpdateCheckListsSubscription
>;
export const onDeleteCheckLists = /* GraphQL */ `subscription OnDeleteCheckLists(
  $filter: ModelSubscriptionCheckListsFilterInput
) {
  onDeleteCheckLists(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckListsSubscriptionVariables,
  APITypes.OnDeleteCheckListsSubscription
>;
export const onCreateHourlyCheckins = /* GraphQL */ `subscription OnCreateHourlyCheckins(
  $filter: ModelSubscriptionHourlyCheckinsFilterInput
) {
  onCreateHourlyCheckins(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHourlyCheckinsSubscriptionVariables,
  APITypes.OnCreateHourlyCheckinsSubscription
>;
export const onUpdateHourlyCheckins = /* GraphQL */ `subscription OnUpdateHourlyCheckins(
  $filter: ModelSubscriptionHourlyCheckinsFilterInput
) {
  onUpdateHourlyCheckins(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHourlyCheckinsSubscriptionVariables,
  APITypes.OnUpdateHourlyCheckinsSubscription
>;
export const onDeleteHourlyCheckins = /* GraphQL */ `subscription OnDeleteHourlyCheckins(
  $filter: ModelSubscriptionHourlyCheckinsFilterInput
) {
  onDeleteHourlyCheckins(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHourlyCheckinsSubscriptionVariables,
  APITypes.OnDeleteHourlyCheckinsSubscription
>;
export const onCreateJobSitePics = /* GraphQL */ `subscription OnCreateJobSitePics(
  $filter: ModelSubscriptionJobSitePicsFilterInput
) {
  onCreateJobSitePics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobSitePicsSubscriptionVariables,
  APITypes.OnCreateJobSitePicsSubscription
>;
export const onUpdateJobSitePics = /* GraphQL */ `subscription OnUpdateJobSitePics(
  $filter: ModelSubscriptionJobSitePicsFilterInput
) {
  onUpdateJobSitePics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobSitePicsSubscriptionVariables,
  APITypes.OnUpdateJobSitePicsSubscription
>;
export const onDeleteJobSitePics = /* GraphQL */ `subscription OnDeleteJobSitePics(
  $filter: ModelSubscriptionJobSitePicsFilterInput
) {
  onDeleteJobSitePics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobSitePicsSubscriptionVariables,
  APITypes.OnDeleteJobSitePicsSubscription
>;
export const onCreateTeamLeadSurvey = /* GraphQL */ `subscription OnCreateTeamLeadSurvey(
  $filter: ModelSubscriptionTeamLeadSurveyFilterInput
) {
  onCreateTeamLeadSurvey(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeamLeadSurveySubscriptionVariables,
  APITypes.OnCreateTeamLeadSurveySubscription
>;
export const onUpdateTeamLeadSurvey = /* GraphQL */ `subscription OnUpdateTeamLeadSurvey(
  $filter: ModelSubscriptionTeamLeadSurveyFilterInput
) {
  onUpdateTeamLeadSurvey(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeamLeadSurveySubscriptionVariables,
  APITypes.OnUpdateTeamLeadSurveySubscription
>;
export const onDeleteTeamLeadSurvey = /* GraphQL */ `subscription OnDeleteTeamLeadSurvey(
  $filter: ModelSubscriptionTeamLeadSurveyFilterInput
) {
  onDeleteTeamLeadSurvey(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeamLeadSurveySubscriptionVariables,
  APITypes.OnDeleteTeamLeadSurveySubscription
>;
export const onCreateContract = /* GraphQL */ `subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
  onCreateContract(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContractSubscriptionVariables,
  APITypes.OnCreateContractSubscription
>;
export const onUpdateContract = /* GraphQL */ `subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
  onUpdateContract(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContractSubscriptionVariables,
  APITypes.OnUpdateContractSubscription
>;
export const onDeleteContract = /* GraphQL */ `subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
  onDeleteContract(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContractSubscriptionVariables,
  APITypes.OnDeleteContractSubscription
>;
export const onCreateLeasedItems = /* GraphQL */ `subscription OnCreateLeasedItems(
  $filter: ModelSubscriptionLeasedItemsFilterInput
) {
  onCreateLeasedItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLeasedItemsSubscriptionVariables,
  APITypes.OnCreateLeasedItemsSubscription
>;
export const onUpdateLeasedItems = /* GraphQL */ `subscription OnUpdateLeasedItems(
  $filter: ModelSubscriptionLeasedItemsFilterInput
) {
  onUpdateLeasedItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLeasedItemsSubscriptionVariables,
  APITypes.OnUpdateLeasedItemsSubscription
>;
export const onDeleteLeasedItems = /* GraphQL */ `subscription OnDeleteLeasedItems(
  $filter: ModelSubscriptionLeasedItemsFilterInput
) {
  onDeleteLeasedItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLeasedItemsSubscriptionVariables,
  APITypes.OnDeleteLeasedItemsSubscription
>;
export const onCreateQuotes = /* GraphQL */ `subscription OnCreateQuotes($filter: ModelSubscriptionQuotesFilterInput) {
  onCreateQuotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuotesSubscriptionVariables,
  APITypes.OnCreateQuotesSubscription
>;
export const onUpdateQuotes = /* GraphQL */ `subscription OnUpdateQuotes($filter: ModelSubscriptionQuotesFilterInput) {
  onUpdateQuotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuotesSubscriptionVariables,
  APITypes.OnUpdateQuotesSubscription
>;
export const onDeleteQuotes = /* GraphQL */ `subscription OnDeleteQuotes($filter: ModelSubscriptionQuotesFilterInput) {
  onDeleteQuotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuotesSubscriptionVariables,
  APITypes.OnDeleteQuotesSubscription
>;
export const onCreateDefaultEquipmentLists = /* GraphQL */ `subscription OnCreateDefaultEquipmentLists(
  $filter: ModelSubscriptionDefaultEquipmentListsFilterInput
) {
  onCreateDefaultEquipmentLists(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDefaultEquipmentListsSubscriptionVariables,
  APITypes.OnCreateDefaultEquipmentListsSubscription
>;
export const onUpdateDefaultEquipmentLists = /* GraphQL */ `subscription OnUpdateDefaultEquipmentLists(
  $filter: ModelSubscriptionDefaultEquipmentListsFilterInput
) {
  onUpdateDefaultEquipmentLists(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDefaultEquipmentListsSubscriptionVariables,
  APITypes.OnUpdateDefaultEquipmentListsSubscription
>;
export const onDeleteDefaultEquipmentLists = /* GraphQL */ `subscription OnDeleteDefaultEquipmentLists(
  $filter: ModelSubscriptionDefaultEquipmentListsFilterInput
) {
  onDeleteDefaultEquipmentLists(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDefaultEquipmentListsSubscriptionVariables,
  APITypes.OnDeleteDefaultEquipmentListsSubscription
>;
export const onCreateDefaultEquipment = /* GraphQL */ `subscription OnCreateDefaultEquipment(
  $filter: ModelSubscriptionDefaultEquipmentFilterInput
) {
  onCreateDefaultEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDefaultEquipmentSubscriptionVariables,
  APITypes.OnCreateDefaultEquipmentSubscription
>;
export const onUpdateDefaultEquipment = /* GraphQL */ `subscription OnUpdateDefaultEquipment(
  $filter: ModelSubscriptionDefaultEquipmentFilterInput
) {
  onUpdateDefaultEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDefaultEquipmentSubscriptionVariables,
  APITypes.OnUpdateDefaultEquipmentSubscription
>;
export const onDeleteDefaultEquipment = /* GraphQL */ `subscription OnDeleteDefaultEquipment(
  $filter: ModelSubscriptionDefaultEquipmentFilterInput
) {
  onDeleteDefaultEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDefaultEquipmentSubscriptionVariables,
  APITypes.OnDeleteDefaultEquipmentSubscription
>;
