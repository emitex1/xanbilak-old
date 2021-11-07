/* eslint-disable no-undef */
module.exports = {
  "moduleNameMapper": {
    // "\\.(css|scss|less)$": "babel-jest",

    // "\\.(css|scss|less)$": "<rootDir>/test/__mocks__/styleMock.js",

    "\\.(css|scss|less)$": "identity-obj-proxy",

    // eslint-disable-next-line max-len
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "<rootDir>/test/__mocks__/fileMock.js",
  },
};
