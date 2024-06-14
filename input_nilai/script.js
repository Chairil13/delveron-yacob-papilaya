function hitung() {
  // Get input values and parse them as floats
  var a = parseFloat(document.getElementById("uts").value) || 0;
  var b = parseFloat(document.getElementById("uas").value) || 0;
  var c = parseFloat(document.getElementById("tugas").value) || 0;

  // Check if any of the values are greater than 100
  if (a > 100 || b > 100 || c > 100) {
    alert("Tolong input nilai yang benar!");
    return;
  }

  // Calculate total and average
  var total = a + b + c;
  var rata = total / 3;

  // Calculate weighted sum
  var uts = 0.3 * a;
  var uas = 0.3 * b;
  var tugas = 0.4 * c;
  var jumlah = uts + uas + tugas;

  // Determine grade
  var grade;
  if (jumlah >= 80) {
    grade = "A";
  } else if (jumlah >= 70) {
    grade = "B";
  } else if (jumlah >= 60) {
    grade = "C";
  } else if (jumlah >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Determine status
  var status;
  if (jumlah >= 60) {
    status = "<span style='color:#292'>Selamat, Kamu LULUS</span>";
  } else if (jumlah >= 50) {
    status = "<span style='color:yellow'>Butuh Perbaikan</span>";
  } else {
    status = "<span style='color:red'>Maaf, Kamu TIDAK LULUS</span>";
  }

  // Get other input values
  var nim = document.getElementById("nim").value;
  var nama = document.getElementById("nama").value;
  var kelamin =
    document.getElementById("kelamin").value === "1"
      ? "Laki-Laki"
      : "Perempuan";
  var jurusan = document.getElementById("jurusan").selectedOptions[0].text;
  var semester = document.getElementById("semester").value;
  var mataKuliah = document.getElementById("mataKuliah").value;

  // Display results
  document.getElementById("iniNIM").innerHTML = nim;
  document.getElementById("iniNama").innerHTML = nama;
  document.getElementById("iniKelamin").innerHTML = kelamin;
  document.getElementById("iniJurusan").innerHTML = jurusan;
  document.getElementById("iniSemester").innerHTML = semester;
  document.getElementById("iniMatakuliah").innerHTML = mataKuliah;
  document.getElementById("total").innerHTML = total.toFixed(2);
  document.getElementById("rata").innerHTML = rata.toFixed(2);
  document.getElementById("grade").innerHTML = grade;
  document.getElementById("status").innerHTML = status;
}

function reset() {
  // Clear all input fields
  document.getElementById("nim").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("kelamin").value = "";
  document.getElementById("jurusan").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("mataKuliah").value = "";
  document.getElementById("uts").value = "";
  document.getElementById("uas").value = "";
  document.getElementById("tugas").value = "";

  // Clear all output fields
  document.getElementById("iniNIM").innerHTML = "";
  document.getElementById("iniNama").innerHTML = "";
  document.getElementById("iniKelamin").innerHTML = "";
  document.getElementById("iniJurusan").innerHTML = "";
  document.getElementById("iniSemester").innerHTML = "";
  document.getElementById("iniMatakuliah").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("rata").innerHTML = "";
  document.getElementById("grade").innerHTML = "";
  document.getElementById("status").innerHTML = "";
}
