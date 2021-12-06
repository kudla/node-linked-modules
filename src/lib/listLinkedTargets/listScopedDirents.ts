import { Dirent } from 'fs'
import { isModuleScope } from '../isModuleScope'
import { absolutePath } from './absolutePath'

export const listScopedDirents = (
    dirents: Dirent[],
    parentDir: string
): string[] => dirents
        .filter(dirent => dirent.isDirectory() && isModuleScope(dirent.name))
        .map(absolutePath(parentDir))

