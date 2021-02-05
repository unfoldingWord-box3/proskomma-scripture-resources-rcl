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
        <LoadSpec
            type={"usfmString"}
            org={"unfoldingWord"}
            lang={"en"}
            abbr={"ust"}
            usfm={'\\id MRK Mark\'s Gospel, translated by Mark\n' +
            '\\toc1 The Gospel of Mark\n' +
            '\\toc2 Mark\n' +
            '\\toc3 Mk\n' +
            '\\c 1\n' +
            '\\v 1\n' +
            '\\p\n' +
            'This is how the Good News of JC began...\n'}
        />
    </ProskommaContentLoader>
</ProsKommaContextProvider>;
```
