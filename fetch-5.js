fetch('https://reqres.in/api/users/1000')
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            //console.log('No exite el usuario');
            throw new Error('No existe el usuario');
        }
    })
    .then(console.log)
    .catch(error => {
        console.log('error en la peticion');
        console.log(error);
    })