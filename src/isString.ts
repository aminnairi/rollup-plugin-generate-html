type isString = (target: any) => boolean

export const isString: isString = (target: any): boolean => Object.prototype.toString.call(target) === '[object String]'
