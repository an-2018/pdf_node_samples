const pdf = require('pdf-poppler')
const path = require('path')

console.log(__dirname)
let file = path.join(__dirname, `assets/pdf/sample2.pdf`)

/*{
    title: 'CADe_S1',
    author: 'lenovo_legion',
    producer: 'Microsoft: Print To PDF',
    creationdate: '12/14/72 17:30:26 Cabo Verde Standard Time',
    moddate: '12/14/72 17:30:26 Cabo Verde Standard Time',
    tagged: 'no',
    userproperties: 'no',
    suspects: 'no',
    form: 'none',
    javascript: 'no',
    pages: '1',
    encrypted: 'no',
    page_size: '612 x 792 pts (letter)',
    page_rot: '0',
    file_size: '94588 bytes',
    optimized: 'no',
    pdf_version: '1.7',
    width_in_pts: 612,
    height_in_pts: 792
  }
  */
const opts = {
    format: 'png',
    out_dir: path.join(__dirname, `assets/image/`),
    out_prefix: path.basename(file, path.extname(file)),
    // page: '1',
    // page_ranges: '1-2',
    // password: '',
    resolution: '300',
}

pdf.info(file)
    .then((pdfinfo) => {
        console.log(pdfinfo)
    })

pdf.convert(file, opts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })