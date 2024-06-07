// A switch statement where we desire fall through behavior
// In other words, multiple different matches that will have the same code execute

let match = "A Wonderful Person!";

switch (match) {
  case "A Wonderful Person!":
    console.log("here we go!");
  case "anyone":
    console.log("with anyone");
  case "Town Resident":
    console.log("in town");
    break;
  case "Bad News":
  default:
    console.log("No thanks");
}

console.log("all done!");
