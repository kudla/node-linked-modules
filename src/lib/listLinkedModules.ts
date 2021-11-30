import { listLinkedTargets } from './listLinkedTargets'

export const listLinkedModules = (dir: string, template = '{}', delimiter = ' ') => listLinkedTargets(dir)
    .map(modulePath => template.replace('{}', modulePath))
    .join(delimiter)
