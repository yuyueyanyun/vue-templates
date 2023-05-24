<script setup lang="ts">
import { ref, reactive, unref, onUnmounted } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'

type stConfig = {
  name: string,
  keyPath: {
    keyPath: string,
    autoIncrement: boolean,
  },
  createIndex: {
    name: string,
    unique?: boolean,
  }[],
}
type Mode = 'readonly' | 'readwrite' | 'versionchange'
interface StoreData {
  [key: string]: any;
}

class IndexedDB {
  private readonly name: string;
  private readonly version: number;
  private readonly storeConfig: stConfig;
  private DB: IDBDatabase | null;
  constructor(nameDB: string, version: number, store: stConfig) {
    this.name = nameDB;
    this.version = version;
    this.storeConfig = store;
    this.DB = null;
  }
  open():Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.name, this.version);
      request.onerror = (event) => {
        reject("Database error："+ (event.target as IDBOpenDBRequest).error);
      };
      request.onsuccess = (event) => {
        resolve((event.target as IDBOpenDBRequest).result);
      };
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        // 判断是否存在，如果不存在为该数据库创建一个对象仓库
        if(!db.objectStoreNames.contains(this.storeConfig.name)) {
          const objectStore = db.createObjectStore(this.storeConfig.name, this.storeConfig.keyPath);
          if (this.storeConfig.createIndex?.length > 0) {
            this.storeConfig.createIndex.forEach((item) => {
              objectStore.createIndex(item.name, item.name, { unique: item.unique });
            });
          }
        }
      };
    })
  }
  async begintStore(mode:Mode):Promise<IDBObjectStore> {
    if(!this.DB) {
      this.DB = await this.open();
    }
    const transaction = this.DB.transaction(this.storeConfig.name, mode);
    return transaction.objectStore(this.storeConfig.name);
  }

  async add(data: object):Promise<Event>  {
    return new Promise(async(resolve, reject) => {
      const objectStore = await this.begintStore('readwrite')
      const request = objectStore.add(data)
      request.onsuccess = (event) => {
        resolve(event)
      };
      request.onerror = (event) => {
        reject(event)
      };
    })
  }
  async put(data: object):Promise<Event>  {
    return new Promise(async(resolve, reject) => {
      const objectStore = await this.begintStore('readwrite')
      const request = objectStore.put(data)
      request.onsuccess = (event) => {
        resolve(event)
      };
      request.onerror = (event) => {
        reject(event)
      };
    });
  }
  async delete(key: number | string):Promise<Event>  {
    return new Promise(async(resolve, reject) => {
      const objectStore = await this.begintStore('readwrite')
      const request = objectStore.delete(key)
      request.onsuccess = (event) => {
        resolve(event)
      };
      request.onerror = (event) => {
        reject(event)
      };
    });
  }
  async get(key?: number|string):Promise<StoreData[]>  {
    return new Promise(async(resolve, reject) => {
      const objectStore = await this.begintStore('readonly')
      let request;
      if(key === undefined) {
        request = objectStore.getAll()
      } else {
        request = objectStore.get(key)
      }
       
      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result)
      };
      request.onerror = (event) => {
        reject(event)
      };
    });
  }
  close() {
    this.DB?.close()
  }
}
const COLUMNS = [
  { prop: "id", label: "主键" },
  { prop: "createIndex", label: "索引" },
  { prop: "name", label: "name" }
]
type Rows = {
  id?: number | string,
  createIndex?: string,
  name?: string,
}
const formEl = ref<FormInstance | null>(null)
const tableData = ref<Rows[]>([]);
const dialogFormVisible = ref(false);
const form = ref<Rows>({});
const rules = reactive<FormRules>({
  createIndex: { required: true, message: '请输入', trigger: 'blur' },
});
const handleClose = () => {
  dialogFormVisible.value = false;
  form.value = {};
  formEl.value?.resetFields()
}
const myDB = new IndexedDB('myDB', 1, {
  name: 'storg',
  keyPath: {
    keyPath: 'id',
    autoIncrement: true
  },
  createIndex: [
    {name: 'createIndex', unique: true }
  ]
})
const getData = async ():Promise<void> => {
  tableData.value = await myDB.get();
}

const handleEdit = async(row: Rows):Promise<void> => {
  form.value = {
    ...row
  };
  dialogFormVisible.value = true;
}
const handleDel = async(row: Rows):Promise<void> => {
  if(!row.id) return
  await myDB.delete(row.id);
  getData();
}

const handleConfirm = async():Promise<void> => {
  await formEl.value?.validate();
  const {createIndex, name, id } = unref(form);
  if(id) {
    await myDB.put({
      id,
      createIndex,
      name,
    });
  } else {
    await myDB.add({
      createIndex,
      name,
    });
  }
  getData();
  dialogFormVisible.value = false
}

getData();
onUnmounted(() => {
  myDB.close()
})
</script>
<template>
  <el-button type="primary" size="small"  @click="dialogFormVisible = true">新增</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column 
      v-for="item in COLUMNS" 
      :key="item.prop"
      :prop="item.prop" 
      :label="item.label" 
     />
     <el-table-column  label="操作"  fixed="right" >
      <template #default="{row}">
        <el-button link type="primary" size="small" @click="handleEdit(row)">
          编辑
        </el-button>
        <el-button link type="primary" size="small"  @click="handleDel(row)">删除</el-button>
      </template>
     </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible" title="新增/编辑" @close="handleClose">
    <el-form
      ref="formEl"
      :model="form"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="索引" prop="createIndex">
        <el-input v-model.trim="form.createIndex" />
      </el-form-item>
      <el-form-item label="name" prop="name">
        <el-input v-model.trim="form.name" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="handleConfirm">
        确认
      </el-button>
    </template>
  </el-dialog>
</template>
<style scoped lang="scss">
.el-table :deep(table){
  margin: 0;
}
</style>
