import { resolveCompany, resolveLocation, resolveProfile } from "./api.js";
import render from "./render.js";

fetch(resolveProfile("1"))
  .then((res) => res.json())
  .then((profileData) => {
    const fetchCompany = fetch(resolveCompany(profileData.companyId));

    return Promise.all(
      profileData,
      fetchCompany.then((res) => res.json())
    ).then(([profileData, companyData]) => {
      const fetchLocation = fetch(resolveLocation(companyData, locationId));
    });
  });
