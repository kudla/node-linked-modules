import { Dirent } from 'fs'
import { join as joinPath } from 'path'

export const absolutePath = (parentDir: string) =>  (dirent: Dirent) => joinPath(parentDir, dirent.name)
