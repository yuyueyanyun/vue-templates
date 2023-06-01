<script setup lang="ts">
import { ref, onUnmounted } from 'vue';

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

type Rows = {
  id?: number | string,
  createIndex?: string,
  name?: string,
}
type propType = 'id'|'createIndex'|'name'

const COLUMNS = [
  { prop: "id", label: "主键" },
  { prop: "createIndex", label: "索引" },
  { prop: "name", label: "name" }
]
const tableData = ref<Rows[]>([]);

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
const handleAdd = async () => {
  var person= prompt("请输入索引值","");
  if(person) {
    await myDB.add({
      createIndex: person,
    });
    getData();
  }
}
const handleEdit = async(prop:propType ,row: Rows):Promise<void> => {
  if(prop === 'id') return
  const {id, createIndex,  name} = row
  var person= prompt("请输入", row[prop]);
  if(person) {
    await myDB.put({
      id,
      createIndex,
      name,
      [prop]: person,
    });
    getData();
  }
}
const handleDel = async(row: Rows):Promise<void> => {
  if(!row.id) return
  await myDB.delete(row.id);
  getData();
}

getData();
onUnmounted(() => {
  myDB.close()
})
</script>
<template>
  <button type="button"  @click="handleAdd">新增</button>
  <table style="width: 100%">
    <tr>
      <th v-for="item in COLUMNS" :key="item.prop">
      {{ item.label }}
      </th>
      <th>操作</th>
    </tr>
    
    <tr v-for="(row, index) in tableData" :key="index">
      <td 
        v-for="item in COLUMNS"
        :key="item.prop" 
        @click="handleEdit(item.prop as propType, row)"
        :class="[{ 'click_td': item.prop !== 'id' }]"
      >
        {{ row[item.prop as propType] }}
      </td>
      <td>
        <button type="button" @click="handleDel(row)">删除</button>
      </td>
    </tr>
  </table>
</template>
<style scoped>
@property --base_color {
  syntax: '<color>';
  inherits: false;
  initial-value: #79bbff;
}
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid rgba(60, 60, 68, 0.12);
  padding: 8px 16px;
}

button,
.click_td {
  color: var(--base_color);
  cursor: pointer; 
}

.click_td:hover {
  color: #fff;
  background-color: var(--base_color);
}
</style>
