# Ticket System 

A React-based Customer Support Zone to display, track, and resolve customer tickets.
- **Live Link:** [Live Link](https://online-ticket-system.netlify.app/)
- **GitHub:** [GitHub Link](https://github.com/syedbayzid82849/TicketSystem.git)


## ❓ Assignment Questions

**1. What is JSX, and why is it used?**
JSX (JavaScript XML) its allow to write HTML-like code inside JavaScript in React.

**2. What is the difference between State and Props?**
State: 
1. Component’s own data
2. Can change/update
Props:
1. Data passed from parent to child
2. Read-only (cannot change)

**3. What is the useState hook, and how does it work?**
useState is a React Hook used to create and update state in a component.

**4. How can you share state between components in React?**
Keep the state in the parent component and pass it to child components using props.
Flow:
Parent → Props → Child

**5. How is event handling done in React?**
React handles events using event handler functions.
```jsx
<button onClick={() => handleComplete(ticket)}>Complete</button>
```


---

## 🛠️ Tech Stack
React.js · Vite · Tailwind CSS · JavaScript

---

## ⚙️ Getting Started

```bash
git clone https://github.com/syedbayzid82849/TicketSystem.git
cd TicketSystem
npm install
npm run dev
