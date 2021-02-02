import React, { Fragment, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { ProskommaContext } from '../../ProskommaContext';

const AddDocument = () => {
  const { pk, setPkChangeId, pkChangeId } = useContext(ProskommaContext);

  const [docLang, setDocLang] = useState('');
  const [docAbbr, setDocAbbr] = useState('');
  const [docContent, setDocContent] = useState('');
  const [docType, setDocType] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const onDialogOpen = () => {
    setDocLang('');
    setDocAbbr('');
    setDocType('');
    setDocContent('');
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  const onFile = ({ target }) => {
    const fr = new FileReader();
    fr.readAsText(target.files[0]);
    fr.onload = (e) => {
      setDocContent(e.target.result);
      setDocType(e.target.result.startsWith('\\') ? 'usfm' : 'usx');
    };
  };

  const onAdd = () => {
    const errors = [];
    if (docLang.length === 0) {
      errors.push('No language specified');
    }
    if (docAbbr.length === 0) {
      errors.push('No abbreviation specified');
    }
    if (docContent.length === 0) {
      errors.push('No content provided');
    }
    if (errors.length === 0) {
      // import without GraphQL for now
      pk.importDocument({ lang: docLang, abbr: docAbbr }, docType, docContent);
      setPkChangeId(pkChangeId + 1);
      setSnackbarSeverity('success');
      setSnackbarMessage(
        `Document Added (docSets: ${pk.nDocSets()}; documents: ${pk.nDocuments()} `
      );
      setSnackbarOpen(true);
      setDialogOpen(false);
    } else {
      setSnackbarSeverity('error');
      setSnackbarMessage(`Error: ${errors.join('; ')}`);
      setSnackbarOpen(true);
    }
  };

  const onSnackbarClose = (e, reason) => {
    if (reason !== 'clickaway') {
      setSnackbarOpen(false);
      setSnackbarMessage('');
    }
  };

  return (
    <Fragment>
      <Button color="primary" onClick={onDialogOpen}>
        Add Document
      </Button>
      <Dialog open={dialogOpen} onClose={onDialogClose}>
        <DialogTitle>Add Document</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="Language"
            InputProps={{ name: 'docLang' }}
            onChange={(e) => setDocLang(e.target.value)}
            value={docLang}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Abbreviation"
            InputProps={{ name: 'docAbbr' }}
            onChange={(e) => setDocAbbr(e.target.value)}
            value={docAbbr}
            fullWidth
          />
          <Button variant="contained" component="label">
            {docContent.length === 0
              ? 'Attach File'
              : `${docType} File Attached (${docContent.length} bytes)`}
            <input type="file" onChange={onFile} hidden />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={onAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={onSnackbarClose}
        autoHideDuration={4000}
      >
        <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
      </Snackbar>
    </Fragment>
  );
};

export default AddDocument;
