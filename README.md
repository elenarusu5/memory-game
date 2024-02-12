# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



/**************************** MEMORY GAME ************************************************************/

Steps:
- Run 'npm run dev' to start the project
- We display the rules of the game
- By clicking on the button, we start a new game, which means fetching data from API and starting the timer
- create an array with duplicated cards and adding 'uniqueId' field to differentiate all the objects from the array
- use lodash shuffle method to shuffle all the cards
- add the result in a state
- create two separate states for the first and second selected card
- compare the selected cards. if they have the same url => the cards are matching and we add a new key 'isMatched' in the 'cards' array for those two objects
- filter all the matched items from 'cards' array. if its length is the same as the length of initial array => all the cards are matched and the game is completed. The timer is stopped.
- we show a message at the end. Reset all the states.


Future Improvements to add/take into consideration: 
- add levels of complexity: easy (8cards), medium (14cards), advanced (20cards)
- add buttons to count the moves and display it when the game is completed
- display timer. add pause functionality
- mobile responsive
- design changes and visual effects