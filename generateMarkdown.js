function renderLicenseSection(license) {
  let licenseInfo;
  switch (license) {
    case "Apache2":
      licenseInfo =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

      break;
    case "BSD-3_Clause":
      licenseInfo =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

      break;
    case "MIT":
      licenseInfo =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

      break;
    case "Mozilla Public License2.0":
      licenseInfo =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      return ";";
  }
  return "## License \n ${license}";
}

module.exports = renderLicenseSection;
