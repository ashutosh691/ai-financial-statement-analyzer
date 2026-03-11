import { extractTextFromPDF } from "../services/pdfService.js";

export const uploadReport = async (req, res) => {
  try {

    const filePath = req.file.path;

    const extractedText = await extractTextFromPDF(filePath);

    res.json({
      message: "Report uploaded successfully",
      file: req.file.filename,
      preview: extractedText.substring(0, 500)
    });

  } catch (error) {

    res.status(500).json({
      error: "Failed to process report"
    });

  }
};