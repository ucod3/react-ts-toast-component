# Toast Component Project with TypeScript and Vite

## Project Overview

Welcome to my Toast Component Project - an advanced implementation of a toast notification system built with React and TypeScript. This project, inspired by the Joy of React course, goes beyond the foundational concepts with additional enhancements like auto-dismissal of toasts on mobile devices, responsive icon resizing via custom hooks, and form validation logic. These features demonstrate my commitment to creating intuitive and user-friendly web applications.

Dive into the repository to explore the code, or check out the live site to see these functionalities in action.

### Source and Original README

The original project instructions from the course are documented in `Project-README.md` in the repository.

## Enhancements to Initial Boilerplate

Transitioning from the original non-typed, Parcel-based boilerplate to a modern setup using Vite and TypeScript, this project underwent significant enhancements to align with contemporary web development practices and improve overall functionality.

### Transition to Vite and TypeScript

- **From Parcel to Vite**: Updated the build system for faster performance and seamless TypeScript support.
- **Adopting TypeScript**: Refactored the codebase to TypeScript, introducing type definitions and ensuring Vite compatibility, which enhanced code quality and maintainability.

### Refactoring and New Features

- **Refactoring the `VisuallyHidden` Component**: Transitioned from JavaScript to TypeScript for improved type safety and Vite compatibility.
  - **TypeScript Integration**: Implemented type definitions for props, state, and event handlers.
  - **Vite Environment Compatibility**: Aligned with Vite's environment variable standards.
- **Custom Hooks for Responsive Design**: Developed custom hooks for dynamic icon resizing and other responsive design features.
- **Additional UI Features**:
  - Added a 'Dismiss All' button for an efficient user experience in managing multiple notifications.
  - Implemented form validation logic to ensure the message field is populated before submission, enhancing usability and preventing empty toast notifications.

These enhancements not only illustrate the project's evolution into a more sophisticated, user-friendly application but also showcase my ability to apply modern React and TypeScript features effectively in practical scenarios.

For reference, you can view the original non-typed, Parcel-based boilerplate here: [https://github.com/joy-of-react/project-toast].

## Technologies Used

- **React**: As a central part of the Joy of React course, React's component-based architecture was fundamental to the project. Its powerful framework for building user interfaces allowed for an in-depth exploration of reusable UI elements and complex state management.
- **TypeScript**: Implemented to enhance code quality and developer experience. TypeScript's static typing capabilities were crucial for ensuring type safety, particularly beneficial for defining props and state in React components.
- **Vite**: Chosen for its rapid build and development features. Vite's compatibility and seamless integration with TypeScript and React provided a modern and efficient development environment, facilitating a smoother learning and development workflow.

## Key Learnings

- **First React Project with TypeScript**: Embarked on learning TypeScript in the context of a React project, navigating the challenges of type safety and static typing in a hands-on setting.
- **State Management**: Deepened understanding of state management in React, particularly for controlling toast notifications and user input.
- **Event Handling**: Explored the mechanics of event handling in React, essential for interactive user interfaces.
- **Context Implementation**: Utilized React's context feature for efficient and scalable state distribution across different components.
- **Custom Hooks**: Implemented custom hooks to provide reusable stateful logic across components, reducing code duplication and improving maintainability.

## Key Challenges

- **TypeScript Integration**: Overcame the challenges of integrating TypeScript with React, learning the nuances of static typing and type safety in a dynamic React context.
- **Vite Compatibility**: Adapted to Vite's environment variable standards, shifting from `process.env.NODE_ENV` to `import.meta.env.MODE` for environment checks.
- **Dynamic Key Generation**: Developed a dynamic key generation system for unique toast notification keys, addressing React's key warning and enhancing component stability.
- **Context and State Management**: Mastered the use of React's context for state distribution, ensuring that the toast notification system was scalable and maintainable.

## Features and What to Expect

The Toast Component Project offers several interactive features that enhance user experience and demonstrate the application's functionality:

- **Creating Toast Notifications**: Users can enter a custom message and choose a notification variant. Form validation ensures that a message must be entered before a toast can be created, preventing empty notifications.
- **Dismissing Notifications**: Users can dismiss individual notifications or use the 'Dismiss All' button to clear all notifications at once.
- **Auto-Dismissal on Mobile**: Toast notifications on mobile devices are automatically dismissed after 25 seconds to maintain a clean user interface.
- **Responsive Icon Resizing**: Custom hooks dynamically resize icons within the notifications, ensuring optimal display on different screen sizes.
- **Keyboard Accessibility on Desktop**: The 'Escape' key functionality allows desktop users to quickly dismiss all notifications, enhancing the application's accessibility.

These features collectively provide an intuitive and user-friendly interface, showcasing the effective integration of state management, event handling, and responsive design in a React application.

## Local Installation and Setup

Follow these steps to set up and run the project locally using `pnpm`:

1. **Clone the Repository**: Start by cloning the repository to your local machine:

   ```shell
   git clone [https://github.com/ucod3/react-ts-toast-component]
   ```

2. **Install pnpm**: If you don't already have pnpm, you can install it globally using npm. This is only needed if you haven't installed pnpm before:

   ```shell
   npm install -g pnpm
   ```

3. **Install Dependencies**: Navigate to the project directory and use pnpm to install the dependencies:

   ```shell
   cd [project-directory]
   pnpm install
   ```

4. **Start the Development Server**: To run the project locally, start the development server with pnpm:

   ```shell
   pnpm run dev
   ```

5. **Access the Project**: The project will be available at `http://localhost:5173`. Open this URL in your browser to view and interact with your project.

## Project Structure

Understanding the structure of the project can help you navigate and modify the code. Here's a brief overview:

- `src/`: The main directory containing all source code.
- `src/components/`: Houses all React components used in the project. Each component is in its own subdirectory, complete with its associated styling and tests.
- `src/hooks/`: Contains custom React hooks, providing reusable stateful logic across components.
- `src/styles/`: Includes styling files for the project. Styles are organized to correspond with their respective components for easy maintenance.

## Repository and Live Project

- **GitHub Repository**: [https://github.com/ucod3/react-ts-toast-component]
- **Live Project**: [https://ucod3.github.io/react-ts-toast-component]

This project serves as a practical example for those exploring the integration of TypeScript with React, highlighting my progression in mastering these technologies in a functional application context.

## Conclusion

The Toast Component Project, as my initial comprehensive React application with TypeScript, was a significant milestone in my web development journey. This project not only reinforced fundamental React concepts but also introduced me to the nuanced advantages of using TypeScript in a React context. The challenges faced and the skills acquired throughout this endeavor have been both enlightening and instrumental in shaping my approach to modern web application development. It has laid a solid foundation for my future projects and broadened my understanding of building scalable, maintainable web applications, marking a pivotal point in my development career.
