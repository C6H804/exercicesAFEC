const ExcelJS = require('exceljs');
const path = require('path');

/**
 * Exports a single-row array to an Excel file
 * @param {Array} rowData - The array representing one row of data
 * @param {string} filename - (Optional) Output filename, default is 'output.xlsx'
 */
async function exportSingleRowToExcel(rowData, filename = 'output.xlsx') {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  worksheet.addRow(rowData);

  const filePath = path.join(__dirname, filename);
  await workbook.xlsx.writeFile(filePath);
  console.log(`Excel file saved as: ${filePath}`);
}



function exoFaceB(maxValue) {
    console.log("n = 1 | a = 1 ");
    console.log("n = 2 | a = 2 ");
    let a = [1,2,2];    for (let n = 3; n < maxValue; n++) {
        for (let i = 0; i < parseInt(a[n-1]); i++) {
            a.push(n);
        }
        // console.log("n = " + n + " | a = " + a[n-1]);
    }
    console.log(a);
    // return a;
    exportSingleRowToExcel(a);
}



exoFaceB(100);