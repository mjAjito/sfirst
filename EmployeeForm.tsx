import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataStore} from '@aws-amplify/datastore';
import {Employee} from './src/models'; // Import your Employee model

const EmployeeForm: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const retrievedEmployees = await DataStore.query(Employee);
        setEmployees(retrievedEmployees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <View style={styles.container}>
      {employees.map(employee => (
        <View key={employee.empID}>
          <Text>
            {employee.firstName} {employee.lastName}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmployeeForm;
