# Project Structure Documentation

This project follows a modular and scalable architecture for building modern React applications. Below is a breakdown of the purpose and use case of each folder in the `src/` directory.

---

## 📁 api

Contains the API layer of the application. This is where all API requests and server communications are handled. Commonly includes Axios instances, endpoint definitions, and request functions.

---

## 📁 assets

Houses static assets for the application.

- ### 📁 fonts
  Contains custom fonts and typefaces used in the application.
- ### 📁 images
  Stores all images and pictures used across the app, such as icons, logos, banners, and more.

---

## 📁 components

Reusable and modular components are organized here.

- ### 📁 common

  Contains **reusable UI components** that are used throughout the app, such as buttons, text/typography, and form elements.

  - #### 📁 button
    Commonly used button components.
  - #### 📁 form
    Form fields and related UI components.
  - #### 📁 text
    Typography-related components (e.g., headings, text blocks).

- 📁 Other subfolders (like `MyComponent`) hold **non-reusable or page-specific components** that do not fall under shared/common usage.

---

## 📁 config

Contains runtime configuration files for the application, as well as any third-party service configurations (e.g., Firebase, Sentry).

---

## 📁 constants

Centralized place for static constant values used throughout the app, such as:

- Action types
- API base paths
- Static labels
- Regex patterns

---

## 📁 context

Holds global state-related files built with React Context API. Used for app-wide providers like `AuthProvider`, `ThemeProvider`, etc.

---

## 📁 helpers

Contains utility and helper functions, typically small and reusable — such as date formatting, currency formatting, string manipulation, etc.

---

## 📁 hooks

Stores **custom reusable hooks** (e.g., `useAuth`, `useClickOutside`).  
**Non-reusable hooks** should remain inside the component files where they are used.

---

## 📁 intl

Includes files for internationalization (i18n) support, such as translation files and i18n config. Essential for multilingual applications.

---

## 📁 layout

Defines structural layout components such as headers, footers, sidebars, and page wrappers.

---

## 📁 services

Encapsulates business logic and service integrations such as authentication services, storage service, and abstraction over API methods.

---

## 📁 store

Contains application-wide state management setup, like Redux or Zustand:

- Slices/reducers
- Middleware
- Store configuration
- Actions & selectors

---

## 📁 styles

Global styles, theme settings, CSS/SCSS files, Tailwind config, or any theming-related logic lives here.

---

## 📁 views

Holds top-level page components mapped to routes (like Home, Dashboard, Profile). These act as containers and orchestrate layout and business logic.

---

## 📁 types

Contains TypeScript global type definitions and interfaces shared across the application.

---

## 📍 Notes

- This structure supports scalability and separation of concerns.
- Reusability and modularity are prioritized.
- Keep hook/component files close to where they’re used if they’re not reused.
- Maintain consistent naming conventions across all folders.

---
