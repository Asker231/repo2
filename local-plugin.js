// local-plugin.js
export default {
  rules: {
    "header-pattern": (parsed) => {
      // Парсер уже вытащил ticket и subject по нашей регулярке
      const { ticket, subject } = parsed;

      // Проверяем, что формат сообщения соответствует FU-123 описание
      if (!ticket || !subject) {
        return [false, "Сообщение должно быть в формате: FU-xxx feat/fix/refactor: описание"];
      }

      return [true];
    },
  },
};
