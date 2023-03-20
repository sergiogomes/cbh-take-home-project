# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1

Create a table to store a new relationship between `Facility` and `Agent`.

Example:

```json
{
  "facilityAgentID": "82d3yo9qsy239oq8y239ys",
  "facilityID": "348dh3o83jdo48dh398j3",
  "agentID": "ai8dn2hy9oay3j48o97m32",
  "agentCustomID": "George-Paul"
}
```

Acceptance Criteria:

> - Create the table
> - Don't forget of creating an index for the PK
> - One facility can have multiple agents
> - One agent can be assigned to multiple facilities

Time / Effort:

> Fibonacci Complexity 1: 1 - 2 days

Implementation Details:

> N/A

### Ticket 2

Create an API endpoint that checks if a custom agent ID already existis for a specific `Facility`.

Example:

```json
{
  "facilityID": "348dh3o83jdo48dh398j3",
  "agentCustomID": "George-Paul"
}
```

Acceptance Criteria:

> - Create the API endpoint

Time / Effort:

> Fibonacci Complexity 1: 1 - 2 days

Implementation Details:

> N/A

### Ticket 3

Create an API endpoint that receives a payload with the `Facility` ID, `Agent` internal ID, and the new custom ID and saves to the created table.
This custom ID must be unique accross the facility.

Example:

```json
{
  "facilityID": "348dh3o83jdo48dh398j3",
  "agentID": "ai8dn2hy9oay3j48o97m32",
  "agentCustomID": "George-Paul"
}
```

Acceptance Criteria:

> - Create the API endpoint
> - The custom ID must be unique

Time / Effort:

> Fibonacci Complexity 1: 1 - 2 days

Implementation Details:

> Use the created API endpoint agent route to check if the custom ID already exists

### Ticket 4

Create an API endpoint that receives a payload with the `Facility` ID, `Agent` custom ID, and returns a report with the list of `Shifts`.

Example:

```json
{
  "facilityID": "348dh3o83jdo48dh398j3",
  "agentCustomID": "George-Paul"
}
```

Acceptance Criteria:

> - Create the API endpoint
> - The report should be the same as before

Time / Effort:

> Fibonacci Complexity 1: 1 - 2 days

Implementation Details:

> Use the same logic the other API endpoint has and change the new table
