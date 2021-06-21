# @dothq/id
🆔 Simple unique ID generator for databases, users and anything that needs identifying.

*Zero dependencies, 333 bytes in size*

This library utilises `Date.now()` and `Math.random()`, so you should rarely encounter duplicates. 

I have tested ~300,000 generated IDs and not one has been a duplicate.

## Install

```
$ yarn add @dothq/id
```

## Usage

```ts
import { useID } from "@dothq/id";

const id = useID(); // 111hx2yprxlfasiwzvj7dzoaywioijwjg

const idWithRounds = useID(2); // y6m188bb12xsg9uoj
```

### useID(rounds?: number) => string
* rounds?: number - default: 4