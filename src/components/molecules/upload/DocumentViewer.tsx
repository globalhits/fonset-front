import React from 'react';
import { Document, Page } from 'react-pdf';

interface PDFViewerInterface {
    pdfBase64: string,
}

const PDFViewer: React.FC<PDFViewerInterface> = ({ pdfBase64 }) => {
    return (
        <Document file={{ data: pdfBase64 }}>
            {/* <Page pageNumber={1} /> */}
        </Document>
    );
}

export default PDFViewer;
