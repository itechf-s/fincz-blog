---
title: "Top 15 React Interview Questions for Senior Developers"
categories: [ Javascript ]
tags: [ReactJs]
description: "A curated list of the 15 most important React interview questions for experienced developers, with business use cases from the healthcare insurance domain."
date: 2023-06-15T08:00:00+05:30
lastmod: 2026-07-11T08:00:00+05:30
images: ["images/2023/06/reactjs-qna.webp"]
author: ahmad
---

## Top 15 React Questions for Experienced Developers

### 1. What is React and the Virtual DOM?
**Business Use Case:** "When a user filters a large list of 1000 claims, how does React ensure the UI updates quickly without re-rendering the entire page?"

**Answer:** React is a JavaScript library for building user interfaces. Its key feature is the **Virtual DOM**, a lightweight copy of the real DOM kept in memory. When the list of claims is filtered, React first updates the Virtual DOM. Then, it uses a "diffing" algorithm to compare the new Virtual DOM with the old one and calculates the minimal set of changes needed. Finally, it applies only these specific changes to the real DOM, which is much faster than re-rendering the entire list.

### 2. What is the difference between functional and class components?
**Business Use Case:** "For a new component that displays a member's profile, would you use a functional or class component, and why?"

**Answer:** I would use a **functional component**. While class components were the original way to create stateful components with lifecycle methods, functional components with **Hooks** (like `useState` and `useEffect`) are the modern standard. They are more concise, easier to read and test, and avoid the complexity of the `this` keyword. For a simple display component like a member profile, a functional component is the clear choice.

### 3. How do you pass data between components?
**Business Use Case:** "A parent `ClaimDetails` component needs to pass the claim ID to a child `ClaimLineItems` component. How would you do this? What if a deeply nested component needs the logged-in user's ID without passing it through 10 levels?"

**Answer:**
*   **For parent-to-child:** I would use **props**. The `ClaimDetails` component would pass the ID like this: `<ClaimLineItems claimId={claim.id} />`.
*   **For deeply nested components:** To avoid "prop drilling," I would use the **Context API**. I would create a `UserContext` to hold the user's data at the top level of the application. Any component, no matter how deeply nested, can then use the `useContext` hook to access the user's ID directly.

### 4. Explain the `useState` hook.
**Business Use Case:** "In a claim submission form, how would you manage the state of a simple input field, like the service date?"

**Answer:** The `useState` hook lets you add state to a functional component. It returns an array with two elements: the current state value and a function to update it. For the service date input, I would use it like this: `const [serviceDate, setServiceDate] = useState('');`. The `serviceDate` variable holds the current value, and I would call `setServiceDate` in the input's `onChange` handler to update the state as the user types.

### 5. Explain the `useEffect` hook.
**Business Use Case:** "After a `ClaimDetails` component loads, it needs to fetch the associated claim line items from a REST API. How would you handle this side effect?"

**Answer:** The `useEffect` hook is used for side effects like data fetching. I would use it to call the API when the component mounts. By including `claimId` in the dependency array, the effect will re-run if the user navigates to a different claim, ensuring the correct line items are fetched.
```javascript
useEffect(() => {
  fetchClaimLineItems(claimId).then(data => setLineItems(data));
}, [claimId]); // Runs when claimId changes
```

### 6. What is the significance of keys in React lists?
**Business Use Case:** "When rendering a list of claim line items, why is it important to provide a unique `key` prop to each item?"

**Answer:** Keys are crucial for performance. When rendering a list, React uses the `key` to identify which items have changed, been added, or been removed. Without a stable key (like the `claimLineId`), React might have to re-render the entire list if its order changes. By providing a unique and stable key, we help React's diffing algorithm to efficiently update only the necessary elements.

### 7. How do you handle forms in React?
**Business Use Case:** "How would you manage the state of a complex claim submission form with multiple fields, ensuring data is validated before submission?"

**Answer:** I would use the **controlled components** pattern. Each form input's value would be tied to a piece of state managed by `useState`. The `onChange` handler for each input would update the corresponding state. This gives React full control over the form. For complex forms, I might use a custom hook like `useForm` to manage the state object and validation logic.

### 8. What is Redux and when would you use it?
**Business Use Case:** "Our application has a complex state, including the logged-in user's profile, their permissions, and global settings that many components need. When would you decide to use a global state management library like Redux?"

