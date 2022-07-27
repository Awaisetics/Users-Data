class Users {
    list;
    constructor() {
        this.list = document.querySelector('tbody');
        this.fetchUsers();
    }

    fetchUsers () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            this.constructHTML(data);
        })
        .catch(err => console.log(err));
    }

    constructHTML(data) {
        console.log(data);
        const usersHtml = data.map((user) => {
            return `
                <tr id='u-${user.id}'>
                    <th scope="row">${user.id}</th>
                    <td>${user.name}</td>   
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
                    <td><button onclick='user.delete(${user.id})' class="btn btn-sm btn-danger">Delete</button></td>
                </tr>
            `;
        }).join('');
        this.list.innerHTML = usersHtml;

    }

    delete (uid) {
        
        fetch('https://jsonplaceholder.typicode.com/users/uid', {
            method: 'DELETE',
        })
        .then(console.log('user deleted'))
        .catch(err => console.log(err));

        const user = this.list.querySelector(`#u-${uid}`);
        user.remove();
    }
}

const user = new Users;
