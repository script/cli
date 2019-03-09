import { PROJECT_ID, REGION } from '../settings';

import { deploy } from 'gcx';

interface iDeployFunction {
  name: string,
  entryPoint: string,
  targetDir: string,
};

/**
 * Deploys a cloud function.
 * @param {string} name The title of the function endpoint.
 * @param {string} entryPoint The function name.
 * @param {string} targetDir The path to the source directory.
 * @example 
 */
export const deployFunction = async ({ name, entryPoint, targetDir }: iDeployFunction) => {
  console.log(`Deploying ${name}...`);
  try {
    await deploy({
      name,
      region: REGION,
      runtime: 'nodejs8',
      targetDir, // important!
      description: 'test desc',
      retry: true,
      // maxInstances: 10, Alpha feature that needs whitelisting
      triggerHTTP: true,
      triggerEvent: 'http',
      entryPoint,
      project: PROJECT_ID,
    });
  } catch (e) {
    console.log(`Errors: ${e}`);
  }
};