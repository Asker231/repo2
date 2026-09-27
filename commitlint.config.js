import localPlugin from "./local-plugin.js";
import parserPreset from "./parser-preset.js";

export default {
 parserPreset:parserPreset,
 plugins:[localPlugin],
  rules: {
    'type-empty':[0],
    'subject-empty':[0],
  },
};
