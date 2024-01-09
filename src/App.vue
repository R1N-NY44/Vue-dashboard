<!-- App.vue -->
<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <div v-for="dataItem in dataList" :key="dataItem.id">
            <MiniSection :title="dataItem.judul" :description="dataItem.deskripsi" :buttonText="buttonText"/>
        </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MiniSection from './components/MiniSection.vue';
import DataService from '@/services/DataService';

export default {
    name: 'App',
    components: {
        HelloWorld,
        MiniSection
    },
    data() {
        return {
            dataList: [], // Menyimpan seluruh data dari DataService
            buttonText: 'Click me >//<'
        };
    },
    created() {
        // Memuat semua data dari file JSON saat komponen App dibuat
        DataService.getAllData().then(response => {
            this.dataList = response.data;
        });
    }
};
</script>

<style>
/* Styling umum untuk aplikasi */
</style>
