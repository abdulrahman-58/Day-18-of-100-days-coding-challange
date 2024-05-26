// Assalamualaikum @everyone 👋
// 🚀 **Day 18 Challenge: Start Coding!** 🚀
// **Question 52:** Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
var smartphone = {
    make: "Techno",
    model: "Spark 20",
    specs: {
        storage: "256GB",
        screenSize: "6.5 inches",
        batteryLife: "20 Hours",
    },
};
console.log(smartphone);
console.log("\n");
// **Question 53:** Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmerSkills = {
    languages: ["Python", "TypeScript", "JavaScript"],
    tools: ["Git", "Visual Studio Code", "npm"],
    frameWorks: ["React", "Spring Boot", "Angular"]
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameWorks = programmerSkills.frameWorks;
console.log("Language: ".concat(languages[0], ", Tool: ").concat(tools[2], ", Framework: ").concat(frameWorks[1]));
console.log("\n");
// **Question 54:** Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// function creactingObjectWithDynamicKey(key: string, value: string){
//     let dynamicObject = {};
//     dynamicObject[key] = value;
//     return dynamicObject
// }
// let userPreference = creactingObjectWithDynamicKey("theme", "dark");
// console.log(userPreference);
