export default {
    globals: {
        '__IS_DEV__': true,
        '__API__': '',
        '__PROJECT__': 'jest',
        'ts-jest': {
            isolatedModules: true,
        },
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>src'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.s?css$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/config/jest/jest-svg-transformer.js',
    },
    cache: true,
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/reports/unit',
                filename: 'report.html',
                // openReport: true,
                inlineSource: true,
            },
        ],
    ],
    transformIgnorePatterns: ['/node_modules/'],
};
