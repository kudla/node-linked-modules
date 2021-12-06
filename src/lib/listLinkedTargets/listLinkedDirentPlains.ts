import { Dirent } from 'fs'

import { absolutePath } from './absolutePath'

export const listLinkedDirentPlains = (
    dirents: Dirent[],
    parentDir: string,
    realPath: (path: string) => string
): string[] => dirents
        .filter(dirent => dirent.isSymbolicLink())
        .map(absolutePath(parentDir))
        .map(realPath)

