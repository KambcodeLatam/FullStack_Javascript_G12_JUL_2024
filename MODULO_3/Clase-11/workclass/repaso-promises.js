// Callbacks vs promises

// Garantizar el orden de ejecucion (tarea 1, tarea 2,...) con callbacks
const tarea1 = (callback) => {
    console.log('Ejecutando tarea 1...');
    setTimeout(() => {
        callback(); // tarea 2
    }, 7000);
};

const tarea2 = (callback) => {
    console.log('Ejecutando tarea 2...');
    setTimeout(() => {
        callback(); // tarea 3
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 3...');
        callback(); // tarea 4
    }, 5000);
};

const tarea4 = () => {
    setTimeout(() => {
        console.log('Ejecutando tarea 4...');
    }, 700);
};

/*tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            tarea4();
        });
    });
});*/


// Garantizar orden de ejecución con promises
function generatePromise(tareaId, milliseconds) {
    return new Promise((resolve) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Ejecutando tarea ${tareaId}`);
            }, milliseconds);
        } else {
            resolve(`Ejecutando tarea ${tareaId}`);
        }
    });
}

/*const promise1 = generatePromise(1, 7000);
const promise2 = generatePromise(2, 2000);
const promise3 = generatePromise(3, 5000);
const promise4 = generatePromise(4, 700);

promise1
    .then(res => {
        console.log(res);
        return promise2;
    })
    .then(res => {
        console.log(res);
        return promise3;
    })
    .then(res => {
        console.log(res);
        return promise4;
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));*/


// Ejercicio usuarios y personas
const isLogged = true;

const users = [
    {
        id: 1,
        role: 'USER',
        personId: 10
    },
    {
        id: 2,
        role: 'USER',
        personId: 11
    }
];
    
const persons = [
    {
        id: 10,
        name: 'Rodrigo',
        lastname: 'Lopez'
    },
    {
        id: 11,
        name: 'Jaime',
        lastname: 'Diaz'
    },
    {
        id: 15,
        name: 'Leonardo',
        lastname: 'Benitez'
    },
];

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged) {
                resolve(users);
            } else {
                reject('No estas logueado dentro de la app');
            }
        }, 2000);
    });
}

function getPerson(personId) {
    return new Promise(resolve => {
        setTimeout(() => {
            const person = persons.find(person => person.id === personId);
            resolve(person);
        }, 4000);
    });
}

getUsers()
    .then(usuarios => {
        //const person1 = getPerson(usuarios[0].personId);
        //const person2 = getPerson(usuarios[1].personId);

        const personPromises = usuarios.map(usuario => getPerson(usuario.personId));

        Promise.all(personPromises)
            .then(personas => console.log(personas))
            .catch(error => console.log('Error: ', error));
    })
    .catch(err => console.log('Error: ', err));