**Answer:** Redux provides a centralized store for application state. I would choose Redux when the application's state becomes complex and needs to be shared across many components that are not directly related. In this scenario, where user permissions and global settings are needed everywhere, Redux is a good fit. It makes the state predictable and easier to debug, but it adds boilerplate, so I wouldn't use it for simple applications.

### 9. How can you optimize performance in a React application?
**Business Use Case:** "A dashboard component displaying real-time claim statistics is re-rendering too often, causing performance issues. What are some techniques you would use to optimize it?"

**Answer:** My primary techniques would be:
1.  **`React.memo`:** I would wrap child components that don't need to re-render on every parent state change with `React.memo`.
2.  **`useCallback`:** I would wrap functions that are passed down as props to memoized child components in `useCallback` to ensure the function reference doesn't change on every render.
3.  **`useMemo`:** For expensive calculations within the component (like aggregating claim statistics), I would use `useMemo` to cache the result so it only re-runs when its dependencies change.

### 10. What are Higher-Order Components (HOCs)?
**Business Use Case:** "We have several components that need to check if a user has the 'Adjudicator' role before rendering. How could you use a Higher-Order Component to reuse this authorization logic?"

**Answer:** A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional logic. I would create a `withAuthorization` HOC that checks the user's role. If the user is authorized, it renders the wrapped component; otherwise, it could render a "Not Authorized" message. This allows me to apply the same authorization logic to any component without duplicating code.

### 11. How do you handle asynchronous operations like API calls?
**Business Use Case:** "When a user clicks a 'Submit Claim' button, how do you handle the API call, including managing loading and error states in the UI?"

**Answer:** I would use `useState` to manage `loading`, `error`, and `data` states. When the button is clicked, I set `loading` to `true`. I make the API call inside a `try/catch` block. On success, I update the `data` state and set `loading` to `false`. On failure, I update the `error` state and set `loading` to `false`. The UI would then conditionally render a loading spinner, an error message, or the success state.

### 12. What is React Router?
**Business Use Case:** "Our insurance portal has different pages for 'Dashboard', 'Claims List', and 'Member Search'. How would you implement client-side navigation between these pages?"

**Answer:** React Router is the standard library for routing in React. I would define a `<Route>` for each page, mapping a URL path to a specific component (e.g., `/dashboard` maps to `<Dashboard />`). I would then use the `<Link>` component for navigation links. This allows users to navigate between pages without a full page reload.

### 13. What are React hooks and what problem do they solve?
**Business Use Case:** "What problem did React Hooks solve compared to the old class component lifecycle methods?"

**Answer:** React Hooks solve two main problems:
1.  **Complex Logic:** Lifecycle methods in class components often forced related logic to be split apart (e.g., data fetching in `componentDidMount` and cleanup in `componentWillUnmount`). Hooks like `useEffect` let you co-locate related logic.
2.  **Code Reuse:** Reusing stateful logic in class components was difficult, often requiring patterns like HOCs or render props which lead to "wrapper hell". Custom Hooks allow you to extract and reuse stateful logic easily.

### 14. What is the difference between `useMemo` and `useCallback`?
**Business Use Case:** "A component calculates a complex benefit summary from a large list of claims. This calculation is slow and runs on every re-render. How can `useMemo` help? What if you are passing a function to a child component that causes it to re-render?"

**Answer:** Both are for performance optimization, but they memoize different things:
*   **`useMemo` memoizes a value.** For the slow benefit summary calculation, I would wrap it in `useMemo`. This ensures the calculation only re-runs when its dependencies change. It returns the cached *value*.
*   **`useCallback` memoizes a function.** If I'm passing a function as a prop to a memoized child component, I would wrap it in `useCallback`. This ensures the function reference itself doesn't change on every parent render, preventing the child from re-rendering. It returns the cached *function*.

### 15. How do you handle error boundaries in React?
**Business Use Case:** "If a single component, like a 'Claim Notes' widget, crashes due to an API error, how can you prevent the entire application from crashing and instead show a user-friendly fallback UI?"

**Answer:** I would use an **Error Boundary**. An Error Boundary is a class component that implements either `getDerivedStateFromError()` or `componentDidCatch()`. I would wrap the 'Claim Notes' widget with this Error Boundary component. If the widget throws an error during rendering, the boundary will "catch" it, update its own state, and render a fallback UI (like a "Something went wrong" message). This prevents the error from propagating up and crashing the entire application.