# CV Generator App

A modern, interactive web application for creating professional CVs with multiple templates and customization options. Built with React and Vite, this application provides a seamless experience for users to build, customize, and download their CVs in a printable format.

## Overview

The CV Generator App is a single-page application that allows users to create professional CVs by filling out forms and instantly seeing the results in a live preview. The application supports multiple pre-designed templates tailored for different professions, customizable accent colors, and automatic data persistence using local storage.

## Key Features

- **Multiple Professional Templates**: Choose from three pre-designed templates optimized for different career paths (UI/UX Designer, Software Engineer, Human Resource)
- **Live Preview**: Real-time CV preview as you fill out information
- **Customizable Accent Colors**: Select from 7 different accent colors to personalize your CV
- **Auto-Save Functionality**: Automatically saves your progress to browser local storage
- **PDF Download**: Export your CV as a print-ready PDF document
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Dark-Themed Interface**: Modern dark UI for comfortable viewing

## Technology Stack

### Core Technologies

- **React 19**: Frontend framework for building the user interface
- **Vite 7**: Build tool and development server for fast development
- **Tailwind CSS 4**: Utility-first CSS framework for styling

### Key Libraries

- **react-to-print**: Enables CV export to PDF format
- **react-responsive**: Handles responsive design and device detection
- **date-fns**: Date formatting and manipulation utilities
- **@mdi/react & @mdi/js**: Material Design Icons for UI elements

### Development Tools

- **ESLint**: Code linting and quality assurance
- **@vitejs/plugin-react**: React integration for Vite

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── templates/      # CV template components
│   ├── LoadingScreen/  # Initial loading screen
│   ├── Header.jsx      # Fixed app header
│   ├── Footer.jsx      # App footer
│   ├── InputField.jsx  # Custom input component
│   ├── IconButton.jsx  # Button with icon component
│   └── SelectDropdown.jsx # Custom dropdown selector
├── pages/
│   └── MainPage/       # Main application page with sections
│       ├── ChooseTemplateSection.jsx
│       ├── PersonalInfoSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectSection.jsx
│       ├── ProfessionalExpSection.jsx
│       ├── EducationExpSection.jsx
│       ├── AdditionalInfoSection.jsx
│       └── CVSection.jsx
├── constants/          # Application constants
│   └── accentColors.js # Available accent color options
├── utils/             # Utility functions
│   └── dateConverter.js # Date formatting utilities
└── assets/            # Static assets (icons, images)
```

## Application Architecture

### Data Flow

The application follows a unidirectional data flow pattern:

1. **State Management**: The main state is managed in `MainPage.jsx` using React hooks
2. **Data Structure**: All CV data is consolidated into a single `CVObject` that includes:

   - Template selection
   - Accent color choice
   - Personal information
   - Skills array
   - Projects array
   - Professional experiences array
   - Education experiences array
   - Additional information array

3. **Persistence**: The application uses `localStorage` to automatically save and restore CV data across sessions

### Component Hierarchy

```
App
└── LoadingScreen
└── MainPage
    ├── Header
    ├── Form Sections (left panel)
    │   ├── ChooseTemplateSection
    │   ├── PersonalInfoSection
    │   ├── SkillsSection
    │   ├── ProjectSection
    │   ├── ProfessionalExpSection
    │   ├── EducationExpSection
    │   └── AdditionalInfoSection
    ├── CVSection (right panel / preview)
    │   └── Template Component (dynamic)
    └── Footer
```

## Core Components

### MainPage Component

The central orchestrator of the application that:

- Manages all CV-related state
- Handles auto-save functionality using `useEffect`
- Loads saved data from localStorage on mount
- Renders responsive layout (side-by-side on desktop, stacked on tablet)
- Uses `useMemo` to optimize CV data object creation

### Form Sections

Each section component (`PersonalInfoSection`, `SkillsSection`, etc.) follows a similar pattern:

- Receives state and setState functions as props
- Provides specialized input fields for its data category
- Supports dynamic addition/removal of entries (for arrays)
- Uses custom `InputField` and `IconButton` components

### CVSection Component

Responsible for the CV preview and download functionality:

- Displays the selected template component dynamically
- Implements print functionality using `react-to-print`
- Configures print settings (A4 size, exact color reproduction)
- Remains sticky on desktop for easy viewing while scrolling

### Template Components

Three pre-designed CV templates that:

- Receive CV data as props
- Include sample data to show users what information goes where
- Apply accent colors dynamically
- Use the `forwardRef` pattern for print functionality
- Render professional layouts optimized for printing

## Reusable Components

### InputField

A versatile input component that supports:

- Standard text inputs
- Textarea for longer content
- Different input types (text, email, date, etc.)
- Consistent styling with dark theme
- Focus and hover states

### IconButton

A styled button component featuring:

- Icon + text combination
- Consistent padding and styling
- Hover effects
- Used for adding new entries in dynamic sections

### SelectDropdown

A custom dropdown component that:

- Displays selected value with a toggle arrow
- Shows dropdown options when clicked
- Handles click-outside-to-close behavior
- Supports custom rendering for both trigger and options

## Data Management

### Local Storage Implementation

The application implements automatic saving:

- **Load on Mount**: Retrieves saved CV data when the app loads
- **Auto-Save**: Uses `useEffect` to save changes to localStorage whenever CV data changes
- **Fallback Values**: Provides default values if no saved data exists

## Utility Functions

### Date Converter (`dateConverter.js`)

- **convertDate()**: Converts YYYY-MM format to "MMM YYYY" format (e.g., "2022-03" → "Mar 2022")
- **getYear()**: Extracts year from YYYY-MM format
- Uses `date-fns` library for reliable date parsing and formatting

## Responsive Design

The application adapts to different screen sizes:

- **Desktop (>768px)**: Two-column layout with sticky CV preview
- **Tablet (≤768px)**: Single-column stacked layout
- Uses `react-responsive` library for media query detection
- Adjusts grid layouts and spacing based on screen size

## User Experience Features

### Loading Screen

- Displays a spinner animation while the app initializes
- Automatically fades out using CSS animations
- Prevents layout shift during initial load

### Dynamic Lists

Users can add or remove entries for:

- Skills
- Projects
- Professional experiences
- Education experiences
- Additional information points

### Visual Feedback

- Hover effects on interactive elements
- Focus states on input fields
- Smooth transitions for color changes
- Clear visual hierarchy with spacing and typography

## Browser Compatibility

- Modern browsers with ES6+ support
- LocalStorage API support required
- Print functionality requires browser print capabilities

##### Made with 💙 and React, by Pritam Debnath.
