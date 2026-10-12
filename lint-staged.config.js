export default {
  "*.astro": [
    "eslint --fix --max-warnings=0",
    "stylelint --fix --max-warnings=0",
    "prettier --write",
  ],
  "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": [
    "eslint --fix --max-warnings=0",
    "prettier --write",
  ],
  "*.{css,html}": ["stylelint --fix --max-warnings=0", "prettier --write"],
  "*.{json,jsonc,md,mdx,yaml,yml}": "prettier --write",
};
