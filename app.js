document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <header><h1>iLRiparaTutto</h1></header>
    <div class="container">
      <h2>Nuova Riparazione</h2>
      <form id="repairForm">
        <input name="cliente" placeholder="Nome cliente" required />
        <input name="telefono" placeholder="Telefono" required />
        <input name="modello" placeholder="Modello dispositivo" required />
        <textarea name="problema" placeholder="Tipo problema" required></textarea>
        <button type="submit">Invia</button>
      </form>
      <p id="result"></p>
    </div>
  `;

  const form = document.getElementById('repairForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('https://ilriparatutto-1.onrender.com/nuova-riparazione', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const msg = await res.text();
      document.getElementById('result').innerText = msg;
      form.reset();
    } catch (err) {
      document.getElementById('result').innerText = 'Errore: ' + err;
    }
  });
});
