import { atom } from 'recoil';

// Effect for persisting Recoil state with client-side only localStorage access
// const localStorageEffect = (key) => ({ setSelf, onSet }) => {
//     if (typeof window === 'undefined') return; // Ensure localStorage is only used on client

//     // Initialize the atom with the value from localStorage
//     const savedValue = localStorage.getItem(key);
//     if (savedValue != null) {
//         setSelf(JSON.parse(savedValue));
//     }

//     // Subscribe to changes in the atom and save to localStorage
//     onSet((newValue) => {
//         if (newValue === null) {
//             localStorage.removeItem(key);
//         } else {
//             localStorage.setItem(key, JSON.stringify(newValue));
//         }
//     });
// };

// Create Recoil atom with persistence
// export const userCredentials = atom({
//     key: 'userCredentials',
//     default: {
//         isLogin: false,
//         displayName: null,
//         email: null,
//         uuid: null,
//         stsTokenManager: {},
//     },
//     effects: [localStorageEffect('userCredentials')], // Attach persistence effect
// });


const localStorageEffect = (key) => ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
        const savedValue = localStorage?.getItem(key);
        if (savedValue != null) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue, _, isReset) => {
            if (isReset) {
                localStorage?.removeItem(key);
            } else {
                localStorage?.setItem(key, JSON.stringify(newValue));
            }
        });
    }
};

export const userCredentials = atom({
    key: 'userCredentials',
    default: [], // default value
    effects: [
        localStorageEffect('userCredentials'), // persist with local storage
    ],
});