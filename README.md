# React Chat Application

## How to run

1. `npm install`
2. `npm run api-server`
3. `npm start`

## Frontend stack

I chose to go with React since this is the framework I'm most experienced with. I used functional components with hooks, created a new app with Create React App and added the following dependencies:

- redux and redux-thunk for state management
- react-router-dom for navigation
- redux dev tools
- classnames
- axios for API requests

Features:

- Uses React Atomic Design for easy reausability
- Class names loosely follow the BEM convention, class names are based on the component name
- Reusuable DoorDash inspird 'token' CSS variables
- Messages scroll to the bottom when a new message is added
- 'Minutes online' information is dynamically updated every minute
- Polling for new messages
- Text input is submitted on Enter key press
- Code layout, spacing and precise naming made for good readability
- Comments added to impove readability
- Functional components and many pure functions for testability

Todos:

- Update current users in room list when using in second window
- Add error handling for network requests
- Set pending and error states in redux
- Make side panel collapsable on mobile view
- Add logout button
- Add message reactions
- Add 'user is typing' functionality
- Add tests
