import globals from "globals"
import pluginJs from "@eslint/js"


export default {

  languageOptions:
  {
    globals: globals.browser
  },
  ...pluginJs.configs.recommended,
  rules: {
    "no-console": "warn",
    "no-unused-vars": "error",
    "prefer-const": "error", // Advertencia si se usa console.log
    "eqeqeq": "error", // Error si no se usa ===
    "semi": ["error", "never"],
    "block-no-empty": 0// Error si falta un punto y coma
  }

}