import ascii from "ascii-art";
const fs = require("fs");

ascii.font("Hello NodeJS!", "Doom", (err, rendered) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(rendered);
});

try {
    const data = fs.readFileSync("sayings.json", "utf-8");
    console.log("Json data:", data);
} catch (err) {
    console.error("Error reading file:", err);
}
