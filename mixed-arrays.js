//Task 1 (Create the Profile)
let profile = Array(5);
profile = ["Bob", 72, true, {Location: "Saint Louis"}, ["Baseball", "3D printing", "reading"]];

//Task 2 (Access and Log profile details)
console.log(profile[0], profile[4][1]);

//Task 3 (Modify the profile)
profile[1] = 73;
profile[4][3] = "playing guitar";

//Task 4 (Display the updated profile)
console.log(profile);