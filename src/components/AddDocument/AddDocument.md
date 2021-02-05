# AddDocument

Add a document to Proskomma.

```jsx
import AddDocument from './AddDocument';
import ProskommaContextProvider from '../../ProskommaContext';
import { UWProskomma } from 'uw-proskomma';

function Component() {
  return (
    <ProskommaContextProvider pkClass={UWProskomma}>
      <AddDocument />
    </ProskommaContextProvider>
  );
}

<Component />;
```
