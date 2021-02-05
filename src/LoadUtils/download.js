const Axios = require("axios");
const YAML = require('js-yaml-parser');
import 'core-js';

const getDCSDocuments = async (pk, baseURL, selectors, book) => {
    const content = [];
    await Axios.request(
        {method: "get", "url": `${baseURL}/manifest.yaml`}
    )
        .then(
            async response => {
                const manifest = YAML.safeLoad(response.data);
                const bookPaths = manifest.projects.map(e => e.path.split("/")[1]);
                for (const bookPath of bookPaths) {
                    const pathBook = bookPath.split(".")[0].split('-')[1];
                    if (book && pathBook !== book) {
                        continue;
                    }
                    try {
                        await Axios.request(
                            {method: "get", "url": `${baseURL}/${bookPath}`}
                        )
                            .then(response => {
                                if (response.status !== 200) {
                                    throw new Error("Bad download status");
                                }
                                content.push(response.data);
                            })
                    } catch (err) {
                    }
                }
            }
        );
    pk.importDocuments(selectors, "usfm", content, {});
}

module.exports = { getDCSDocuments };
