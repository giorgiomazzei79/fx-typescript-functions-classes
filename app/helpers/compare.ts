export const compare = <ObjectToCompare>(obj1: ObjectToCompare, obj2: ObjectToCompare, k: keyof ObjectToCompare): number => {
    if (obj1[k] < obj2[k]) {
        return -1
    }
    if (obj1[k] > obj2[k]) {
        return 1
    }
    return 0
}