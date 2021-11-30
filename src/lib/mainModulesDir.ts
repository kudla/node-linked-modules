export const mainModulesDir = () => {
    const [modulesPath] = require.main.paths

    return modulesPath
}