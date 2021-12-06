import { readdirSync, realpathSync } from 'fs'

import { listLinkedDirentPlains } from './listLinkedDirentPlains'
import { listScopedDirents } from './listScopedDirents'

export const listLinkedTargets = (dirPath: string): string[] => {
    const dirents = readdirSync(dirPath, {encoding: 'utf8', withFileTypes: true})

    const plainLinks = listLinkedDirentPlains(
        dirents,
        dirPath,
        linkPath => realpathSync(linkPath)
    )

    const scopedLinks = listScopedDirents(
        dirents,
        dirPath
    ).map(listLinkedTargets)

    return plainLinks.concat(...scopedLinks)

}
