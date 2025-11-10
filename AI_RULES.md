# AI Rules and Project Guidelines

This document outlines the technical stack and specific rules for using libraries within this project to ensure consistency, maintainability, and adherence to best practices.

## 1. Tech Stack Overview

*   **Framework:** React (with Vite for tooling).
*   **Language:** TypeScript.
*   **Routing:** React Router DOM (routes defined in `src/App.tsx`).
*   **Styling:** Tailwind CSS (utility-first approach, responsive design is mandatory).
*   **UI Components:** shadcn/ui (built on Radix UI).
*   **State Management/Data Fetching:** React Query (`@tanstack/react-query`).
*   **Internationalization (i18n):** `i18next` and `react-i18next`.
*   **Icons:** `lucide-react`.
*   **Mobile/Native Features:** Capacitor (for mobile deployment).
*   **Data Persistence:** Local Storage (for simple data like medicinali, stati, parametri vitali, analisi).

## 2. Library Usage Rules

| Feature Area | Recommended Library | Notes |
| :--- | :--- | :--- |
| **UI Components** | **shadcn/ui** (and underlying Radix UI) | Use pre-built components from `src/components/ui/` whenever possible. If customization is needed, create a new component file in `src/components/` that wraps the base component. |
| **Icons** | **lucide-react** | Use exclusively for all icons. |
| **Styling** | **Tailwind CSS** | Use utility classes for all styling. Avoid custom CSS unless absolutely necessary (e.g., complex animations). |
| **Notifications** | **sonner** (for general toasts) & **@radix-ui/react-toast** (for `use-toast` hook) | Use `sonner` for simple, non-dismissible notifications. Use the custom `toast` hook (`src/hooks/use-toast.ts`) for more complex, dismissible alerts. |
| **Date Handling** | **date-fns** | Use for all date formatting, parsing, and manipulation. Ensure correct locale usage (`it`, `enUS`, `ro`). |
| **Forms & Validation** | **react-hook-form** and **zod** | Use for complex form handling and schema validation. |
| **Charts/Data Visualization** | **recharts** | Use for displaying graphs and data trends (e.g., in `GraficoMedicinali.tsx`). |
| **Mobile File Operations** | **@capacitor/filesystem** and **cordova-plugin-file-opener2** (via `@awesome-cordova-plugins/file-opener`) | Use these for handling file uploads, storage, and opening documents on native platforms. |
| **AI/Backend Calls** | **Supabase Edge Functions** | All AI interactions must go through the `chat-assistant` Edge Function using the Supabase client (`@/integrations/supabase/client`). |

## 3. Code Structure Rules

*   **Components:** Must be placed in `src/components/`. New components must be created in their own file.
*   **Pages/Routes:** Must be placed in `src/pages/`.
*   **Hooks:** Must be placed in `src/hooks/`.
*   **Utilities:** Must be placed in `src/lib/` or `src/utils/`.
*   **Imports:** Use path aliases (`@/`) for internal imports.