import { countryService } from "../services/countryService.js";

export const countryGetAction = (req, res) => {
  res.send(countryService.get());
};
