import { listLinkedTargets } from '../listLinkedTargets'

import { formatTargetPaths } from './formatTargetPaths'

export const listLinkedModules = (dir: string, template = '{}', delimiter = ' ') => formatTargetPaths(
    listLinkedTargets(dir),
    template,
    delimiter
)
