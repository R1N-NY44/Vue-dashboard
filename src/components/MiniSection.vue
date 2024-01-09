<!-- <template>
    <div class="mini-section">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button>{{ buttonText }}</button>
    </div>
</template>

<script>
    export default {
        props: {
        title: String,
        description: String,
        buttonText: String
        }
    };
</script> -->

    <!-- MiniSection.vue -->
    <template>
        <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="buttonClick">{{ buttonText }}</button>
        </div>
    </template>
    
    <script>
    export default {
        props: ['title', 'description', 'buttonText'],
        methods: {
        buttonClick() {
            // Tambahkan logika untuk penanganan klik tombol di sini
            // Misalnya, navigasi ke halaman lain atau melakukan tindakan tertentu.
        }
        }
    };
    </script>
    
    <style scoped>
    /* Styling khusus untuk komponen MiniSection */
    </style>
    