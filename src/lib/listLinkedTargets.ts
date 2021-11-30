import { readdirSync, realpathSync } from 'fs'
import { join as joinPath } from 'path'

export const listLinkedTargets = (dirPath: string) => {
    return readdirSync(dirPath, {encoding: 'utf8', withFileTypes: true})
        .filter(dirent => dirent.isSymbolicLink())
        .map(linkDirent => joinPath(dirPath, linkDirent.name))
        .map(linkPath => realpathSync(linkPath))
}
