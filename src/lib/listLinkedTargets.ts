import { readdirSync, realpathSync, Dirent } from 'fs'
import { join as joinPath } from 'path'
import { isModuleScope } from './isModuleScope';

export const listLinkedTargets = (dirPath: string): string[] => {
    const dirents = readdirSync(dirPath, {encoding: 'utf8', withFileTypes: true})

    const absolutePath = (dirent: Dirent) => joinPath(dirPath, dirent.name)

    const plainLinks = dirents
        .filter(dirent => dirent.isSymbolicLink())
        .map(absolutePath)
        .map(linkPath => realpathSync(linkPath))

    const scopedLinks = dirents
        .filter(dirent => dirent.isDirectory() && isModuleScope(dirent.name))
        .map(absolutePath)
        .map(listLinkedTargets)

    return plainLinks.concat(...scopedLinks)

}
