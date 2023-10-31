# MomentumX - Gamified Habit Tracker with Passkey Authentication

MomentumX is a gamified habit tracker that leverages Hanko's passkey authentication for secure user login and registration. Users can create personalized habits, monitor their progress through health and experience points, and strive towards self-improvement.

## Problem Statement

Many individuals struggle with consistency when trying to adopt new habits or eliminate bad ones. HabitHero aims to address this challenge by providing a fun and engaging platform that encourages users to stay motivated, track their progress, and achieve their goals.

## Features

### Passkey Authentication

- Integrated Hanko's passkey authentication for a secure and user-friendly login process.
![Screenshot from 2023-10-31 13-19-18](https://github.com/momentumXbyLakshya/react-client/assets/81241551/272281df-a0ab-444d-aaa6-1f07818ebee5)


### Avatar Creation

- Users can set up their profiles by entering their name and selecting an avatar.
![Screenshot from 2023-10-31 13-36-38](https://github.com/momentumXbyLakshya/react-client/assets/81241551/97c27a4b-9d11-4c7b-97f7-9369a4413ebc)


### User Dashboard

- Displays the user's health and experience bars, offering a visual representation of their progress and achievements.
![Screenshot from 2023-10-31 13-38-00](https://github.com/momentumXbyLakshya/react-client/assets/81241551/915f76e1-ab44-4f6d-be56-c037318532f8)


### Habit Creation and Customization

- Users can create personalized habits and customize them based on difficulty, with options for positive or negative. Positive habits will include habits that user wants to develop. Negative habits will include habits that the user wants to get rid of. Users can also configure habits based on whether they are daily habits, or monthly, or yearly.

### Habit Tracking with Gamification

- When a user completes a task for a habit, if it's a positive habit, the user is rewarded with points, if it's a negative habit, the user's health is reduced. Once, the points of the user reach 100, the level of the user is increased and the health is redeemed to 100.

## Setup Locally

### Prerequisites

1. You need to have `node` (preferably version `>=18`) installed on your system to run this locally. <a href="https://nodejs.org">Download</a>.
2. You must set up and start the backend for this app. Find it here <a href="https://nodejs.org](https://github.com/momentumXbyLakshya/express-server">Server</a>.

### Steps to follow

To run this app locally, follow these steps:

1. Clone this repository.
2. Create a `.env.local` file in the root directory and paste the following snippet into that file
   ```
   REACT_APP_HANKO_API_URI=_
   REACT_APP_BACKEND_URI=http://localhost:8080
   ```
   Replace the `_` with the Hanko Cloud API URL that you should have created while setting up the backend server.
3. Install the necessary dependencies using the package manager of your choice.
   ```bash
   npm install
   ```
4. Start the app.
   ```bash
   npm start
   ```
