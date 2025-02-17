import React, { useEffect, useState } from 'react';

export const RentalTypes = () => {
    const [data, setData] = useState([]); // Estado para armazenar os dados das propriedades

    // Simulação da função getAllRentals (substitua pela sua lógica de fetch)
    const getAllRentals = async () => {
        // Exemplo de dados simulados
        return [
            { type: "Casa" },
            { type: "Apartamento" },
            { type: "Residencial" },
            { type: "Escritorio" },
            { type: "Prédio" },
            { type: "Germinada" },
            { type: "Garagem" },
            { type: "Comercial" },
        ];
    };

    // Efeito para carregar os dados ao montar o componente
    useEffect(() => {
        getAllRentals().then((response) => {
            setData(response);
        });
    }, []);

    // Dados dos tipos de propriedade
    const propertyTypes = [
        { name: "Casa", imgSrc: "img/icon-house.png" },
        { name: "Residencial", imgSrc: "img/icon-villa.png" },
        { name: "Apartamento", imgSrc: "img/icon-apartment.png" },
        { name: "Escritorio", imgSrc: "img/icon-housing.png" },
        { name: "Prédio", imgSrc: "img/icon-building.png" },
        { name: "Germinada", imgSrc: "img/icon-neighborhood.png" },
        { name: "Garagem", imgSrc: "img/icon-luxury.png" },
        { name: "Comercial", imgSrc: "img/icon-condominium.png" },
    ];

    // Função para gerar a URL com o tipo de propriedade
    const generateUrl = (type) => {
        const url = new URL(window.location.href);
        url.pathname = "/property-list.html"; // Altere para o caminho correto
        url.searchParams.set('type', type);
        return url.toString();
    };

    return (
        <div id="com-propstypes">
            {/* Título e descrição */}
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                <h1 className="mb-3">Tipos de Propriedade</h1>
                <p>
                    De apartamentos modernos a casas espaçosas, oferecemos uma variedade de imóveis para aluguel que atendem às suas necessidades. Explore nossas opções e descubra o lugar ideal para chamar de lar.
                </p>
            </div>

            {/* Lista de tipos de propriedade */}
            <div className="row g-4">
                {propertyTypes.map((propsType, index) => (
                    <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href={generateUrl(propsType.name)}>
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={propsType.imgSrc} alt="Icon" />
                                </div>
                                <h6>{propsType.name}</h6>
                                <span>
                                    {data.filter((prop) => prop.type === propsType.name).length} propriedades
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

