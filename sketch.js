var fireworks = [];
var gravity;
var rate = 0.15; // Intensitas fireworks
var showFireworks = false; // Status apakah fireworks ditampilkan atau tidak

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  stroke(255);
  strokeWeight(4);
  gravity = createVector(0, 0.2);

  checkBirthday(); // Cek apakah harus menampilkan fireworks dan teks
}

function draw() {
  colorMode(RGB);
  background(0); // Layar kosong (hitam) jika belum waktunya

  if (showFireworks) {
    if (random(1) < rate) {
      fireworks.push(new Firework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }

    // Tampilkan teks "Happy Birthday!"
    drawBirthdayText();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function checkBirthday() {
  let now = new Date();
  let utc7Offset = 7 * 60 * 60 * 1000; // 7 jam dalam milidetik
  let localTime = new Date(now.getTime() + utc7Offset); // Konversi ke UTC+7

  let targetDate = new Date(Date.UTC(2025, 1, 12)); // 12 Februari 2025 (UTC)

  if (
    localTime.getUTCFullYear() === targetDate.getUTCFullYear() &&
    localTime.getUTCMonth() === targetDate.getUTCMonth() &&
    localTime.getUTCDate() === targetDate.getUTCDate()
  ) {
    showFireworks = true; // Aktifkan fireworks dan teks
  }
}

// Fungsi untuk menggambar teks "Happy Birthday!"
function drawBirthdayText() {
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(255);
  stroke(0);
  strokeWeight(8);
  text("Happy Birthday yang!", width / 2, height / 4); // Posisi teks di atas fireworks
}