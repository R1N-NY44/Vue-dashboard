// src/services/DataService.js
import data from '@/data/data.json';

export default {
    getAllData() {
        return Promise.resolve(data);
    },
    addData(newData) {
        newData.id = data.length + 1;
        data.push(newData);
        return Promise.resolve(newData);
    },
    updateData(updatedData) {
        const index = data.findIndex(item => item.id === updatedData.id);
        if (index !== -1) {
            data[index] = updatedData;
            return Promise.resolve(updatedData);
        } else {
            return Promise.reject(new Error('Data not found'));
        }
    },
    deleteData(id) {
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            const deletedItem = data.splice(index, 1)[0];
            return Promise.resolve(deletedItem);
        } else {
            return Promise.reject(new Error('Data not found'));
        }
    }
};
