// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierPlugin from "eslint-plugin-prettier";

export default withNuxt([
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      semi: ["error", "always"],
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
    },
  },
]);
