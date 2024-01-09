    <!-- src/views/DataList.vue -->
    <template>
        <div>
        <ul>
            <li v-for="item in data" :key="item.id">
            {{ item.judul }} - {{ item.deskripsi }}
            <button @click="editData(item)">Edit</button>
            <button @click="deleteData(item.id)">Delete</button>
            </li>
        </ul>
    
        <!-- Form untuk menambah dan mengedit data -->
        <form v-if="showForm" @submit.prevent="submitForm">
            <label>Judul:</label>
            <input v-model="formData.judul" required>
    
            <label>Deskripsi:</label>
            <input v-model="formData.deskripsi" required>
    
            <button type="submit">{{ editingId ? 'Update' : 'Tambah' }}</button>
        </form>
        </div>
    </template>
    
    <script>
    import DataService from '@/services/DataService';
    
    export default {
        data() {
        return {
            data: [],
            showForm: false,
            formData: { id: null, judul: '', deskripsi: '' },
            editingId: null
        };
        },
        mounted() {
        this.loadData();
        },
        methods: {
        loadData() {
            DataService.getAllData().then(response => {
            this.data = response.data;
            });
        },
        editData(data) {
            // Menampilkan form edit dan mengisi data ke dalam formData
            this.showForm = true;
            this.formData = { ...data };
            this.editingId = data.id;
        },
        deleteData(id) {
            DataService.deleteData(id).then(() => {
            this.loadData(); // Memuat ulang data setelah penghapusan
            });
        },
        submitForm() {
            if (this.editingId) {
            // Update data
            DataService.updateData(this.formData).then(() => {
                this.loadData();
                this.resetForm();
            });
            } else {
            // Tambah data baru
            DataService.addData(this.formData).then(() => {
                this.loadData();
                this.resetForm();
            });
            }
        },
        resetForm() {
            // Mereset form setelah menambah atau mengedit data
            this.showForm = false;
            this.formData = { id: null, judul: '', deskripsi: '' };
            this.editingId = null;
        }
        }
    };
    </script>