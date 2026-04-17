export const personalFields = [
  {
    id: 'full-name',
    label: 'Full Name',
    value: 'e.g. Jonathan Iver',
    type: 'input',
  },
  {
    id: 'email-address',
    label: 'Email Address',
    value: 'j.iver@gaurerp.com',
    type: 'input',
  },
  {
    id: 'phone-number',
    label: 'Phone Number',
    value: '+1 (555) 000-0000',
    type: 'input',
  },
  {
    id: 'date-of-birth',
    label: 'Date of Birth',
    value: 'mm/dd/yyyy',
    type: 'input',
  },
];

export const employmentFields = [
  {
    id: 'professional-role',
    label: 'Professional Role',
    value: 'Senior UX Architect',
    type: 'select',
  },
  {
    id: 'reporting-manager',
    label: 'Reporting Manager',
    value: 'Sarah Chen, Director of Ops',
    type: 'input',
  },
  {
    id: 'annual-salary',
    label: 'Annual Salary',
    value: '$ 125,000',
    type: 'input',
  },
  {
    id: 'department',
    label: 'Department',
    value: 'Engineering',
    note: 'Remote',
    type: 'tag',
  },
];

export const documents = [
  {
    id: 1,
    title: 'Government Issued ID',
    meta: 'JPG, PNG or PDF',
    action: 'Upload',
  },
  {
    id: 2,
    title: 'Signed Offer Letter',
    meta: 'Single PDF file',
    action: 'Upload',
  },
  {
    id: 3,
    title: 'Address Proof',
    meta: 'Utility bill or bank statement',
    action: 'Upload',
  },
];

export const onboardingSteps = [
  'Core details submission',
  'Document verification',
  'System provisioning',
  'Orientation invite',
];

export const profilePreview = {
  badge: 'Security Access',
  badgeValue: 'Standard',
  accessLabel: 'Probation',
  accessValue: '90 Days',
};
