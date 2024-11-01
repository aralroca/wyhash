# bun-wyhash

[`Bun.hash`](https://bun.sh/docs/api/hashing#bun-hash) **wyhash** algorithm for Node and Deno.

This is the Bun algorithm they use, passing ZIG code to WASM so that it can be used in other runtimes.

If you run this code with Bun, it always runs Bun.hash, while if you are in another JavaScript runtime, it uses the WASM.

## Getting started

Install the package:

```bash
bun install bun-wyhash
```

Then you can use it in your code:

```typescript
import { hash } from "bun-wyhash";

hash("some data here");
// 11562320457524636935n
```
