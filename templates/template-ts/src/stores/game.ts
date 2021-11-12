import { atomWithProxy } from 'jotai/valtio';
import { proxy } from 'valtio';

const stateProxy = proxy({ index: 0, scene: 'opening' });
const globalStateAtom = atomWithProxy<{ [key: string]: any }>(stateProxy, {
  sync: true,
});

export { globalStateAtom, stateProxy };
