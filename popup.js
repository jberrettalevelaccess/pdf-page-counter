// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  chrome.runtime.getURL("lib/pdf.worker.min.js");

const zipInput = document.getElementById("zipInput");
const results = document.getElementById("results");

zipInput.addEventListener("change", async (event) => {
  results.innerHTML = "";

  const file = event.target.files[0];
  if (!file) return;

  try {
    const zipBuffer = await file.arrayBuffer();
    const zip = await JSZip.loadAsync(zipBuffer);

    const entries = Object.keys(zip.files);

    for (const filename of entries) {
      if (!filename.toLowerCase().endsWith(".pdf")) continue;

      try {
        const pdfData = await zip.files[filename].async("arraybuffer");
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        addResult(filename, pdf.numPages);
      } catch (err) {
        addResult(filename, "Unable to read PDF");
      }
    }
  } catch (err) {
    addResult("ZIP file", "Failed to read ZIP");
  }
});

function addResult(filename, pages) {
  const li = document.createElement("li");
  li.textContent = `${filename} — ${pages} pages`;
  results.appendChild(li);
}
