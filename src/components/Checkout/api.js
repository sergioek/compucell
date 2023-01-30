export const renderStates = (setState) => {
  fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then((response) => response.json())
    .then((data) => {
      setState(data.provincias)
      
    });
};




export const renderCity = (city,setCity) => {
  fetch(
    `https://apis.datos.gob.ar/georef/api/localidades?provincia=${city}&campos=id,nombre&max=300`
  )
    .then((response) => response.json())
    .then((data) => {
      setCity(data.localidades)
    });
};
 