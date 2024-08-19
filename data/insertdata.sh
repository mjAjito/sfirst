#!/bin/bash

echo "Run from the Data directory"

echo "Real Data:"

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Employee.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Employee.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Employee.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Equipment.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Equipment.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Equipment.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Equipment2.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Equipment2.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Equipment2.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Equipment3.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Equipment3.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Equipment3.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://DefaultEquipmentLists.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://DefaultEquipmentLists.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://DefaultEquipmentLists.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment1.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment1.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment1.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment2.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment2.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment2.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment3.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment3.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment3.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment4.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment4.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment4.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment5.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment5.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://DefaultEquipment5.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Quotes.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Quotes.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Quotes.json --profile mjAdmin'"
    exit 1
fi

echo "Sample Data:"

echo "Running: aws dynamodb batch-write-item --cli-input-json file://CheckLists.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://CheckLists.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://CheckLists.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://PreTripCheckLists.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://PreTripCheckLists.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://PreTripCheckLists.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Customer.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Customer.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Customer.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://LeasedItems.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://LeasedItems.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://LeasedItems.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Contract.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Contract.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Contract.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://TeamLeadSurvey.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://TeamLeadSurvey.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://TeamLeadSurvey.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://JobSitePics.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://JobSitePics.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://JobSitePics.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://HourlyCheckins.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://HourlyCheckins.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://HourlyCheckins.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://EquipmentList.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://EquipmentList.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://EquipmentList.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://ProjectTeam.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://ProjectTeam.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://ProjectTeam.json --profile mjAdmin'"
    exit 1
fi

echo "Running: aws dynamodb batch-write-item --cli-input-json file://Project.json --profile mjAdmin"
aws dynamodb batch-write-item --cli-input-json file://Project.json --profile mjAdmin
if [ $? -ne 0 ]; then
    echo "Error: Failed to run 'aws dynamodb batch-write-item --cli-input-json file://Project.json --profile mjAdmin'"
    exit 1
fi