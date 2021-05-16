module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/types/*', '!src/**/*.styled.tsx'],
    coverageDirectory: "../../applications/client/public/coverage",
    coverageReporters: ['json-summary', 'text', 'lcov'],
    testRunner: require.resolve('jest-circus/runner'),
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    resetMocks: true,
    verbose: true,
}
