# helpspace [![Work & Co](https://badgen.now.sh/badge/%E2%98%85%E2%98%85/work.co/f33)](https://work.co)

[![Netlify Status](https://api.netlify.com/api/v1/badges/95f05a13-c322-4e6a-8592-43b0cc1569ee/deploy-status)](https://app.netlify.com/sites/helpspace/deploys)

## ⚠️ BEFORE YOU START CODING

Copy `.env.local.sample` to `.env.local` and copy the values from the **For Developers** section of the "Accounts" doc.

## 🔐 Accounts

Log in credentials for all essential services can be found in this Google Doc:

https://docs.google.com/document/d/1i2FpHiYT3TvHkVLeaatvwwZlYP7UHTu915CwV8JcCMc/

## ❓ About the Project

Helpspace was built in a very short timeline and utilizes 3rd-party tools whenever possible. THe app should be considered somewhere between an "alpha" and "MVP" state. The major components are:

- [Create React App](https://create-react-app.dev/), for the UI.
- [Netlify](https://netlify.com), for hosting and deployments.
- [Typeform](https://www.typeform.com/), to collect information about users who need help, or want to give it.
- [Google Sheets](http://sheets.google.com/), to store responses and act as a CMS.
- [Google Drive](http://drive.google.com) & [Docs](http://docs.google.com), to provide a shared work environment for "clients" and "advisors".
- [Zapier](https://zapier.com/app/dashboard), to automate workflow tasks.

## Jargon

- **Client**: A user that requests help.
- **Advisor**: A user that offers help.
- **Challenge**: A category of problem.
- **Request**: A client's specific problem.

All together: A client makes a request for help with a problem. They are matched with an advisor who has expertise related to the challenge presented in the client's problem. The two people work together in a shared Google Doc to complete the request.

## 👩‍💻 Development Workflow

Builds are triggered on Netlify whenever updates are made to the [`dev`](https://dev--helpspace.netlify.app/), [`qa`](https://qa--helpspace.netlify.app/), or [`master`](https://helpspace.netlify.app/) branches. `master` is the production site.

## 💼 Business Workflow

### 🤖 The Automated Part

1. A user fills out an embedded "get help" or "give help" form.
1. A Zapier "zap" is triggered whenever a new form is submitted.
1. The user's data is added to a ["Client"](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=0) or ["Advisor"](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=272579147) spreadsheet, depending on which role they chose.
1. If the user is a "client", the zap creates a Google Drive folder and copies a document to it, edited with information specific to the client. They are sent an email with links to their dashboard and the google drive folder.
1. If the user is an "advisor", the zap sends them an email with a link to their dashboard.

### ✋ The Manual Part

To match a request with an advisor, a human:

1. Adds an entry to the ["Match"](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=1370515805) spreadsheet.
2. Contacts the selected advisor to tell them that they've been matched, and to share the Google Drive link so that the client and advisor can work together.

Once a request has been completed, the entry in the Match spreadsheet can be updated to indicate that it is complete.

## ❗ Important Links & Details

### 🗃️ Google Sheets

CMS: https://docs.google.com/spreadsheets/d/1So9VgfoQaC-399EW9Nic6ueI1Ta4sqdHdQ4v6ducF58/

Requests: https://docs.google.com/spreadsheets/d/1SMus2rG-kjfy2SXASC-V8trxB4BFF7ITx-QvaoBOags/

**Note:** The first entry of the "Client" and "Advisor" spreadsheets should be reserved for "test" data. Zapier uses these rows to collect data and run tests.

### 📋 Typeform

API documentation: https://developer.typeform.com/

React Component: https://github.com/alexgarces/react-typeform-embed/

**Note:** Several hidden fields are applied to the form. `responseId` is the unique identifier for the response. If a user is "logged in", their email address is added as a hidden field and they skip the informational questions at the beginning of the form.

### 📧 HTML Emails

The HTML Emails must be manually pasted into Zapier. For convienience and sanity, copies of these emails are stored in the `/public/emails` directory.

It is highly recommended that the source of truth for the templates be what's in the repo. Changes should be made and tested first, then copied & pasted into the zap.

### 🎞️ Animations

Official Lottie Docs: http://airbnb.io/lottie/

React Component: https://github.com/crello/react-lottie/blob/master/src/components/Lottie/index.tsx

**Note:** The React component used is a fork of `react-lottie`. The original project has been abandoned and the fork has critical updates required to make it run properly.

## Authoring Guidelines

When users sign up for helpspace, their responses are recoded in the [Client](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=0) or [Advisor](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=272579147) spreadsheet, depending of if they need help or are offering help, respectively.

Authors are encouraged to avoid directly editing the Client & Advisor spreadsheets. If that is unavoidable, please respect these rules:

1. The column headings (the first row) should not be changed.
1. The first response (the seconed row) should contain "test data", not a real user's data.
1. There should be no empty rows within the responses.

The first two rules are to ensure that Zapier can properly read & test the spreadsheet. The last rule avoids an issue with the library that is used to read the data and present it on the website.

### Matching Advisors with Clients

To match an advisor with a client's request, create a new row in the [Match](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=1370515805) spreadsheet.

Each row has three pieces of required data:

1. `Client Response ID`: This is the unique ID of a client's help request. (Clients can have more than one help request.) This value should be copied from the first column (labeled `ID`) of the row in the Client spreadsheet.
1. `Advisor Email`: This is the email address of the Advisor who will be assigned to this request. This value should be copied from the second column (labeled `Email`) of the row in the Advisor spreadsheet.
1. `Status`: This column should be set to either `In progress` or `Complete`. This represents the state of the request.

Once a match is made in this spreadsheet, both clients and advisors will see the match in their dashboard. However, they are _not_ automatically notified that a match has been made; You must do this manually.
