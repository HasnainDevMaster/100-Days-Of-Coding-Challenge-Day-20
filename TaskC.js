"use strict";
// 100 Days Of Coding Challenge!
/** Question 60:
Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the users name and age.*/
//-------------------------------------------------------------------------------------------------------------------
// Self-running user profile
let userProfile = (function () {
    // The user's details are kept inside this closure
    let name = "Ali"; // User's name
    let age = 23; // User's age
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        },
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // Output: Name: Ali, Age: 23
