// commitlint.config.js
export default {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(FU-\d+) (feat|fix|refactor): (.+)$/,
      headerCorrespondence: ["ticket", "type", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "header-pattern": (parsed) => {
          const { ticket, type, subject, header } = parsed;

          // Пропускаем merge-коммиты без проверки
          if (header && /^Merge /.test(header)) {
            return [true];
          }

          if (!ticket || !type || !subject) {
            return [
              false,
              "Сообщение должно быть в формате: FU-123 feat/fix/refactor: описание",
            ];
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    "type-empty": [0],
    "subject-empty": [0],
    "header-pattern": [2, "always"],
  },
};
