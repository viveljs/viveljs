import path from 'path';
import { UserConfig, UserConfigFn } from 'vite';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const resolvePath = (str: string) => path.resolve(__dirname, str);

const config: UserConfigFn = async () => {
  const config: UserConfig = {
    build: {
      lib: {
        entry: resolvePath('./src/index.ts'),
        name: pkg.name,
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['react', 'react-dom'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            react: 'React',
          },
        },
        plugins: [
          typescript({
            target: 'es2020',
            declaration: true,
            declarationDir: resolvePath('./dist'),
            exclude: [...resolvePath('./node_modules/**')],
            allowSyntheticDefaultImports: true,
          }),
        ],
      },
    },
  };

  return config;
};

export default config;
