import {REGION} from '../settings';
import {call} from 'gcx';

/**
 * Runs a function.
 */
export default async (cmd: {
  name: string,
}) => {
  console.log('run');
  try {
    await call({
      region: REGION,
      functionName: name,
    });
  } catch (e) {
    console.log(`Errors: ${e}`);
  }
};
