import React from 'react';
import ActiveStaffCard from '../components/ActiveStaffCard';
import EmployeeDirectoryHeader from '../components/EmployeeDirectoryHeader';
import EmployeeFilters from '../components/EmployeeFilters';
import EmployeeTable from '../components/EmployeeTable';
import {
  departmentOptions,
  employeesData,
  employeeSummary,
} from '../data/employeePageData';

const EmployeePage = () => {
  return (
    <div className="space-y-6">
      <EmployeeDirectoryHeader />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_220px]">
        <EmployeeFilters options={departmentOptions} />
        <ActiveStaffCard {...employeeSummary} />
      </section>

      <EmployeeTable employees={employeesData} />
    </div>
  );
};

export default EmployeePage;
