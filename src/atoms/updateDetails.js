import { atom } from 'recoil';

export const updateDetailsState = atom({
    key: 'updateDetailsState',
    default: {
        update: false,
    },
});