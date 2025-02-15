const text = "Our emails are user@example.com or firstname.lastname@company.co.uk or user@.com.";
const emailRegex = /\b[\w.-]+@[\w.-]+\.\w+\b/g;
const emails = text.match(emailRegex);
console.log(emails); // Output: ["e.irasetsa@alustudent.com", "firstname.lastname@company.co.uk", user@.com won't be displayed because it doesn't follow the format]