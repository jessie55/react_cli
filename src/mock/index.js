import { registerMocks } from './utils';
import allMocks from './mockData';

export default function registerAllMocks() {
  if (process.env.WITH_MOCK === 'true') {
    registerMocks(allMocks);
  }
}

