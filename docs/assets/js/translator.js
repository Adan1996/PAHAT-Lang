/**
 * PAHAT Documentation Auto-Translator using Lingva API & Local Dictionary
 * Supports instant bilingual toggle (Indonesian <-> English)
 */

(function () {
    // Public Lingva API Instances (with automatic fallback)
    const LINGVA_INSTANCES = [
        'https://lingva.ml/api/v1',
        'https://lingva.lunar.icu/api/v1',
        'https://lingva.garudalinux.org/api/v1',
        'https://lingva.selea.gq/api/v1'
    ];

    // Pre-translated dictionary for instant 0ms toggle
    const DICTIONARY = {
        // Sidebar & Navigation
        "v2.4.2 Docs": "v2.4.2 Docs",
        "Pengenalan": "Introduction",
        "Tentang PAHAT": "About PAHAT",
        "Metadata": "Metadata",
        "Tahap Awal": "Getting Started",
        "Dasar Bahasa": "Language Basics",
        "Variabel": "Variables",
        "Tipe Data": "Data Types",
        "Operator": "Operators",
        "Input & Output": "Input & Output",
        "Komentar": "Comments",
        "Kontrol Alur": "Control Flow",
        "Percabangan": "Branching",
        "Perulangan": "Loops",
        "Switch Case": "Switch Case",
        "Try Catch": "Try Catch",
        "Struktur Data & Fungsi": "Data Structures & Functions",
        "Array": "Array",
        "Object": "Object",
        "JSON": "JSON",
        "Fungsi": "Functions",
        "Modul": "Modules",
        "Standard Library": "Standard Library",
        "Core Builtin": "Core Builtin",
        "Math": "Math",
        "String": "String",
        "File": "File",
        "OS": "OS",
        "Time": "Time",
        "Thread": "Thread",
        "HTTP": "HTTP",
        "Extension": "Extension",
        "Visual Studio Code": "Visual Studio Code",
        "Lainnya": "Others",
        "Contoh Lengkap": "Full Example",
        "Ringkasan Fitur": "Feature Summary",
        "Lisensi": "License",

        // Hero Section
        "Documentation Guide v2.4.2": "Documentation Guide v2.4.2",
        "🚀 PAHAT Programming Language": "🚀 PAHAT Programming Language",
        "PAHAT (Pemrograman Analitis Berbasis Heuristik dan Arsitektur Terpadu) adalah bahasa pemrograman expressive & lightweight dengan sintaks intuitif berbasis bahasa Indonesia.": "PAHAT (Analytical Programming Based on Heuristics and Integrated Architecture) is an expressive & lightweight programming language with intuitive syntax based on the Indonesian language.",
        "Download for Windows": "Download for Windows",
        "Download for Linux": "Download for Linux",

        // Prerequisites Section
        "Prasyarat Sistem (Pre-requisites)": "System Pre-requisites",
        "Sebelum menjalankan interpreter PAHAT-Lang, pastikan sistem Anda memenuhi kebutuhan berikut:": "Before running the PAHAT-Lang interpreter, make sure your system meets the following requirements:",
        "Sistem Operasi:": "Operating System:",
        "Windows 10/11 (64-bit) atau Linux (Ubuntu 20.04+/Debian).": "Windows 10/11 (64-bit) or Linux (Ubuntu 20.04+/Debian).",
        "Terminal/CLI:": "Terminal/CLI:",
        "Akses ke Command Prompt, PowerShell, atau Terminal Linux untuk mengeksekusi biner interpreter.": "Access to Command Prompt, PowerShell, or Linux Terminal to execute the interpreter binary.",

        // About Section
        "👨‍💻 Tentang PAHAT": "👨‍💻 About PAHAT",
        "PAHAT dibuat oleh Syahdan Masyhuri sebagai bahasa pemrograman yang berfokus pada kesederhanaan sintaks, keterbacaan, dan pengalaman pemrograman yang dekat dengan bahasa Indonesia.": "PAHAT was created by Syahdan Masyhuri as a programming language focusing on syntax simplicity, readability, and a programming experience close to the Indonesian language.",
        "PAHAT berusaha menghadirkan pengalaman pemrograman yang ringan, ekspresif, dan mudah dipahami, tanpa menghilangkan konsep-konsep fundamental seperti variabel, operator, kontrol alur, fungsi, struktur data, JSON, standard library, dan modul.": "PAHAT strives to deliver a lightweight, expressive, and easy-to-understand programming experience without losing fundamental concepts such as variables, operators, control flow, functions, data structures, JSON, standard library, and modules.",
        "\"PAHAT — sederhana untuk dibaca, ringan untuk digunakan.\" 🚀": "\"PAHAT — simple to read, lightweight to use.\" 🚀",
        "Dibuat dengan ❤️ oleh Syahdan Masyhuri.": "Made with ❤️ by Syahdan Masyhuri.",

        // Metadata Table
        "📌 Metadata": "📌 Metadata",
        "Properti": "Property",
        "Nilai": "Value",
        "Nama": "Name",
        "Kepanjangan": "Full Name",
        "Pembuat": "Creator",
        "Versi": "Version",
        "Status": "Status",
        "Ekstensi File": "File Extension",
        "Bahasa Sintaks": "Syntax Language",
        "Bahasa Indonesia": "Indonesian",
        "Paradigma": "Paradigm",
        "Prosedural, Imperatif, Fungsional": "Procedural, Imperative, Functional",

        // Menjalankan Interpreter
        "▶️ Menjalankan Interpreter": "▶️ Running the Interpreter",
        "Menggunakan REPL pada terminal/command line dengan mengetikkan pahat.": "Using REPL on terminal/command line by typing pahat.",
        "Menggunakan file dengan extensi .pahat.": "Using a file with .pahat extension.",

        // Variabel & Lexical Scope
        "🔤 Variabel": "🔤 Variables",
        "PAHAT menggunakan sintaks sederhana untuk membuat variabel dengan operator penugasan =. Penulisan baris dieksekusi dengan diakhiri tanda titik koma ;.": "PAHAT uses simple syntax to create variables with the assignment operator =. Statements are executed ending with a semicolon ;.",
        "PAHAT menggunakan penetapan tipe data secara dinamis berdasarkan nilai yang diberikan. Variabel dapat berubah tipe selama program berjalan.": "PAHAT uses dynamic data typing based on assigned values. Variables can change types during program execution.",
        "PAHAT mendukung lexical / block scope. Setiap blok kode { ... }, blok kondisi jika / lainnya, blok perulangan selama / ulang, dan blok percabangan pilih / kasus memiliki frame variabel tersendiri (block frame) yang terisolasi.": "PAHAT supports lexical / block scope. Each code block { ... }, condition block jika / lainnya, loop block selama / ulang, and switch block pilih / kasus has its own isolated variable frame (block frame).",
        "Detail Mekanisme Lexical Scope:": "Lexical Scope Mechanism Details:",
        "Pencarian Variabel:": "Variable Lookup:",
        "Pencarian variabel menelusuri rantai frame dari block frame saat ini hingga ke global frame.": "Variable lookup traverses the frame chain from the current block frame up to the global frame.",
        "Mutasi vs Deklarasi:": "Mutation vs Declaration:",
        "Jika variabel sudah dideklarasikan di scope luar, perubahan nilai akan memutasi variabel tersebut. Jika belum ada, variabel baru akan dibuat di dalam block frame terdalam.": "If a variable is already declared in an outer scope, value changes will mutate that variable. If not present, a new variable will be created in the innermost block frame.",
        "Pembersihan Otomatis:": "Automatic Cleanup:",
        "Variabel yang dibuat di dalam blok akan dibebaskan secara otomatis saat keluar dari blok dan tidak dapat diakses dari luar scope.": "Variables created inside a block are automatically freed when exiting the block and cannot be accessed outside the scope.",
        "Propagasi Sinyal Aliran:": "Control Signal Propagation:",
        "Kata kunci kembalikan, hentikan, dan lanjutkan merambat secara aman keluar dari rantai blok scope.": "Keywords kembalikan, hentikan, and lanjutkan propagate safely out of the block scope chain.",

        // Tipe Data
        "🧩 Tipe Data": "🧩 Data Types",
        "Bilangan bulat.": "Integers.",
        "Bilangan desimal yang dipisahkan tanda titik .": "Decimal numbers separated by a dot .",
        "Teks menggunakan tanda kutip ganda (\"...\") atau kutip tunggal ('...'). PAHAT mendukung escape sequence seperti \\n, \\t, \\r, \\\", dan \\'.": "Text using double quotes (\"...\") or single quotes ('...'). PAHAT supports escape sequences like \\n, \\t, \\r, \\\", and \\'.",
        "Nilai logika menggunakan true dan false.": "Boolean values using true and false.",
        "PAHAT menggunakan nol sebagai representasi nilai kosong.": "PAHAT uses nol as representation of null value.",

        // Operator
        "🧮 Operator": "🧮 Operators",
        "Operator Aritmatika": "Arithmetic Operators",
        "Operator Perbandingan": "Comparison Operators",
        "Operator Logika": "Logical Operators",
        "Fungsi": "Function",
        "Contoh": "Example",
        "Penjumlahan": "Addition",
        "Pengurangan / Unary Minus": "Subtraction / Unary Minus",
        "Perkalian": "Multiplication",
        "Pembagian": "Division",
        "Modulo (Sisa Bagi)": "Modulo (Remainder)",
        "Pangkat (Exponentiation)": "Power (Exponentiation)",
        "Sama dengan": "Equal to",
        "Tidak sama dengan": "Not equal to",
        "Lebih kecil": "Less than",
        "Lebih besar": "Greater than",
        "Lebih kecil atau sama": "Less than or equal to",
        "Lebih besar atau sama": "Greater than or equal to",
        "AND": "AND",
        "OR": "OR",
        "XOR": "XOR",
        "NOT (Negasi)": "NOT (Negation)",

        // Input & Output
        "🖨️ Input dan Output": "🖨️ Input and Output",
        "Untuk menampilkan nilai ke layar digunakan fungsi cetak().": "To display values on the screen, use the cetak() function.",
        "PAHAT menyediakan fungsi scan() untuk menerima input dari pengguna melalui terminal. Nilai yang dibaca oleh scan() berupa string": "PAHAT provides the scan() function to receive user input via the terminal. The value read by scan() is a string",
        "Untuk mengubah input menjadi tipe numerik, gunakan fungsi ke_int() untuk integer dan ke_float() untuk float.": "To convert input to numeric types, use the ke_int() function for integers and ke_float() for floats.",

        // Komentar
        "📝 Komentar (Comments)": "📝 Comments",
        "Komentar digunakan untuk memberi catatan pada kode tanpa mempengaruhi eksekusi program. PAHAT mendukung dua jenis komentar:": "Comments are used to annotate code without affecting program execution. PAHAT supports two types of comments:",
        "1. Komentar Satu Baris (Single-line)": "1. Single-line Comment",
        "Gunakan simbol // untuk menulis komentar satu baris.": "Use the // symbol to write a single-line comment.",
        "2. Komentar Multi Baris (Multi-line)": "2. Multi-line Comment",
        "Gunakan blok /* ... */ untuk menulis komentar yang mencakup beberapa baris sekaligus.": "Use the /* ... */ block to write comments spanning multiple lines.",

        // Control Flow
        "🔀 Percabangan": "🔀 Branching",
        "PAHAT menggunakan kata kunci jika untuk mengevaluasi kondisi dan lainnya untuk alternatif kondisi.": "PAHAT uses the jika keyword to evaluate conditions and lainnya for alternative conditions.",
        "🔁 Perulangan": "🔁 Loops",
        "Hentikan Iterasi — hentikan": "Stop Iteration — hentikan",
        "Gunakan hentikan untuk menghentikan perulangan secara paksa.": "Use hentikan to forcibly stop a loop.",
        "🔀 Pilihan Kondisi (Switch Case)": "🔀 Switch Case",
        "Menggunakan kata kunci pilih, kasus, dan bawaan. Menggunakan perilaku no fall-through.": "Using keywords pilih, kasus, and bawaan. Uses no fall-through behavior.",
        "🛡️ Penanganan Error (Try-Catch)": "🛡️ Error Handling (Try-Catch)",
        "PAHAT menyediakan fitur penanganan error (exception/error handling) terintegrasi menggunakan kata kunci coba, tangkap, dan lempar. Fitur ini memungkinkan program untuk menangkap runtime error (seperti pembagian dengan nol atau variabel yang belum terdefinisi) tanpa membuat program crash atau berhenti mendadak.": "PAHAT provides built-in exception/error handling features using keywords coba, tangkap, and lempar. This feature allows programs to catch runtime errors (such as division by zero or undefined variables) without causing the program to crash or abruptly terminate.",

        // Data Structures & Functions
        "📦 Array": "📦 Array",
        "Array didefinisikan menggunakan kurung siku [...]. Elemen diakses berdasarkan indeks berbasis 0.": "Arrays are defined using square brackets [...]. Elements are accessed via 0-based indexing.",
        "🗂️ Object": "🗂️ Object",
        "PAHAT mendukung object literal untuk menyimpan pasangan key-value.": "PAHAT supports object literals to store key-value pairs.",
        "🧾 JSON": "🧾 JSON",
        "PAHAT menyediakan fungsi bawaan baca_json() dan tulis_json() sebagai core builtin (tanpa perlu di-import).": "PAHAT provides built-in functions baca_json() and tulis_json() as core builtins (no import required).",
        "⚙️ Fungsi": "⚙️ Functions",
        "Fungsi dideklarasikan menggunakan kata kunci fungsi dan kembalikan.": "Functions are declared using keywords fungsi and kembalikan.",
        "Fungsi tanpa nama dapat dibuat dan disimpan ke variabel, dijadikan argumen fungsi (higher-order function), disimpan dalam object/array, atau dipanggil secara langsung (IIFE).": "Anonymous functions can be created and stored in variables, passed as function arguments (higher-order functions), stored in objects/arrays, or called directly (IIFE).",
        "📦 Modul": "📦 Modules",
        "Gunakan kata kunci impor diikuti string path module (ekstensi .pahat tidak ditulis).": "Use the impor keyword followed by the module path string (.pahat extension omitted).",

        // Standard Library
        "📚 Standard Library": "📚 Standard Library",
        "🧠 Core Builtin": "🧠 Core Builtin",
        "Dapat digunakan langsung tanpa impor:": "Can be used directly without import:",
        "Module math": "Module math",
        "Module string": "Module string",
        "Module file": "Module file",
        "Menyediakan operasi file: file.ada(), file.baca(), file.tulis(), file.tambah(), file.hapus(), dan file.ukuran().": "Provides file operations: file.ada(), file.baca(), file.tulis(), file.tambah(), file.hapus(), and file.ukuran().",
        "Module os": "Module os",
        "Menyediakan operasi sistem: os.cwd(), os.getenv(), os.platform(), os.env(), dan os.exit().": "Provides system operations: os.cwd(), os.getenv(), os.platform(), os.env(), and os.exit().",
        "Module time": "Module time",
        "Menyediakan operasi waktu: time.sekarang(), time.timestamp(), dan time.tidur().": "Provides time operations: time.sekarang(), time.timestamp(), and time.tidur().",
        "Module thread": "Module thread",
        "Module http": "Module http",

        // Section Examples & License
        "🧪 Contoh Program Lengkap": "🧪 Full Example Program",
        "📜 Lisensi": "📜 License",
        "PAHAT menggunakan lisensi MIT.": "PAHAT uses the MIT license."
    };

    /**
     * Fetch translation from Lingva API with multi-instance fallback
     */
    async function fetchLingvaTranslation(text, src = 'id', target = 'en') {
        const cleanText = text.trim();
        if (!cleanText) return cleanText;

        // Check localStorage cache
        const cacheKey = `lingva_tr_${src}_${target}_${cleanText}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) return cached;

        for (const baseUrl of LINGVA_INSTANCES) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3500);

                const url = `${baseUrl}/${src}/${target}/${encodeURIComponent(cleanText)}`;
                const response = await fetch(url, { signal: controller.signal });
                clearTimeout(timeoutId);

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.translation) {
                        localStorage.setItem(cacheKey, data.translation);
                        return data.translation;
                    }
                }
            } catch (err) {
                // Fallback to next Lingva instance
            }
        }

        return null;
    }

    /**
     * Show/Hide Translation Loading Badge
     */
    function showLoadingStatus(show, message = "Translating with Lingva API...") {
        let badge = document.getElementById('translationStatus');
        if (!badge) {
            badge = document.createElement('div');
            badge.id = 'translationStatus';
            badge.className = 'translation-status';
            document.body.appendChild(badge);
        }

        if (show) {
            badge.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${message}`;
            badge.classList.add('show');
        } else {
            badge.classList.remove('show');
        }
    }

    /**
     * Translate or Restore text for an element while preserving icons, code blocks, & tags
     */
    async function translateElement(el, targetLang) {
        // Skip code blocks, pre tags, code headers
        if (el.closest('pre') || el.closest('.code-container') || el.classList.contains('code-header')) {
            return;
        }

        // Save original Indonesian HTML/text if not saved yet
        if (!el.dataset.idHtml) {
            el.dataset.idHtml = el.innerHTML;
        }

        if (targetLang === 'id') {
            // Restore original Indonesian
            if (el.dataset.idHtml) {
                el.innerHTML = el.dataset.idHtml;
            }
            return;
        }

        // Check dictionary first for 0ms speed
        const rawText = el.textContent.trim();
        if (DICTIONARY[rawText]) {
            const iconMatch = el.querySelector('i');
            if (iconMatch) {
                el.innerHTML = iconMatch.outerHTML + ' ' + DICTIONARY[rawText].replace(/^[^\s]+\s+/, (m) => iconMatch.textContent ? '' : '');
            } else {
                el.innerHTML = DICTIONARY[rawText];
            }
            return;
        }

        // For elements with icons (e.g. <a><i ...></i> Text</a>)
        const iIcon = el.querySelector('i');
        const iconHtml = iIcon ? iIcon.outerHTML : '';
        const textToTranslate = iIcon ? el.textContent.replace(iIcon.textContent, '').trim() : el.textContent.trim();

        if (!textToTranslate) return;

        // Dictionary check for text part
        if (DICTIONARY[textToTranslate]) {
            el.innerHTML = iconHtml ? `${iconHtml} ${DICTIONARY[textToTranslate]}` : DICTIONARY[textToTranslate];
            return;
        }

        // Auto-translate using Lingva API
        const translated = await fetchLingvaTranslation(textToTranslate, 'id', 'en');
        if (translated) {
            el.innerHTML = iconHtml ? `${iconHtml} ${translated}` : translated;
        }
    }

    /**
     * Main Page Translator
     */
    async function setLanguage(lang) {
        localStorage.setItem('pahat_docs_lang', lang);

        // Sync all switch checkboxes
        document.querySelectorAll('.lang-toggle-input').forEach(input => {
            input.checked = (lang === 'en');
        });

        // Sync active class on labels
        document.querySelectorAll('.lang-label-id').forEach(el => el.classList.toggle('active', lang === 'id'));
        document.querySelectorAll('.lang-label-en').forEach(el => el.classList.toggle('active', lang === 'en'));

        // Query all translatable elements
        const selectors = [
            'aside .nav-title',
            'aside .nav-links a',
            'aside .accordion-header span',
            '.hero-badge',
            '.hero h1',
            '.hero p',
            '.btn-download',
            'section h2',
            'section h3',
            'section h4',
            'section p',
            'section blockquote',
            'section li',
            'table th',
            'table td'
        ];

        const elements = document.querySelectorAll(selectors.join(', '));

        if (lang === 'en') {
            let needsLingvaApi = false;

            // Check if any element requires API call
            elements.forEach(el => {
                const text = el.textContent.trim();
                if (text && !DICTIONARY[text]) {
                    needsLingvaApi = true;
                }
            });

            if (needsLingvaApi) {
                showLoadingStatus(true, "Auto-translating via Lingva API...");
            }

            // Translate all elements
            const promises = Array.from(elements).map(el => translateElement(el, 'en'));
            await Promise.all(promises);

            showLoadingStatus(false);
        } else {
            // Restore to ID
            elements.forEach(el => translateElement(el, 'id'));
            showLoadingStatus(false);
        }
    }

    /**
     * Initialize Translator & Attach Event Listeners
     */
    function initTranslator() {
        // Saved language preference
        const savedLang = localStorage.getItem('pahat_docs_lang') || 'id';

        // Attach listeners to toggles
        document.addEventListener('change', function (e) {
            if (e.target && e.target.classList.contains('lang-toggle-input')) {
                const newLang = e.target.checked ? 'en' : 'id';
                setLanguage(newLang);
            }
        });

        // Initialize state
        if (savedLang === 'en') {
            setLanguage('en');
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTranslator);
    } else {
        initTranslator();
    }
})();
