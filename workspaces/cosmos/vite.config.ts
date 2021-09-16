import { UserConfig, UserConfigFn } from 'vite';

const config: UserConfigFn = async () => {
  const config: UserConfig = {
    esbuild: {
      // Avoid conflicting with "import React"
      jsxFactory: '_implicit_React.createElement',
      jsxFragment: '_implicit_React.Fragment',
      jsxInject: 'import _implicit_React from "react"',
    },
  };

  return config;
};

export default config;
