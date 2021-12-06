# linked-modules
Tended to help resolve real locations for linked npm module dependencies

### Requirements
Oriented on usage and tested within Linux like os environments

### Usage
#### Prerequisites
```zsh
npm i -D linked-modules
npm link ../some-local-module-a ../some-local-module-a
```
### package.json script examples
```json
{
    "scripts": {
        "enum": "echo `linked-modules`",
        "format-template": "echo `linked-modules '--source {}'`",
        "delimiter": "echo `linked-modules '{}' '\n'`",
        "real-case-example": "nodemon --watch ./src `linked-modules '--watch {}'`"
    }
}
```
```sh
npm run -s enum
# /home/dev/projects/some-local-module-a /home/dev/projects/some-local-module-b

npm run -s format-template
# --source /home/dev/projects/some-local-module-a --source /home/dev/projects/some-local-module-b

npm run -s delimiter
# /home/dev/projects/some-local-module-a
# /home/dev/projects/some-local-module-b
```

### Module example
```ts
import { mainModulesDir, listLinkedTargets, listLinkedModules } from 'linked-modules'

console.log(
    listLinkedTargets(mainModulesDir())
)
// ['/home/dev/projects/some-local-module-a', '/home/dev/projects/some-local-module-b']

console.log(
    listLinkedModules(mainModulesDir(), '--source {}', '\n')
)
// --source /home/dev/projects/some-local-module-a
// --source /home/dev/projects/some-local-module-b

```
