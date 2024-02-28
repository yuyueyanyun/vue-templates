<script setup>
import { ref, onMounted } from 'vue'
import { read, utils, writeFile } from 'xlsx';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const file_to_wb = (file) => {
  return new Promise((resolve) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      resolve(read(e.target.result));
    };
    reader.readAsArrayBuffer(file);
  })
}

const excelRef = ref(null)
let wb;
let hot;
const handleUploadChange = async(even) => {
  const files = even?.target?.files || [];
  if (!files) return;
  wb = await file_to_wb(files[0])
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const merges = sheet['!merges'];
  const json= utils.sheet_to_json(sheet, { header: 1, defval: ''});
  hot?.updateSettings({
    data: json,
    mergeCells: (merges || []).map(({ e, s }) => {
      return {
        row: Math.min(s.r, e.r),
        col: Math.min(s.c, e.c),
        rowspan: Math.abs(s.r - e.r) + 1,
        colspan: Math.abs(s.c - e.c) + 1,
      };
    }),
  });
}


onMounted(() => {
  hot = new Handsontable(excelRef.value, {
    data: [],
    rowHeaders: true,
    colHeaders: true,
    height: '100%',
    watch: '100%',
    autoWrapRow: true,
    autoWrapCol: true,
    autoColumnSize: true,
    licenseKey: 'non-commercial-and-evaluation',
    fillHandle: false,
    editor: 'autocomplete',
    headerTooltips: true,
    mergeCells: true,
    dropdownMenu: ["row_above", "row_below", "col_left", "col_right", "remove_row", "remove_col", "---------", "undo", "redo"]
  });
})

const handleExport = () => {
  const sheet = hot?.getSourceData() // 数据
  const json = sheet
    .filter((item, index) => index !== 0)
    .map((row) => {
      return row.reduce((prev, curr, currIndex) => {
        return {
          ...prev,
          [sheet[0][currIndex]]: curr
        }
      }, {})
    })
  // const sheet = hot?.getData() // 数据
  const Meta = hot?.getCellsMeta() // 单元格元数据信息，处理合并。
  const worksheet = utils.json_to_sheet(json);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "sheet0");
  writeFile(workbook, 'output.xlsx' , {
    bookType: 'xlsx',
    // Props: 
  });
}
</script>
<template>
  <div class="box">
   <input type="file" accept=".xlsx, .xls, .xlsm" @change="handleUploadChange"/>
   <button class="excel-btn" type="button" @click="handleExport">导出</button>

   <div class="l-view_excel" >
    <div ref="excelRef"></div>
   </div>
  </div>
</template>
<style scoped>
.l-view_excel {
  height: 200px;
}
.excel-btn {
  padding: 4px 8px;
  border: 1px solid #ccc;
}
</style>
