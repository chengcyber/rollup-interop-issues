# Install

```
yarn install
```

# React Color Demo

```
yarn workspace react-color-demo start-with-build
```

## issue

output:

```
[ 'propTypes', 'defaultProps' ]

The business code should be like:
import { ChromePicker } from "./dist/react-color.js";
```

business code does not get the `ChromePicker` named export from bundled `react-color`.
