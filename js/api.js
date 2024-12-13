// API endpoint URL
const apiUrl = 'http://localhost:3000/imoveis';


function generateId() {
    return Math.floor(Math.random() * 1000000000);
  }

async function getAllRentals(statu$, type, sector) {
  try {
    console.log()
    const url = new URL(apiUrl)
    url.searchParams.set('sector', sector || "")
    url.searchParams.set('type', type || "")
    url.searchParams.set('status', statu$ || "")
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Fetch a single rental by ID
async function getRentalById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Create a new rental
async function createRental(rentalData) {
    rentalData['id'] = generateId()
    try {
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rentalData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Update an existing rental
async function updateRental(id, rentalData) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rentalData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Delete a rental
async function deleteRental(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });
    return response.ok;
  } catch (error) {
    console.error(error);
  }
}

// Example usage:
/* const aluguel = {
    "titulo": "Kitnet da Rosa",
    "localizacao": "Maraba Fl 10 Qd 06",
    "tipo": "kitnet",
    "preco": 350,
    "descricao": "Um kitnet básica, bem basica mesmo, para meia pessoa"
}*/
//fetchRentalById('12321').then(data => console.log(data)); 