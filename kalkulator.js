//https://developers.google.com/web/tools/chrome-devtools/javascript

/*const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
 };
  
 function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
 }
  
 function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
 }
  
 function inverseNumber() {
    if(calculator.displayNumber === '0') {
       return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
 }

 function handleOperator(operator) {
    if(!calculator.waitingForSecondNumber) {
       calculator.operator = operator;
       calculator.waitingForSecondNumber = true;
       calculator.firstNumber = calculator.displayNumber;
    } else {
       alert('Operator sudah ditetapkan')
    }
 }

 function inputDigit(digit) {
    if(calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
       calculator.displayNumber = digit;
    } else {
       if (calculator.displayNumber === '0') {
          calculator.displayNumber = digit;
       } else {
          calculator.displayNumber += digit;
       }
    }
 }

 function performCalculation() {
    if(calculator.firstNumber == null || calculator.operator == null) {
       alert('Anda belum menetapkan operator');
       return;
    }

    let result = 0 ;
    if(calculator.operator === '+') {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);    
    } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    } 

    //objek yang dikirimkan sebagai argumen fungsi putHistory()
    const history = {
       firstNumber: calculator.firstNumber,
       secondNumber: calculator.displayNumber,
       operator: calculator.operator,
       result: result
    }

    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
 }

 const buttons = document.querySelectorAll(".button");
 for (let button of buttons) {
    button.addEventListener('click', function(event) {
  
        // mendapatkan objek elemen yang diklik
        const target = event.target;
  
        if(target.classList.contains('clear')) {
         clearCalculator();
         updateDisplay();
         return;
     } 

         if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
         }

         if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
         }

         if(target.classList.contains('operator')) {
            handleOperator(target.innerText)
            updateDisplay();
            return;
         }

        inputDigit(target.innerText);
        updateDisplay()
    });
 }
*/

//https://developers.google.com/web/tools/chrome-devtools/javascript

const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
 
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
 
