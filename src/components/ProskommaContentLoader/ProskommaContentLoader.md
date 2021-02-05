# ProskommaContentLoader

Autoload content into Proskomma.

```jsx
import ProskommaContentLoader from './ProskommaContentLoader';
import ProsKommaContextProvider from '../../ProskommaContext';
import LoadSpec from '../LoadSpec';
import {UWProskomma} from 'uw-proskomma';

<ProsKommaContextProvider pkClass={UWProskomma}>
    <ProskommaContentLoader>
        <LoadSpec
            type={"DCSVolume"}
            org={"unfoldingWord"}
            lang={"hbo"}
            abbr={"uhb"}
            url={"https://git.door43.org/unfoldingWord/hbo_uhb/raw/branch/master"}
        />
    </ProskommaContentLoader>
</ProsKommaContextProvider>;
```
