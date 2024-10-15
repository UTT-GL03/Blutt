import dummyjson from "dummy-json";
import fs from "fs";

const helpers = {
  destinations() {
    return dummyjson.utils.randomArrayItem([
      "Troyes",
      "Paris",
      "Lyon",
      "Villeurbanne",
      "Aulnay-sous-bois",
      "Les Sables d'Olonne",
      "Nantes",
      "Orléans",
      "Marseille",
      "Reims",
      "Bordeaux",
      "Grenoble",
      "Macôn",
      "Nice",
      "Monaco",
      "Cannes",
      "Lille",
    ]);
  },
};

const template = fs.readFileSync("sample_data.hbs", { encoding: "utf8" });

const result = dummyjson.parse(template, { helpers });
fs.writeFile("sample_data.json", result, (err) => {
  if (err) {
    console.error("Error when writing data to sample_data.json");
    return;
  }
  console.log("Successfully wrote data to sample_data.json");
});
