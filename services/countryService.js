import { readFileSync } from "fs";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dateAddress = path.join(__dirname, "..", "model/data.json");

export const countryService = {
  get: () => {
    const countries = readFileSync(dateAddress, "utf-8");
    return JSON.parse(countries);
  },
};

export default {
  countryService,
};
