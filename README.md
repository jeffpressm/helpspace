# helpspace [![Work & Co](https://badgen.now.sh/badge/%E2%98%85%E2%98%85/work.co/f33)](https://work.co)

[![Netlify Status](https://api.netlify.com/api/v1/badges/95f05a13-c322-4e6a-8592-43b0cc1569ee/deploy-status)](https://app.netlify.com/sites/helpspace/deploys)

## ⚠️ BEFORE YOU START CODING

Copy `.env.local.sample` to `.env.local` and copy the values from the **For Developers** section of the "Accounts" doc.

## 🔐 Accounts

Log in credentials for all essential services can be found in this Google Doc:

https://docs.google.com/document/d/1i2FpHiYT3TvHkVLeaatvwwZlYP7UHTu915CwV8JcCMc/

## ❓ About the Project

Helpspace was built in a very short development cycles and utilizes 3rd-party tools whenever possible. The major components are:

- [Create React App](https://create-react-app.dev/), for the UI.
- [Netlify](https://netlify.com), for hosting and deployments.
- [Typeform](https://www.typeform.com/), to collect information about users who need help, or want to give it.
- [Google Sheets](http://sheets.google.com/), to store repsonses and act as a CMS.
- [Google Drive](http://drive.google.com) & [Docs](http://docs.google.com), to provide a shared work environment for "clients" and "advisors".
- [Zapier](https://zapier.com/app/dashboard), to automate workflow tasks.

## 👩‍💻 Development Workflow

Builds are triggered on Netlify whenever updates are made to the [`dev`](https://dev--helpspace.netlify.app/), [`qa`](https://qa--helpspace.netlify.app/), or [`master`](https://helpspace.netlify.app/) branches. `master` is the production site.

## 💼 Business Workflow

### 🤖 The Automated Part

1. A user fills out "get help" or "give help" form.
1. A Zapier "zap" is triggered whenever a new form is submitted.
1. The user's data is added to a ["Client"](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=0) or ["Advisor"](https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=272579147) spreadsheet, depending on which role they chose.
1. If the user is a "client", the zap creates a Google Drive folder and copies a document to it, edited with information specific to the client. They are sent an email with links to their dashboard and the google drive folder.
1. If the user is an "advisor", the zap sends them an email with a link to their dashboard.

### ✋ The Manual Part

To match a client request with an advisor, a human:

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

### 📧 HTML Emails

The HTML Emails must be manually pasted into Zapier. For convienience and sanity, copies of these emails are stored in the `/public/emails` directory.

It is highly recommended that the source of truth for the templates be what's in the repo. Changes should be made and tested first, then copied & pasted into the zap.

### 🎞️ Animations

Official Lottie Docs: http://airbnb.io/lottie/

React Component: https://github.com/crello/react-lottie/blob/master/src/components/Lottie/index.tsx

**Note:** The React component used is a fork of `react-lottie`. The original project has been abandoned and the fork has critical updates required to make it run properly.
