import React from 'react';
import DocumentsList from '../components/DocumentsList';
import RegistrationFieldGrid from '../components/RegistrationFieldGrid';
import RegistrationHeader from '../components/RegistrationHeader';
import RegistrationSection from '../components/RegistrationSection';
import RegistrationSidebar from '../components/RegistrationSidebar';
import {
  documents,
  employmentFields,
  onboardingSteps,
  personalFields,
  profilePreview,
} from '../data/registrationPageData';

const UserIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 21a8 8 0 0 0-16 0" />
    <circle cx="12" cy="8" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 8h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
);

const DocumentIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" strokeLinecap="round" />
  </svg>
);

const RegistrationPage = () => {
  return (
    <div className="space-y-6">
      <RegistrationHeader />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_340px]">
        <div className="space-y-6">
          <RegistrationSection icon={<UserIcon />} title="Personal Information">
            <RegistrationFieldGrid fields={personalFields} />
          </RegistrationSection>

          <RegistrationSection icon={<BriefcaseIcon />} title="Employment Details">
            <RegistrationFieldGrid fields={employmentFields} />
          </RegistrationSection>

          <RegistrationSection icon={<DocumentIcon />} title="Required Documents">
            <DocumentsList documents={documents} />
          </RegistrationSection>
        </div>

        <RegistrationSidebar
          profilePreview={profilePreview}
          onboardingSteps={onboardingSteps}
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
