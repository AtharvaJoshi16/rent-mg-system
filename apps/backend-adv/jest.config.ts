module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.ts",
    "!jest.config.ts",
    "!**/*.d.ts",
    "!interfaces/**/*.ts",
    "!constants/**/*.ts",
    "!**/node_modules/**",
    "!**/dist/**", // Exclude the output directory
    "!**/*.test.{js|ts}", // Exclude test files
  ],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageReporters: ["text", "lcov", "json", "html"],
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],
};
