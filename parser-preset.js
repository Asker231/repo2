// parser-preset.js
export default {
  parserOpts: {
    headerPattern: /^(FU-\d+) (.+)$/,
    headerCorrespondence: ["ticket", "subject"],
  },
};
