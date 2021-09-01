import path from 'path';
import { UserConfig, UserConfigFn } from 'vite';
import typescript from '@rollup/plugin-typescript';

const resolvePath = (str: string) => path.resolve(__dirname, str);

const config: UserConfigFn = async () => {
  const config: UserConfig = {
    esbuild: {
      // Avoid conflicting with "import React"
      jsxFactory: '_implicit_React.createElement',
      jsxFragment: '_implicit_React.Fragment',
      jsxInject: 'import _implicit_React from "react"',
    },

    build: {
      lib: {
        entry: resolvePath('./src/components/index.ts'),
        name: 'viveljs',
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
            rootDir: resolvePath('./src/components'),
            declaration: true,
            declarationDir: resolvePath('./dist'),
            exclude: [
              ...resolvePath('./node_modules/**'),
              ...resolvePath('./cosmos'),
            ],
            allowSyntheticDefaultImports: true,
          }),
        ],
      },
    },
  };

  return config;
};

export default config;
