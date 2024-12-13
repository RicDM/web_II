(() => {
    document.createElement("div")
    document.querySelector("#com-search").appendChild(generateSearchForm())

    function generateSearchForm() {
        // Create the main row container
        const mainRow = document.createElement('div');
        mainRow.classList.add('row', 'g-2', 'd-flex', 'justify-content-around');
    
        // Create the first column (containing input fields)
        const colDiv1 = document.createElement('div');
        colDiv1.classList.add('col-md-10');
    
        // Create the inner row for the input fields
        const innerRow = document.createElement('div');
        innerRow.classList.add('row', 'g-2');
    
        const propertyCol = document.createElement('div');
        propertyCol.classList.add('col-md-4');
        const propertySelect = document.createElement('select');
        propertySelect.classList.add('form-select', 'border-0', 'py-3');
        let options = `
            <option selected value=${''}>Tipo de propriedade</option>
        `;
        ["Casa", 'Apartamento', "Comercial", "Germinada", "Predio", "Escritorio", 'Garagem', 'Residencial'].forEach((propType, index) =>  options+= ` <option value="${propType}">${propType}</option>`)
        propertySelect.innerHTML = options
        propertyCol.appendChild(propertySelect);
    
        // Create the location dropdown
        const locationCol = document.createElement('div');
        locationCol.classList.add('col-md-4');
        const locationSelect = document.createElement('select');
        locationSelect.classList.add('form-select', 'border-0', 'py-3');

        let location = `
          <option selected value=${''}>Localização</option>
        `
        new Array("Nova Marabá", 'Velha Marabá', "Cidade Nova", "Cidade Jardim", "São Felix").forEach((propType, index) =>  location+=`<option value="${propType}">${propType}</option>`)
        locationSelect.innerHTML = location;
        locationCol.appendChild(locationSelect);
    
        // Append the input fields and selects to the inner row
        //innerRow.appendChild(keywordCol);
        innerRow.appendChild(propertyCol);
        innerRow.appendChild(locationCol);
    
        // Append the inner row to the first column
        colDiv1.appendChild(innerRow);
    
        // Create the second column (containing the search button)
        const colDiv2 = document.createElement('div');
        colDiv2.classList.add('col-md-2');
        const searchButton = document.createElement('button');
        searchButton.classList.add('btn', 'btn-dark', 'border-0', 'w-100', 'py-3');
        searchButton.textContent = 'Procurar';
        searchButton.addEventListener("click", (e) => {
            const url = new URL(window.location.href);
            url.pathname = "property-list.html" 
            //console.log(url)
            url.searchParams.set('type', propertySelect.value)
            url.searchParams.set('sector', locationSelect.value)
            window.location.href = url;
        })
        colDiv2.appendChild(searchButton);
    
        // Append both columns to the main row
        mainRow.appendChild(colDiv1);
        mainRow.appendChild(colDiv2);
    
        // Append the main row to the body or any specific container
        return mainRow;
    }
    
    
})()