function inverseNumber() {
   if(calculator.displayNumber === '0') {
      return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
   if(!calculator.waitingForSecondNumber) {
      calculator.operator = operator;
      calculator.waitingForSecondNumber = true;
      calculator.firstNumber = calculator.displayNumber;
   } else {
      alert('Operator sudah ditetapkan')
   }
}

function inputDigit(digit) {
   if(calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
      calculator.displayNumber = digit;
   } else {
      if (calculator.displayNumber === '0') {
         calculator.displayNumber = digit;
      } else {
         calculator.displayNumber += digit;
      }
   }
}

function performCalculation() {
   if(calculator.firstNumber == null || calculator.operator == null) {
      alert('Anda belum menetapkan operator');
      return;
   }

   let result = 0 ;
   if(calculator.operator === '+') {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);    
   } else {
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   } 

   //objek yang dikirimkan sebagai argumen fungsi putHistory()
   const history = {
      firstNumber: calculator.firstNumber,
      secondNumber: calculator.displayNumber,
      operator: calculator.operator,
      result: result
   }

   putHistory(history);
   calculator.displayNumber = result;
   renderHistory();
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if(target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
    } 

        if(target.classList.contains('negative')) {
           inverseNumber();
           updateDisplay();
           return;
        }

        if(target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
        }

        if(target.classList.contains('operator')) {
           handleOperator(target.innerText)
           updateDisplay();
           return;
        }

       inputDigit(target.innerText);
       updateDisplay()
   });
}



 /*Menerapkan JavaScript pada Web Kalkulator
Sejauh ini kita sudah mempelajari bagaimana cara menggunakan JavaScript pada HTML, bagaimana menuliskan sintaks JavaScript, mengenal tipe data dan fungsi sintaks yang ada, hingga akhirnya memanipulasi dan memberikan event pada elemen HTML melalui DOM Object.

Dengan komponen yang sudah disebutkan tadi, sepertinya sekarang kita sudah cukup bekal untuk memberikan “nyawa” pada Web Kalkulator kita sehingga dapat berfungsi layaknya sebuah kalkulator pada umumnya. Let’s do it!

Silakan buka project Web Kalkulator dengan editor favorit kita.

201912062117250fc8d939122c03a5583827c555c4f777.png

Jika Anda mengikuti seluruh latihan sebelumnya, maka struktur projek tampak seperti gambar di atas. Kita juga sudah mencoba menghubungkan berkas JavaScript (kalkulator.js) dengan berkas HTML (index.html) lalu menuliskan sintaks dasar untuk menampilkan pesan pada console browser.

Selanjutnya kita akan bekerja full pada kalkulator.js. Silakan hapus sintaks yang sudah kita buat sebelumnya.

console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
Langkah pertama adalah buatlah sebuah objek dengan nama calculator. Di dalamnya terdapat properti yang menggambarkan data dan kondisi dari kalkulatornya, seperti displayNumber, operator, firstNumber, dan waitingForSecondNumber. Sehingga kodenya akan nampak seperti ini:

const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
Kita gunakan objek ini sebagai tempat menyimpan data dan kondisi pada calculator, di mana angka yang muncul pada layar kalkulator selalu diambil dari data calculator.displayNumber.

Properti operator dan firstNumber kita gunakan nilai null terlebih dahulu karena properti tersebut akan diberikan nilai ketika pengguna melakukan aksi.

Dan properti waitingForSecondNumber merupakan kondisi di mana kalkulator sedang menunggu pengguna menentukkan angka kedua dalam melakukan perhitungan.

Setelah membuat object calculator, selanjutnya kita buat fungsi - fungsi umum yang dilakukan kalkulator seperti meng-update angka pada layar dan menghapus data pada kalkulator.

function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
Lalu kita buat juga fungsi untuk memasukkan angka ke dalam nilai displayNumber kalkulator.

function inputDigit(digit) {
   calculator.displayNumber += digit;
}
Kemudian kita buat variabel buttons dengan menginisialisasikan nilai seluruh elemen button yang ada, dan berikan event click pada tiap elemennya.

Untuk mendapatkan nilai seluruh elemen button kita gunakan querySelectorAll(“#button”) kemudian kita looping nilainya dan berikan event click pada tiap itemnya.

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}
Sehingga keseluruhan kode pada kalkulator.js akan tampak seperti ini:

const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
 
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
 
function inputDigit(digit) {
   calculator.displayNumber += digit;
}
 
 
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}
Sekarang kita coba jalankan index.html pada browser, dan lihat fungsi kalkulator untuk yang pertama kali.

20191206212042a342796f5b04dac671113beced247276.gif

Uh sangat aneh bukan? Siapa yang ingin gunakan kalkulator seperti itu? Untuk saat ini tak apa. Setidanya kode yang kita tuliskan sudah berhasil berjalan dengan baik. Selanjutnya kita akan memperbaiki keanehan-keanehan yang ada satu per satu.

Saat ini kalkulator masih dapat menampilkan angka 0 di awal bilangan, hal itu tentu aneh dan tidak pernah terjadi pada kalkulator manapun terkecuali dalam menampilkan bilangan desimal. Untuk memperbaikinya, pada fungsi inputDigit(), tambahkan sebuah kondisi dimana jika displayNumber bernilai ‘0’, maka angka yang pertama dimasukkan pengguna akan menggantikan keseluruhan nilai displayNumber selain itu, lakukan seperti biasanya. Untuk melakukannya kita gunakan if-else statement.

function inputDigit(digit) {
   if(calculator.displayNumber === '0') {
       calculator.displayNumber = digit;
   } else {
       calculator.displayNumber += digit;
   }
}
Dengan begitu kalkulator tidak akan menampilkan angka 0 diawal bilangan lagi.

20191206212213c3316adc01e699c1fe4af95674e42dff.gif

Kemudian kita akan membuat fungsi clear pada kalkulator berjalan dengan semestinya sehingga dalam mereset kalkulator kita tidak perlu melakukan reload pada browser seperti yang ditunjukkan pada gif di atas.

Pada event handler, kita tambahkan kondisi dimana ketika event target merupakan elemen yang menerapkan class clear maka kita akan panggil fungsi clearCalculator().

button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if(target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
 
       inputDigit(target.innerText);
       updateDisplay()
   });
Kita bisa memanfaatkan event.classList untuk melihat nilai class apa saja dalam bentuk array yang ada pada element target, kemudian menggunakan contains() yang merupakan method dari array yang berguna untuk memastikan nilai yang terkandung di dalam array tersebut.

Jika kondisi if terpenuhi sudah dipastikan tombol tersebut adalah tombol clear, sehingga kita perlu memanggil fungsi clearCalculator() dan mengupdate display kalkulator. Jangan lupa juga untuk gunakan return statement agar fungsi event handler terhenti sehingga kode yang ada di bawahnya tidak ikut tereksekusi.

20191206212407f4c7854bd87325713384e17c02ef4fee.gif

Setelah menerapkan kondisi tersebut maka seluruh kode pada kalkulator.js akan tampak seperti berikut:

const calculator = {
   displayNumber: '0',
   operator: null,
   firstNumber: null,
   waitingForSecondNumber: false
};
 
function updateDisplay() {
   document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}
 
function clearCalculator() {
   calculator.displayNumber = '0';
   calculator.operator = null;
   calculator.firstNumber = null;
   calculator.waitingForSecondNumber = false;
}
 
function inputDigit(digit) {
   if (calculator.displayNumber === '0') {
       calculator.displayNumber = digit;
   } else {
       calculator.displayNumber += digit;
   }
}
 
 
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
 
       inputDigit(target.innerText);
       updateDisplay()
   });
}
Selanjutnya kita akan melengkapi beberapa fungsi lainnya yang ada pada kalkulator, yakni fungsi negative, operator, dan equals. Untuk itu, buat kondisi lainnya pada event handler, sehingga kode tampak seperti berikut:

button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('clear')) {
           clearCalculator();
           updateDisplay();
           return;
       }
 
       if(target.classList.contains('negative')) {
           inverseNumber();
           updateDisplay();
           return;
       }
 
       if(target.classList.contains('equals')) {
           performCalculation();
           updateDisplay();
           return;
       }
 
       if(target.classList.contains('operator')) {
           handleOperator(target.innerText)
           updateDisplay();
           return;
       }
 
       inputDigit(target.innerText);
       updateDisplay()
   });
Jika kita membukanya sekarang, maka eror akan muncul ketika tombol - tombol fungsi dan operatornya ditekan.

20191206212558bdd075d8bd3f2fc4b5b5644ff85aaf02.gif

Hal tersebut wajar karena kita belum mendefinisikan seluruh fungsi - fungsi yang kita dituliskan di atas. Dengan begitu mari kita buat fungsinya mulai dari inverseNumber()

function inverseNumber() {
   if (calculator.displayNumber === '0') {
       return;
   }
   calculator.displayNumber = calculator.displayNumber * -1;
}
Fungsi inverseNumber() cukuplah simple karena kita hanya perlu melakukan perkalian displayNumber dengan -1, terkecuali jika displayNumber masih bernilai ‘0’ maka perkalian tidak akan dilakukan.

201912062126519ef5b70b475c18f0102b8ec15616e12c.gif

Sekarang tombol "+/-" sudah berfungsi dengan baik, selanjutnya kita akan membuat fungsi untuk menetapkan sebuah operator, baik itu + atau - pada kalkulator. Tuliskan fungsi berikut:

function handleOperator(operator) {
   if (!calculator.waitingForSecondNumber) {
       calculator.operator = operator;
       calculator.waitingForSecondNumber = true;
       calculator.firstNumber = calculator.displayNumber;
   } else {
       alert('Operator sudah ditetapkan')
   }
}
Fungsi tersebut membutuhkan satu buah argument yang merupakan sebuah operator. Nilai operator tersebut bersumber dari innerText tombol operator yang menjadi event target. Secara prinsip fungsi ini bertujuan untuk menyimpan operator dan firstNumber dengan nilai displayNumber saat ini pada object calculator, hanya jika properti waitingForSecondNumber bernilai false. Namun jika waitingForSecondNumber bernilai true, browser akan menampilkan alert() dengan pesan “Operator sudah ditetapkan”

Selain itu, kita ubah juga logika yang terdapat pada fungsi inputDigit() dengan menambahkan kondisi pengecekkan terhadap nilai operator, dan displayNumber. Sehingga fungsi inputDigit() akan tampak seperti berikut:

function inputDigit(digit) {
   if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
           calculator.displayNumber = digit;
   } else {
       if (calculator.displayNumber === '0') {
           calculator.displayNumber = digit;
       } else {
           calculator.displayNumber += digit;
       }
   }
}
Perubahan kode bertujuan untuk mengevaluasi "apakah operator baru saja ditetapkan?". Jika hasil evaluasi benar maka angka pada display sebelumnya akan dihapus ketika tombol angka pada kalkulator kembali ditekan. Lalu nilai angka pada display sekarang akan digunakan untuk bilangan kedua dalam melakukan kalkulasi.

Voila! Sekarang tombol operator sudah dapat menetapkan nilai operator pada object calculator.

20191206212904370018d3439037017919ac1c5ab15e3d.gif

Kita bisa lihat pada console bahwa sekarang nilai properti operator dan firstNumber tidak lagi null, begitu pula dengan properti waitingForSecondNumber yang sudah berubah menjadi true.

Kita buat fungsi terakhir yakni performCalculation(). Fungsi ini digunakan untuk melakukan kalkulasi terhadap nilai - nilai yang terdapat pada objek calculator, sehingga pastikan kalkulator sudah memiliki nilai operator dan firstNumber ketika fungsi ini dijalankan.

function performCalculation() {
   if (calculator.firstNumber == null || calculator.operator == null) {
       alert("Anda belum menetapkan operator");
       return;
   }
 
   let result = 0;
   if (calculator.operator === "+") {
       result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
   } else {
       result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
   }
 
   calculator.displayNumber = result;
}
Fungsi tersebut diawali dengan pengecekan nilai-nilai yang dibutuhkan untuk melakukan kalkulasi. Jika tidak terpenuhi maka proses akan dihentikan. Namun jika terpenuhi kalkulasi akan dilakukan.

Dalam melakukan kalkulasi terdapat pengecekan tipe operator apa yang akan dilakukan. Kita juga menggunakan parseInt() untuk mengubah nilai string menjadi number. Mengapa konversi tipe data dibutuhkan? Sejatinya kita menggunakan string dalam menampilkan nilai pada jendela browser, namun untuk proses kalkulasi kita membutuhkan number. */