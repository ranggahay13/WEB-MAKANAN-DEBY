document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (fullName === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
    alert('Semua kolom harus diisi!');
    return;
  }

  if (!email.includes('@gmail.com')) {
    alert('Gunakan email Gmail yang valid!');
    return;
  }

  if (password !== confirmPassword) {
    alert('Password dan Konfirmasi Password tidak cocok!');
    return;
  }

  alert('Pendaftaran berhasil!');
});
