import { clearScreen } from 'ansi-escapes';
import { watch } from 'chokidar';

/**
 * Watches the local directory and uploads changed functions.
 */
export default async () => {
  process.stdout.write(clearScreen);
  console.log('watch');

  const rootDir = '.';

  // One-liner for current directory, ignores .dotfiles
  watch(rootDir, {
    ignored: /(^|[\/\\])\../
  }).on('all', (event, path) => {
    console.log(event, path);
    if (event === 'change') {}
  });
};
