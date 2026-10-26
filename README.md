# React Conditional Rendering – Name Validation

## 📌 Project Overview

This project demonstrates **Conditional Rendering in React** using functional components and the `useState` Hook.

The application allows users to enter their name and click the **Submit** button. Based on the input, it displays a success or error message.

- If the input field is empty, an error message is displayed.
- If the user enters a name, a success message is displayed.

## 🎯 Objectives

- Understand conditional rendering in React.
- Learn how to use the `useState` Hook.
- Handle user input using the `onChange` event.
- Handle button clicks using the `onClick` event.
- Dynamically display messages based on conditions.
- Apply conditional CSS classes for success and error messages.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML
- CSS

## ⚙️ Features

1. **Name Input:** Allows users to enter their name.
2. **Input Validation:** Checks whether the name field is empty.
3. **Error Message:** Displays "Please enter your name" when the input is empty or contains only whitespace.
4. **Success Message:** Displays "Name looks Good" when the user enters a valid name.
5. **Dynamic Styling:** Applies different CSS classes depending on the validation result.
6. **Conditional Rendering:** Displays the message only when the `msg` state contains a value.

## 🧠 Concepts Explained

### 1. useState Hook

The `useState` Hook manages the component's state.

```jsx
const [name, setName] = useState("");
const [msg, setMsg] = useState("");
const [type, setType] = useState("");
```

- `name`: Stores the user's input.
- `msg`: Stores the message to display.
- `type`: Stores the message type, such as `success` or `error`.

### 2. Handling User Input

```jsx
onChange={(e) => setName(e.target.value)}
```

Whenever the user types in the input field, the `onChange` event updates the `name` state with the entered value.

### 3. Conditional Logic

```jsx
const handleCheck = () => {
  if (name.trim() === "") {
    set
```
