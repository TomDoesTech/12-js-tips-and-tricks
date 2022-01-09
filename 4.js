/*
 * 4. Use objects instead of switch statements
 */

const value = "TomDoesTech";

switch (value) {
  case "Web Dev Simplified":
    console.log("Awesome");
    break;
  case "Fireship":
    console.log("Just hit 1M");
    break;
  case "TomDoesTech":
    console.log("Subscribe to TomDoesTech!");
    break;
  default:
    console.log("Boring");
}

const channels = {
  "Web Dev Simplified": "Awesome",
  Fireship: "Just hit 1M",
  TomDoesTech: "Subscribe to TomDoesTech!",
};

const result = channels[value] || "Boring";
