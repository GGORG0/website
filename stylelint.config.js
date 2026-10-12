export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-html/html",
  ],
  ignoreFiles: ["dist/**", ".astro/**", "node_modules/**"],
};
