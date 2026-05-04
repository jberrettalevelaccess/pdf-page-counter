# PDF ZIP Page Counter (Chrome Extension)

A Chrome extension that allows users to upload a ZIP file containing multiple PDF files and returns a list of each PDF with its page count.

✅ All processing is done **locally in the browser**
✅ No data transmission
✅ No file uploads
✅ Works fully offline after install

---

## Features

- Upload a `.zip` file containing PDFs
- Automatically extracts PDFs in memory
- Counts number of pages per PDF
- Displays filename + page count

---

## Tech Stack

- **Chrome Extension (Manifest V3)**
- **JSZip** – ZIP extraction in-memory
- **PDF.js** – PDF page counting

---

## Installation (Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the `pdf-zip-page-counter` folder

---

## Privacy

This extension:
- Does NOT upload files
- Does NOT make network requests
- Does NOT store files or results
- Processes everything locally in memory

---

## Limitations

- Password-protected PDFs are not supported
- Very large ZIP files may impact performance
- Corrupt PDFs may fail gracefully

---

## License

MIT
