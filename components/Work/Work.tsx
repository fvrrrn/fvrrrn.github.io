import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { WorkDescription } from './WorkDescription'

export const Work = forwardRef<HTMLDivElement>((props, ref) => (
  <Box ref={ref} minHeight="300px">
    <Heading>02. Where I&apos;ve worked</Heading>
    <Tabs orientation="vertical" align="start">
      <TabList flexShrink="0">
        <Tab justifyContent="flex-start">SberTech</Tab>
        <Tab justifyContent="flex-start">EPAM</Tab>
        <Tab justifyContent="flex-start">TD Media</Tab>
        <Tab justifyContent="flex-start">DSU</Tab>
      </TabList>

      <TabPanels alignItems="flex-start">
        <TabPanel>
          <WorkDescription
            position="Frontend developer"
            company="SberTech"
            deeds={[
              'Implemented micro-frontend architecture and split monolythic app into smaller ones.',
              'Wrote modern, performant, maintainable code for a diverse array of client and internal projects.',
              'Worked on SberTech User Interface Kit, successfully added higly extensible polymorphic components.'
            ]}
          />
        </TabPanel>
        <TabPanel>
          <WorkDescription
            position="Frontend developer"
            company="EPAM"
            deeds={[
              'Hardcore-ly reworked outdated frontend codebase on a EPAM Plus app that helps employees gain money for extra curricular activities.',
              'Implemented low-couple filtering system using Observer pattern within EPAM Unified User Interface Kit.'
            ]}
          />
        </TabPanel>
        <TabPanel>
          <WorkDescription
            position="Frontend developer"
            company="TD Media"
            deeds={[
              'Created a variety dashboards, admin panels etc.',
              'Automated testing using Cypress.IO and React Testing Library'
            ]}
          />
        </TabPanel>
        <TabPanel>
          <WorkDescription
            position="Backend developer"
            company="Dubna State University"
            deeds={[
              'Helped organizing University routing system, booting automation etc.',
              'Wrote backend using NodeJS for a student admission company.',
              'Created single well-documented and tested API for a variety University services.'
            ]}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
))

Work.displayName = 'Work'
