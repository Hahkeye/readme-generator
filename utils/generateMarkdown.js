// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var lic = {
  "Apache":"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GPLv2":"[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "GPLv3":"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3":"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Creative Commons":"[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
};



function renderLicenseBadge(license) {
  if(lic[license]){
    return lic[license];
  }
}

function renderLicenseText(license){
  if(lic[license]){
    return license;
  }
}

function renderLicense(license){
  return [renderLicenseBadge(license),renderLicenseText(license)];
}

module.exports = renderLicense;
