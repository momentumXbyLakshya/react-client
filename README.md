# MomentumX - Gamified Habit Tracker with Passkey Authentication

MomentumX is a gamified habit tracker that leverages Hanko's passkey authentication for secure user login and registration. Users can create personalized habits, monitor their progress through health and experience points, and strive towards self-improvement.

## Problem Statement

Many individuals struggle with consistency when trying to adopt new habits or eliminate bad ones. HabitHero aims to address this challenge by providing a fun and engaging platform that encourages users to stay motivated, track their progress, and achieve their goals.

## Features

### Passkey Authentication

- Integrated Hanko's passkey authentication for a secure and user-friendly login process.

### Avatar Creation

- Users can set up their profiles by entering their name and selecting an avatar.

### User Dashboard

- Displays the user's health and experience bars, offering a visual representation of their progress and achievements.

### Habit Creation and Customization

- Users can create personalized habits and customize them based on difficulty, with options for positive or negative. Positive habits will include habits that user wants to develop. Negative habits will include habits that the user wants to get rid of. Users can also configure habits based on whether they are daily habits, or monthly, or yearly.

### Habit Tracking

- When a user completes a task for a habit

## Setup Locally

### Prerequisites

1. You need to have `node` (preferably version `>=18`) installed on your system to run this locally. <a href="https://nodejs.org">Know more</a>.
2. You must set up and start the backend for this app. Find it here <a href="[https://nodejs.org](https://github.com/momentumXbyLakshya/express-server)">Server</a>.

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
