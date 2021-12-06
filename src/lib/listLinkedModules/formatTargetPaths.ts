export const formatTargetPaths = (paths: string[], template: string, delimiter: string) => paths
    .map(modulePath => template.replace('{}', modulePath))
    .join(delimiter)