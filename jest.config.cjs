/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    // Adicione mais mapeamentos conforme necessário
  },
}
