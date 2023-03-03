// export a specific thing if you dont want to export everything
export const guards = [
    "Hank the tank",
    "Thomas the tank engine",
    "CEPUS"
];

export function addGuard(guard) {
    guards.push(guard);
    return guards;
}

export function getGuards() {
    return guards;
}

// exporting all files from the module
// export default {
//     guards,
//     addGuard, 
//     getGuards
// };
