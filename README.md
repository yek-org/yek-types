<!-- <p align="center">
	<h1>
	YK-Types
	</h1>
</p> -->

# YK-Types (unstable)

> real-time real-type

## we working hard to first release ✌️

<p align="center">
<img src="https://www.reactiongifs.us/wp-content/uploads/2018/06/giphy-2-1.gif" align="center" alt="hard-working jim gif" height="300px"  width="500px" />
<img src="https://uploads-ssl.webflow.com/59a79980dd2379000163014e/5b9ffafe9819e8e3b9fd1efe_CozyCal_Chris%27s%20mode%201.gif" align="center" alt="hard-working cat gif"  width="300px" />
<p align="center">
Please Wait... We are working hard too 😁
</p>
</p>

## Install

> not available, but we try as soon

## Require

### CommonJS

```js
const { type, types, is } = require('@yek/types');
```

### ES6/ES2015

```js
import { type, types, is } from '@yek/types';
```

## Types

- Native
  - string : `type.string`
  - number : `type.number`
  - boolean : `type.boolean`
  - object : `type.object`
  - array : `type.array`
  - function : `type.function`
  - async/await : `type.async`
  - generator function : `type.generator`
  - promise : `type.promise`
  - set, map, Symbole, ...
- Extra
  - numeric \* : `type.numeric`
  - digit : `type.digit`
  - float : `type.float`
  - sign : `type.sign`
  - unsign : `type.unsign`
  - toggle \* : `type.toggle`
  - interface \* : `type.interface` & `interface(...).implement(...)` | `new Interface`
  - tuple \* : `type.tuple` & `tuple(...).match/all(...)` | `new Tuple`
  - list \*\* : `type.list` & `list(...).match/all(...)` | `new List`
  - other under brain 🧠
- Middleware

### Extra Types (YKTypes)

#### Numeric

premitive numbers and string numbers (e.g. '12', '1.2', '-13', '-3.2');

> NOTE :\
> unlike JS, can't support other numeric (hex, octa, etc.)\
> But, may in future ...

#### Toggle

like boolean but not only `true` or `false`

- **`'true'`**

```js
is('true', types.toggle); // true
is('true', types.boolean); // nativly-true
is('true', types.string); // nativly-true
toggle('true'); // true
```

- **`'yes'`**

```js
is('yes', types.toggle); // true
is('yes', types.boolean); // nativly-true
is('yes', types.string); // nativly-true
toggle('yes'); // true
```

- **`'ok'`**

```js
is('ok', types.toggle); // true
is('ok', types.boolean); // nativly-true
is('ok', types.string); // nativly-true
toggle('ok'); // true
```

- **`'on'`**

```js
is('on', types.toggle); // true
is('on', types.boolean); // nativly-true
is('on', types.string); // nativly-true
toggle('on'); // true
```

- **`'false'`**

```js
is('false', types.toggle); // true
is('false', types.boolean); // nativly-true
is('false', types.string); // nativly-true
toggle('false'); // false
```

- **`'off'`**

```js
is('off', types.toggle); // true
is('off', types.boolean); // nativly-true
is('off', types.string); // nativly-true
toggle('off'); // false
```

- **`'no'`**

```js
is('no', types.toggle); // true
is('no', types.boolean); // nativly-true
is('no', types.string); // nativly-true
toggle('no'); // false
```

- **`true`**

```js
is(true, types.toggle); // true
is(true, types.boolean); // nativly-true
is(true, types.string); // nativly-false
toggle(true); // true
```

- **`false`**

```js
is(false, types.toggle); // true
is(false, types.boolean); // nativly-true
is(false, types.string); // nativly-false
toggle(false); // false
```

- **`1`**

```js
is(1, types.toggle); // true
is(1, types.boolean); // nativly-false
is(1, types.string); // nativly-false
toggle(1); // true
```

- **`0`**

```js
is(0, types.toggle); // true
is(0, types.boolean); // nativly-false
is(0, types.string); // nativly-false
toggle(0); // false
```

### Tuple

C++, Python and Typescript who languages support tuples, but what is tuple?\
tuple is fixed array that element are type no value for orderd type checking

```js
let MyTuple = tuple(string, number, boolean);
let MyValues = ['elment-1', 'elment-2', true];
```

### List

alike `Enum` and `Tuple` but only check value is one of the list items or no,

```js
list('all', 'read', 'write').match('create');
// [Yek/Error] : list().match argument should contain `('all', 'read', 'write')`, `'create'` invalid! 👎

list('all', 'read', 'write').match('read'); // Okay 👍
```

why? because some time you need to work with enumic values like https codes, but not all them, only few some,\
below code example :

```js
const httpCodes = list(200, 404, 500);

httpCodes.match(303);
// [Yek/Error] : list().match argument should contain `(200, 404, 500)`, `303` invalid! 👎

httpCodes.match(404); // Okey 👍
```

this in `Enum` :

```js
const HttpCodes = enum({ OK: 200, PAGE_NOT_FOUND: 404, SERVER_ERROR: 500 });
HttpCodes.OK; // return 200, and not checkable!!!
HttpCodes[200]; // return 'OK', and not checkable again!!!
```

access :

- `type.list` for checking type
- `list` for create

### FixList

alike `List` but only check fix values and not like `Tuple` for check type or not like `Enum` to element access.
only checked fixed array :

```js
flist('all', 'read', 'write').match(['all', 'write']);
// [Yek/Error] : 'read' undefined, but is REQUIRED 👎

flist('all', 'read', 'write').match(['all', 'read', 'write']); // no error, its okay 👍
```

so why?
because in `List` matter list should contain value but in `Tuple` we just check type if it is string and no more, and in `Enum` we just have accessible Constant values no Type Checking, for Example on Above we need to give `'all'` first and then `'read'` next,
but in `tuple` code be like :

```js
tuple(string, string, string).match('read', 'write', 'all'); // no error
```

Becuase no matter value order but type order required

in `list` like :

```js
list('all', 'read', 'write').match(['all', 'read', 'write']);
// [Yek/Error] : value should be 'all', 'read', 'write', `array` type invalid!
```
