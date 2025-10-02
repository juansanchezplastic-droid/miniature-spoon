// Analyze this code and explain the issue: 
// for (let i = 0; i < 5; i++) { setTimeout(() => console.log(i), 1000); }

/*
Result:
5
5
5
5
5
*/


// Given an array of user objects, write a function that groups them by 'role'.
// input = [...]

// const users = [
//     {name: "Juan", role: "ADMIN"},
//     {name: "Veronica", role: "USER"},
//     {name: "Lucas", role: "USER"}
// ]

// function groupBy (users) {
//     const result = {};
//     for (let user of users) {
//         let role = user.role
//         if (result[role]) {
//             result[role].push(user)
//         } else {
//             result[role] = [user]
//         } 
//     }
//     console.log(result);
//     return result;
// }

// groupBy(users);


// Fetch and display data with loading and error states.
// export const Component = () => {
//     const [user, setUser] = useState();
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState();

//     useEffect(() => {
//         const getUserData = async () => {
//             try {
//                 setIsLoading(true);
//                 const res = await fetch("https://...");
//                 const userData = res.json()
//                 setUser(userData);
//                 setIsLoading(false);
//             } catch (error) {
//                 setError(error);
//             }
//         }
//         getUserData();
//     }, [])

//     return (
//         <div>
//             {
//                 isLoading 
//             }
//         </div>
//     )
// }


// What's wrong with this? : 
// useEffect(() => fetchData(), []);

// useEffect(() => {
//     const fetchData = async () => { 
//         // ...
//     }
// }, []);



// Create a custom hook that toggles a boolean value.

// const customHook = (value) => {
//     return {
//         result: !value
//     };
// }





// Write a simple Express.js route to create a new user.

// router.post('/user', createNewUser)

// export createNewUser = (req, res) => {
//     try {
//         const newUser = await User.create({
//             ...req.body
//         })
//         return newUser;
//     } catch (error) {
//         console.error(error);
//     }
// }


// You have a Redux reducer that is mutating the state directly, causing bugs. Identify the problem and fix the reducer:
// function cartReducer(state = { items: [] }, action) {
//   switch(action.type) {
//     case 'ADD_ITEM':
//       const newState = [...state.items, action.payload];
//       return newState;
//     default:
//       return state.items;
//   }
// }



// How do you write a simple test using React Testing Library?
// const STATE = {
//     items: [
//         // ...
//     ]
// }

// it('cartReducer should return the items array', () => {
//     const result = cartReducer(STATE)
//     (typeof result.length).shouldBe('number');
// })


// How do you write a simple unit test using Jest?
// const USERS = [
//     {name: "Juan", role: "ADMIN"},
//     {name: "Veronica", role: "USER"},
//     {name: "Lucas", role: "USER"}
// ]

// it('should group users by role', () => {
//     const result = groupBy(USERS);
//     result.shouldBe({
//         ADMIN: [ { name: 'Juan', role: 'ADMIN' } ],
//         USER: [
//             { name: 'Veronica', role: 'USER' },
//             { name: 'Lucas', role: 'USER' }
//         ]
//     });
// })


// Write a middleware that logs the method and URL of each incoming request.
const logMiddleware = (req, res) => {
    console.log({
        method: req.method,
        url: req.href
    });
    res.next();
}

