type Input = string | ArrayBufferView | ArrayBuffer | SharedArrayBuffer;
type Seed = number | bigint | undefined;

export function hash(input: Input, seed?: Seed): number;