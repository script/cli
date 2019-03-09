import {getFunctionDirectories} from '../files/utils';
/**
 * Lists all local functions.
 */
export default async (cmd: {}) => {
  console.log('# List of functions');
  const dirs = getFunctionDirectories();
  dirs.map((d: string) => {
    console.log(d);
  })
};
