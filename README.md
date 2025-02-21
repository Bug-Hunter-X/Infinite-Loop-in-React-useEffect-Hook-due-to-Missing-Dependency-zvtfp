# React useEffect Hook - Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by a missing dependency in the dependency array.

## The Bug
The `bug.js` file contains a `MyComponent` that uses `useEffect` to log the current count. However, the dependency array is missing `setCount`, leading to an infinite loop. Every render triggers the effect, which updates the count and causes another render, and so on.

## The Solution
The `bugSolution.js` file demonstrates the correct usage of `useEffect`. By including `setCount` in the dependency array, the effect only runs when `setCount` changes (which is when the button is clicked).