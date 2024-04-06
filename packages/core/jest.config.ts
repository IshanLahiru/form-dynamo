import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/setup-jest-env.js'],
  testMatch: ['**/test/**/*.test.[jt]s?(x)'],
  transformIgnorePatterns: [`/node_modules/(?!nanoid)`],
};

export default config;