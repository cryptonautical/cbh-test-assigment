# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Database Modification for Custom IDs
   - Acceptance Criteria:
       - The database schema is modified to include a new field for storing custom IDs for Agents.
       - The custom ID field is associated with the respective Agent records. 
       - The existing data is migrated to populate the custom ID field with the internal database IDs initially.


   - Implementation Details:
     - Analyze the existing database structure and determine the appropriate modification required. 
     - Modify the database schema to include a new field for custom IDs. 
     - Develop a data migration script to copy the existing internal database IDs to the new custom ID field. 
     - Test the database modification and migration process to ensure data integrity and compatibility with the existing system.

Time/Effort Estimate: 2 days

2. Backend API Development for Custom ID Handling 
   - Acceptance Criteria:
     - Backend API endpoints are created to support the creation, retrieval, and modification of custom IDs for Agents. 
     - Facilities can save and retrieve custom IDs for Agents through the API.


   - Implementation Details: 
     - Design and develop API endpoints for creating, retrieving, and modifying custom IDs. 
     - Implement validation and business logic to handle the saving and retrieval of custom IDs. 
     - Integrate the new API endpoints with the existing codebase. 
     - Ensure proper error handling and security measures for the API endpoints. 
     - Test the API endpoints thoroughly to verify their functionality and adherence to the requirements.

Time/Effort Estimate: 3 days

3. User Interface Update for Custom ID Input
    - Acceptance Criteria:
        - The user interface is updated to include an input field for Facilities to enter and save custom IDs for Agents.
        - Facilities can view and edit the custom ID field for each Agent.

    - Implementation Details:
        - Identify the appropriate location in the user interface to display and edit the custom ID field.
        - Modify the user interface to include an input field for Facilities to enter custom IDs.
        - Implement client-side validation to ensure the entered custom IDs meet any required criteria.
        - Integrate the UI changes with the backend API for saving and retrieving custom IDs.
        - Test the user interface to ensure the correct display and functionality of the custom ID input field.

Time/Effort Estimate: 2 days

4. Report Generation Enhancement for Custom IDs 
   - Acceptance Criteria: 
     - The report generation process is updated to utilize the custom IDs saved by Facilities. 
     - Reports are generated using the custom IDs instead of the internal database IDs. 
   - Implementation Details:
     - Modify the report generation code to retrieve the custom IDs from the database and associate them with the respective Agents. 
     - Update the report generation logic to use the custom IDs when generating reports. 
     - Test the report generation process to ensure the correct usage of custom IDs and validate the generated reports.

Time/Effort Estimate: 2 days