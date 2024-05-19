const PDFDocument = require('pdfkit');
const fs = require('fs');

function createCertificate(name, course, codigoIngresso) {
  const doc = new PDFDocument({ layout: 'landscape' });

  doc.pipe(fs.createWriteStream(certificado - ${name}.pdf));

  // Configurações de estilo
  doc.fontSize(28)
    .font('Helvetica-Bold')
    .text('Certificado de Conclusão', { align: 'center', underline: true });

  doc.moveDown(2)
    .fontSize(24)
    .font('Helvetica')
    .text('Certificamos que:', { align: 'center' });

  doc.moveDown(1.5)
    .fontSize(26)
    .font('Helvetica-Bold')
    .text(name, { align: 'center' });

  doc.moveDown(1.5)
    .fontSize(24)
    .font('Helvetica')
    .text('Concluiu com êxito o curso:', { align: 'center' });

  doc.moveDown(1.5)
    .fontSize(26)
    .font('Helvetica-Bold')
    .text(course, { align: 'center' });

  doc.moveDown(3)
    .fontSize(20)
    .font('Helvetica')
    .text(UUID: ${codigoIngresso}   Data: ${new Date().toLocaleDateString('pt-BR')}, { align: 'center' });

  doc.end();
}

module.exports = createCertificate;