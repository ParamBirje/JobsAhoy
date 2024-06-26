# Overview

This is a guide for knowing how the project's components are organised and structured. The structure should be followed for future development of the project.

All of the project routes, and local components live inside `src/app`. As of now there are 2 main routes with child routes inside them

- `/user`
- `/jobs`

Global components and other assets that are used across both of these are stored in `src/components` and `src/lib`.

Here are the other main aspects while building functionality.

- UI components (eg. LoginButton.tsx)
- Helper functions (eg. getRandom.ts)
- Server actions (eg. getUserData.ts)

It should be ensured that all these individual components must be separated into their own file.

**No two components should live in the same file**

Then other miscellaneous functions that we would use and integrate with the project's features / solutions like:

- `api/` route (REST API functions)
- Types (should live with the component its meant for)
- Static assets (images)
- others

#### General Rule of Thumb

All components/functions used _locally_ in a specific main route will be under that route, unless the components are used in another main route (not a child of the original route) in which case they become _global_ and reside under `src/components` or `src/lib`.

## UI Components

Let's take an example of a UI component on the login page that lives in the directory path as `src/app/login` used only by `page.tsx` inside.

```ts
function MyComponent() {
  // ...
}
```

The component should be placed in a separate folder inside `src/app/login/_components` wit it's PropTypes and then be imported into `page.tsx`

```ts
export default function MyComponent({}: MyComponentProps) {
  // ...
}

type MyComponentProps = {};
```

**As soon as the component is required by another route (not a child in the path of the original route), the component should be placed in the `src/components` path.**

## Helper functions

Let's take an example of a helper function on the login page that lives in the directory path as `src/app/login` used only by `page.tsx` inside.

```ts
function MyHelper() {
  // ...
}
```

The component should be placed in a separate folder inside `src/app/login/_components/utils` with it's PropTypes and then be imported into `page.tsx`

```ts
export default function MyHelper({}: MyHelperParams) {
  // ...
}

type MyHelperParams = {};
```

**As soon as the helper is required by another route (not a child in the path of the original route), the helper should be placed in the `src/components/utils` path.**

## Types

The prop types used in that file should stay in the same file unless used by other components.
Meanwhile other types, will be in `types.ts` under the same directory where it's been used.

- If types are used by other components in the **same directory path** for eg. `src/app/about/MyComponent1.tsx`, `src/app/about/MyComponent2.tsx` and `src/app/about/_components/MyComponent3.tsx` are using the type, we put the types in `types.ts` under that path `src/app/about/types.ts`.
- If the type is accessed elsewhere in multiple routes, the types should go in `src/types.ts`.

## Static Assets

All images should go inside `src/lib/images` in a structured format and directory.

## API routes `/api`

Always try to incorporate the backend functions using Nextjs' Server Actions. Only if the function is needed by another app outside of the Next app, then using `/api` route function is advisable.
