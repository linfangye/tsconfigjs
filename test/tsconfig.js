export const config = {
  compilerOptions: {
    rootDir: 'lib',
    target: 'ES2018',
    module: 'commonjs',
    lib: ['es2016', 'es2017.object', 'es2017.string', 'es2019'],
    declaration: true,
    outDir: './dist/lib',
    declarationDir: './dist/types',
    strict: true,
    noImplicitAny: true,
    strictNullChecks: true,
    noImplicitThis: true,
    alwaysStrict: true,
    noUnusedLocals: false,
    noUnusedParameters: false,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: false,
    inlineSourceMap: true,
    inlineSources: true,
    experimentalDecorators: true,
    strictPropertyInitialization: false,
    typeRoots: ['./node_modules/@types']
  },
  exclude: ['build', 'node_modules', 'dist', 'test']
}