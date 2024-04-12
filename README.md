# note-taking-train

## Contents

- [Description](#description)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Deployed Application](#deployed-application)
- [License](#license)

## Description

Create an application that saves and retrieves note data from a JSON file, using Express.js on the back end.

 ### User Story

- AS A small business owner
- I WANT to be able to write and save notes
- SO THAT I can organize my thoughts and keep track of tasks I need to complete

 ### Acceptance Criteria

- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- WHEN I click on the Save button
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
- WHEN I click on the "New Note" button in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

## Installation

- npm init -y
- npm install
- npm i express
- npm i body-parser
- npm i uuid
* or
- npm i express body-parser uuid

## Dependencies

- "body-parser": "1.20.2"
- "express": "^4.19.2"
- "uuid": "^9.0.1"

## Usage

1. Click [here](https://note-taking-train.onrender.com) to open the application
2. Click on "Get Started".
3. Enter information into the 'title' and 'text' fields 
4. Click the save icon to save the note.

## Deployed Application

[note-taking-train](https://note-taking-train.onrender.com)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
