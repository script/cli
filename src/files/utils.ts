const { existsSync, readdirSync, lstatSync } = require('fs');

/**
 * Gets a list of directories within the functions directory.
 * @returns {string[]} A list of paths to directories.
 */
const BASE_DIR = './functions';
export const getFunctionDirectories = () => {
  const directories: any = [];
  // Check if folder exists.
  if (!existsSync(BASE_DIR)) {
    return [];
  }
  // Read folder.
  readdirSync(BASE_DIR).map((subdir: string) => {
    const dir = `${BASE_DIR}/${subdir}`;
    if (lstatSync(dir).isDirectory()) {
      directories.push(subdir);
    }
  });
  return directories;
};