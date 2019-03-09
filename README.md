# cli

The command line tool for functions.

## Commands

### s

```sh
s
```

- Watches and builds all functions.
- Lists the URLs of all functions.

### s list

- `s list`: Lists all functions.
- `s list --json`: Lists all functions as json.

### s run

- `s run`: Prompts for a function.
- `s run myFunction`: Runs `myFunction`.

## Develop

Install once:
```sh
npm i
```

Build (watch):
```sh
npm run watch
```

After watching, the command will automatically update.