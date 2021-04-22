module.exports = {
    rootDir: '../../',
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@Core/(.*)$': '<rootDir>/src/core/$1',
        '^@Constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@Components/(.*)$': '<rootDir>/src/components/$1',
        '^@Utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@Config/(.*)$': '<rootDir>/config/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
    globals: {
        CONFIG_NAME: 'base',
    },
    testMatch: ['**/?(*.)(test).ts'],
};
