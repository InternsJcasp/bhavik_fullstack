// OpenDB & Create Store

const DB_NAME = "TaskManagerDB";
const DB_VERSION = 1;
const STORE_NAME = "tasks";

let db = null;

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // Jab DB Pehli baar banegi ya Version Badhega
    request.onupgradeneeded = (event) => {
        const database = event.target.result;

        if(!database.ObjectStoreNames.contains(STORE_NAME)){
            const ObjectStore = database.createObjectStore(STORE_NAME, {
                keypath: "id",
                autoIncrement: true,
            })
        }
    }


  });
};
