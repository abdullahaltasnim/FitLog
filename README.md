# FitLog – Fitness & Workout Planner

FitLog is a modern, responsive fitness and workout planning web application designed to help users organize their exercise routines and manage their fitness activities through a simple, user-friendly interface.

The application allows users to explore workouts, save exercises for later, and manage their daily workout plans.

## Features

- **Workout Exploration:** Browse available gym exercises and workout options.
- **Save for Later:** Save preferred workouts for future use.
- **My Plan:** Organize selected workouts into a daily fitness plan.
- **Daily Workout Goals:** Plan up to five lifts at a time as part of a focused workout routine.
- **Shared State Management:** Use React Context API to manage saved workout data across components.
- **Responsive Design:** Access the application across desktop, tablet, and mobile devices.
- **Interactive Interface:** Simple navigation and reusable components for a smooth user experience.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React.js | Component-based user interface |
| TypeScript | Type-safe application development |
| Tailwind CSS | Responsive UI styling |
| React Context API | Shared application state |
| JavaScript (ES6+) | Application functionality |

## Getting Started

Follow these instructions to set up and run the application locally.

### Prerequisites

Make sure the following are installed:

- Node.js (a compatible LTS version)
- npm
- Git (optional)
- Visual Studio Code or another code editor

### Installation

**Step 1: Open the project directory**

Extract the project ZIP and navigate into the folder containing `package.json`.

```bash
cd fit-log
```

**Step 2: Install dependencies**

```bash
npm install
```

**Step 3: Start the development server**

```bash
npm run dev
```

**Step 4: Open the application**

Visit the following URL in your browser:

```text
http://localhost:3000
```

The application should now be accessible locally.

## How to Use

### 1. Explore Workouts

Browse the available gym exercises and select workouts based on your fitness goals.

### 2. Save Workouts

Click the **Save For Later** button on a workout to add it to your saved workout collection.

### 3. Manage My Plan

Navigate to the **My Plan** page to organize your selected workouts and follow your daily exercise targets.

### 4. Complete Your Routine

Follow your planned exercises and continue building your workout routine.

## Application Architecture

FitLog uses a component-based architecture powered by Next.js and React.

The main architectural concepts include:

- **Reusable components:** UI components can be used across multiple pages.
- **Client-side interaction:** React handles interactive workout features.
- **Context-based state:** React Context enables components to share saved workout information.
- **Type safety:** TypeScript interfaces define data structures and component properties.
- **Responsive styling:** Tailwind CSS provides utility classes for consistent design.

## Available Commands

Common Next.js project commands include:

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Run the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |

These commands should be checked against the project's `package.json` scripts.

## Future Improvements

Potential enhancements include:

- User authentication and personal profiles
- Workout history and progress tracking
- Exercise completion tracking
- Fitness statistics and analytics
- Persistent storage for saved workouts
- Personalized workout recommendations
- Workout scheduling and reminders

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Commit your updates.
5. Push the branch.
6. Open a pull request.

## Project Purpose

FitLog demonstrates modern frontend development concepts, including reusable React components, TypeScript integration, state management, responsive design, and interactive user experiences.

The primary goal is to provide an accessible platform for organizing workouts and supporting consistent fitness planning.

---

**FitLog — Plan your workout. Stay consistent. Track your progress.**