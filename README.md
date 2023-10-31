# MomentumX - Gamified Habit Tracker with Passkey Authentication

MomentumX is a gamified habit tracker that leverages Hanko's passkey authentication for secure user login and registration. Users can create personalized habits, monitor their progress through health and experience points, and strive towards self-improvement.

## Problem Statement

Many individuals struggle with consistency when trying to adopt new habits or eliminate bad ones. HabitHero aims to address this challenge by providing a fun and engaging platform that encourages users to stay motivated, track their progress, and achieve their goals.

## Features

### Passkey Authentication

- Integrated Hanko's passkey authentication for a secure and user-friendly login process.
![Screenshot from 2023-10-31 13-19-18](https://github.com/momentumXbyLakshya/react-client/assets/81241551/64315cd5-9382-49b4-82e2-541b374a5c82)

### Avatar Creation

- Users can set up their profiles by entering their name and selecting an avatar.
![Screenshot from 2023-10-31 13-36-38](https://github.com/momentumXbyLakshya/react-client/assets/81241551/4e3a259e-8d5b-49cd-882d-71a2e1d02b50)


### User Dashboard 

- Displays the user's health and experience bars, offering a visual representation of their progress and achievements.
![Screenshot from 2023-10-31 13-38-00](https://github.com/momentumXbyLakshya/react-client/assets/81241551/09dbad24-d7e1-4d75-8090-1499a935627c)


### Habit Creation and Customization

- Users can create personalized habits and customize them based on difficulty, with options for positive or negative. Positive habits will include habits that the user wants to develop. Negative habits will include habits that the user wants to get rid of. Users can also configure habits based on whether they are daily, monthly, or yearly habits.

### Gamified Habits 

- When a user completes a task for a habit, if it's a positive habit, the user is rewarded with points, if it's a negative habit, the user's health is reduced. Once, the points of the user reach 100, the level of the user is increased and the health is redeemed to 100. 

## Setup Locally

To run this app locally, follow these steps:

1. Clone this repository. You need to have `bun` installed on your system to run this locally.

2. Install the necessary dependencies using the package manager of your choice.
   ```bash
   bun install
   ```
3. Start the app on localhost.
   ```bash
   bun start
   ```
