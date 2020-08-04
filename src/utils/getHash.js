const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'   // Se obtiene el hash del navegador con el metodo location

    export default getHash