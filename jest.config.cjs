module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle CSS imports (if you import CSS in components)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle module path aliases
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // Optional: collect coverage
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};