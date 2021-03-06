import React, {useContext, useEffect, useState} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {ProskommaContext} from '../../ProskommaContext';
// import { getDCSDocuments } from '../../LoadUtils/download';

const ProskommaContentLoader = ({children}) => {
    const {pk, pkChangeId, setPkChangeId} = useContext(ProskommaContext);
    const [processingState, setProcessingState] = useState("Idle");

    useEffect(
        () => {
            if (pk.nDocuments() === 0) {
                React.Children.toArray(children)
                    .forEach(
                        // async
                        c => {
                            switch (c.props.type) {
                                case "DCSVolume":
                                    console.log("DCS Volume");
                                    /* await getDCSDocuments(
                                        pk,
                                        c.props.url,
                                        {org: c.props.org, lang: c.props.lang, abbr: c.props.lang}
                                        );

                                     */
                                    break;
                                case "usfmString":
                                    try {
                                        pk.importDocument(
                                            {org: c.props.org, lang: c.props.lang, abbr: c.props.lang},
                                            'usfm',
                                            c.props.usfm
                                        );
                                        setPkChangeId(pkChangeId + 1);
                                    } catch (err) {
                                        console.log(`Could not load document: ${err}`);
                                    }
                                    break;
                                default:
                                    console.log(`Unknown LoadSpec Type '${c.props.type}'`)
                            }
                        }
                    );
            }
        },
        []
    );

    return (
        <CardContent>
            <Typography variant="h6">
                Content Loader - {processingState}
            </Typography>
        </CardContent>
    );
};

export default ProskommaContentLoader;
