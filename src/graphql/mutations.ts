/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../data/src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createEmployee = /* GraphQL */ `mutation CreateEmployee(
  $input: CreateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  createEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEmployeeMutationVariables,
  APITypes.CreateEmployeeMutation
>;
export const updateEmployee = /* GraphQL */ `mutation UpdateEmployee(
  $input: UpdateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  updateEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEmployeeMutationVariables,
  APITypes.UpdateEmployeeMutation
>;
export const deleteEmployee = /* GraphQL */ `mutation DeleteEmployee(
  $input: DeleteEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  deleteEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEmployeeMutationVariables,
  APITypes.DeleteEmployeeMutation
>;
export const createEquipment = /* GraphQL */ `mutation CreateEquipment(
  $input: CreateEquipmentInput!
  $condition: ModelEquipmentConditionInput
) {
  createEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEquipmentMutationVariables,
  APITypes.CreateEquipmentMutation
>;
export const updateEquipment = /* GraphQL */ `mutation UpdateEquipment(
  $input: UpdateEquipmentInput!
  $condition: ModelEquipmentConditionInput
) {
  updateEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEquipmentMutationVariables,
  APITypes.UpdateEquipmentMutation
>;
export const deleteEquipment = /* GraphQL */ `mutation DeleteEquipment(
  $input: DeleteEquipmentInput!
  $condition: ModelEquipmentConditionInput
) {
  deleteEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEquipmentMutationVariables,
  APITypes.DeleteEquipmentMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
export const createProjectTeam = /* GraphQL */ `mutation CreateProjectTeam(
  $input: CreateProjectTeamInput!
  $condition: ModelProjectTeamConditionInput
) {
  createProjectTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectTeamMutationVariables,
  APITypes.CreateProjectTeamMutation
>;
export const updateProjectTeam = /* GraphQL */ `mutation UpdateProjectTeam(
  $input: UpdateProjectTeamInput!
  $condition: ModelProjectTeamConditionInput
) {
  updateProjectTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectTeamMutationVariables,
  APITypes.UpdateProjectTeamMutation
>;
export const deleteProjectTeam = /* GraphQL */ `mutation DeleteProjectTeam(
  $input: DeleteProjectTeamInput!
  $condition: ModelProjectTeamConditionInput
) {
  deleteProjectTeam(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectTeamMutationVariables,
  APITypes.DeleteProjectTeamMutation
>;
export const createEquipmentList = /* GraphQL */ `mutation CreateEquipmentList(
  $input: CreateEquipmentListInput!
  $condition: ModelEquipmentListConditionInput
) {
  createEquipmentList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEquipmentListMutationVariables,
  APITypes.CreateEquipmentListMutation
>;
export const updateEquipmentList = /* GraphQL */ `mutation UpdateEquipmentList(
  $input: UpdateEquipmentListInput!
  $condition: ModelEquipmentListConditionInput
) {
  updateEquipmentList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEquipmentListMutationVariables,
  APITypes.UpdateEquipmentListMutation
>;
export const deleteEquipmentList = /* GraphQL */ `mutation DeleteEquipmentList(
  $input: DeleteEquipmentListInput!
  $condition: ModelEquipmentListConditionInput
) {
  deleteEquipmentList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEquipmentListMutationVariables,
  APITypes.DeleteEquipmentListMutation
>;
export const createPreTripCheckList = /* GraphQL */ `mutation CreatePreTripCheckList(
  $input: CreatePreTripCheckListInput!
  $condition: ModelPreTripCheckListConditionInput
) {
  createPreTripCheckList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePreTripCheckListMutationVariables,
  APITypes.CreatePreTripCheckListMutation
>;
export const updatePreTripCheckList = /* GraphQL */ `mutation UpdatePreTripCheckList(
  $input: UpdatePreTripCheckListInput!
  $condition: ModelPreTripCheckListConditionInput
) {
  updatePreTripCheckList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePreTripCheckListMutationVariables,
  APITypes.UpdatePreTripCheckListMutation
>;
export const deletePreTripCheckList = /* GraphQL */ `mutation DeletePreTripCheckList(
  $input: DeletePreTripCheckListInput!
  $condition: ModelPreTripCheckListConditionInput
) {
  deletePreTripCheckList(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePreTripCheckListMutationVariables,
  APITypes.DeletePreTripCheckListMutation
>;
export const createCheckLists = /* GraphQL */ `mutation CreateCheckLists(
  $input: CreateCheckListsInput!
  $condition: ModelCheckListsConditionInput
) {
  createCheckLists(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCheckListsMutationVariables,
  APITypes.CreateCheckListsMutation
>;
export const updateCheckLists = /* GraphQL */ `mutation UpdateCheckLists(
  $input: UpdateCheckListsInput!
  $condition: ModelCheckListsConditionInput
) {
  updateCheckLists(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCheckListsMutationVariables,
  APITypes.UpdateCheckListsMutation
>;
export const deleteCheckLists = /* GraphQL */ `mutation DeleteCheckLists(
  $input: DeleteCheckListsInput!
  $condition: ModelCheckListsConditionInput
) {
  deleteCheckLists(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCheckListsMutationVariables,
  APITypes.DeleteCheckListsMutation
>;
export const createHourlyCheckins = /* GraphQL */ `mutation CreateHourlyCheckins(
  $input: CreateHourlyCheckinsInput!
  $condition: ModelHourlyCheckinsConditionInput
) {
  createHourlyCheckins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHourlyCheckinsMutationVariables,
  APITypes.CreateHourlyCheckinsMutation
>;
export const updateHourlyCheckins = /* GraphQL */ `mutation UpdateHourlyCheckins(
  $input: UpdateHourlyCheckinsInput!
  $condition: ModelHourlyCheckinsConditionInput
) {
  updateHourlyCheckins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHourlyCheckinsMutationVariables,
  APITypes.UpdateHourlyCheckinsMutation
>;
export const deleteHourlyCheckins = /* GraphQL */ `mutation DeleteHourlyCheckins(
  $input: DeleteHourlyCheckinsInput!
  $condition: ModelHourlyCheckinsConditionInput
) {
  deleteHourlyCheckins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHourlyCheckinsMutationVariables,
  APITypes.DeleteHourlyCheckinsMutation
>;
export const createJobSitePics = /* GraphQL */ `mutation CreateJobSitePics(
  $input: CreateJobSitePicsInput!
  $condition: ModelJobSitePicsConditionInput
) {
  createJobSitePics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateJobSitePicsMutationVariables,
  APITypes.CreateJobSitePicsMutation
>;
export const updateJobSitePics = /* GraphQL */ `mutation UpdateJobSitePics(
  $input: UpdateJobSitePicsInput!
  $condition: ModelJobSitePicsConditionInput
) {
  updateJobSitePics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateJobSitePicsMutationVariables,
  APITypes.UpdateJobSitePicsMutation
>;
export const deleteJobSitePics = /* GraphQL */ `mutation DeleteJobSitePics(
  $input: DeleteJobSitePicsInput!
  $condition: ModelJobSitePicsConditionInput
) {
  deleteJobSitePics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteJobSitePicsMutationVariables,
  APITypes.DeleteJobSitePicsMutation
>;
export const createTeamLeadSurvey = /* GraphQL */ `mutation CreateTeamLeadSurvey(
  $input: CreateTeamLeadSurveyInput!
  $condition: ModelTeamLeadSurveyConditionInput
) {
  createTeamLeadSurvey(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTeamLeadSurveyMutationVariables,
  APITypes.CreateTeamLeadSurveyMutation
>;
export const updateTeamLeadSurvey = /* GraphQL */ `mutation UpdateTeamLeadSurvey(
  $input: UpdateTeamLeadSurveyInput!
  $condition: ModelTeamLeadSurveyConditionInput
) {
  updateTeamLeadSurvey(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTeamLeadSurveyMutationVariables,
  APITypes.UpdateTeamLeadSurveyMutation
>;
export const deleteTeamLeadSurvey = /* GraphQL */ `mutation DeleteTeamLeadSurvey(
  $input: DeleteTeamLeadSurveyInput!
  $condition: ModelTeamLeadSurveyConditionInput
) {
  deleteTeamLeadSurvey(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTeamLeadSurveyMutationVariables,
  APITypes.DeleteTeamLeadSurveyMutation
>;
export const createContract = /* GraphQL */ `mutation CreateContract(
  $input: CreateContractInput!
  $condition: ModelContractConditionInput
) {
  createContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContractMutationVariables,
  APITypes.CreateContractMutation
>;
export const updateContract = /* GraphQL */ `mutation UpdateContract(
  $input: UpdateContractInput!
  $condition: ModelContractConditionInput
) {
  updateContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContractMutationVariables,
  APITypes.UpdateContractMutation
>;
export const deleteContract = /* GraphQL */ `mutation DeleteContract(
  $input: DeleteContractInput!
  $condition: ModelContractConditionInput
) {
  deleteContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContractMutationVariables,
  APITypes.DeleteContractMutation
>;
export const createLeasedItems = /* GraphQL */ `mutation CreateLeasedItems(
  $input: CreateLeasedItemsInput!
  $condition: ModelLeasedItemsConditionInput
) {
  createLeasedItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLeasedItemsMutationVariables,
  APITypes.CreateLeasedItemsMutation
>;
export const updateLeasedItems = /* GraphQL */ `mutation UpdateLeasedItems(
  $input: UpdateLeasedItemsInput!
  $condition: ModelLeasedItemsConditionInput
) {
  updateLeasedItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLeasedItemsMutationVariables,
  APITypes.UpdateLeasedItemsMutation
>;
export const deleteLeasedItems = /* GraphQL */ `mutation DeleteLeasedItems(
  $input: DeleteLeasedItemsInput!
  $condition: ModelLeasedItemsConditionInput
) {
  deleteLeasedItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLeasedItemsMutationVariables,
  APITypes.DeleteLeasedItemsMutation
>;
export const createQuotes = /* GraphQL */ `mutation CreateQuotes(
  $input: CreateQuotesInput!
  $condition: ModelQuotesConditionInput
) {
  createQuotes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateQuotesMutationVariables,
  APITypes.CreateQuotesMutation
>;
export const updateQuotes = /* GraphQL */ `mutation UpdateQuotes(
  $input: UpdateQuotesInput!
  $condition: ModelQuotesConditionInput
) {
  updateQuotes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateQuotesMutationVariables,
  APITypes.UpdateQuotesMutation
>;
export const deleteQuotes = /* GraphQL */ `mutation DeleteQuotes(
  $input: DeleteQuotesInput!
  $condition: ModelQuotesConditionInput
) {
  deleteQuotes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteQuotesMutationVariables,
  APITypes.DeleteQuotesMutation
>;
export const createDefaultEquipmentLists = /* GraphQL */ `mutation CreateDefaultEquipmentLists(
  $input: CreateDefaultEquipmentListsInput!
  $condition: ModelDefaultEquipmentListsConditionInput
) {
  createDefaultEquipmentLists(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDefaultEquipmentListsMutationVariables,
  APITypes.CreateDefaultEquipmentListsMutation
>;
export const updateDefaultEquipmentLists = /* GraphQL */ `mutation UpdateDefaultEquipmentLists(
  $input: UpdateDefaultEquipmentListsInput!
  $condition: ModelDefaultEquipmentListsConditionInput
) {
  updateDefaultEquipmentLists(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDefaultEquipmentListsMutationVariables,
  APITypes.UpdateDefaultEquipmentListsMutation
>;
export const deleteDefaultEquipmentLists = /* GraphQL */ `mutation DeleteDefaultEquipmentLists(
  $input: DeleteDefaultEquipmentListsInput!
  $condition: ModelDefaultEquipmentListsConditionInput
) {
  deleteDefaultEquipmentLists(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDefaultEquipmentListsMutationVariables,
  APITypes.DeleteDefaultEquipmentListsMutation
>;
export const createDefaultEquipment = /* GraphQL */ `mutation CreateDefaultEquipment(
  $input: CreateDefaultEquipmentInput!
  $condition: ModelDefaultEquipmentConditionInput
) {
  createDefaultEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDefaultEquipmentMutationVariables,
  APITypes.CreateDefaultEquipmentMutation
>;
export const updateDefaultEquipment = /* GraphQL */ `mutation UpdateDefaultEquipment(
  $input: UpdateDefaultEquipmentInput!
  $condition: ModelDefaultEquipmentConditionInput
) {
  updateDefaultEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDefaultEquipmentMutationVariables,
  APITypes.UpdateDefaultEquipmentMutation
>;
export const deleteDefaultEquipment = /* GraphQL */ `mutation DeleteDefaultEquipment(
  $input: DeleteDefaultEquipmentInput!
  $condition: ModelDefaultEquipmentConditionInput
) {
  deleteDefaultEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDefaultEquipmentMutationVariables,
  APITypes.DeleteDefaultEquipmentMutation
>;
