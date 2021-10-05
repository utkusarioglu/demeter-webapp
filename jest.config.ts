import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'es2019',
      },
    },
  },
  automock: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '\\.cache'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
