// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (stringOrNumber)[]

type Guitarist = {
    name?: string,
    active: Boolean,
    albums: stringOrNumberArray,
}

type UserId = stringOrNumber