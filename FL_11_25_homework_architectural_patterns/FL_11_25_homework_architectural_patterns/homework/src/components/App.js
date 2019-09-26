import {getUsers} from '../store/connect';
import data from '../data';
import {addUser} from '../actions/action';

export default class App {
    constructor(store) {
        this.store = store;
        this.store.dispatch(addUser(data));
        this.displayedUsers = 5;
        this.load = this.load.bind(this);
    }

    create() {
        this.users = getUsers(this.store);
        this.render();
        document.querySelector('.load-more-btn').addEventListener('click', this.load);
    }

    render() {
        let layout = [];
        this.users.slice(0, this.displayedUsers).map((user) => {
            layout +=`
        <tr class='users-table-data' id=${user.id}>
          <td>
            <img src=${user.picture} alt='photo'>
          </td>
          <td>${user.name}</td>
          <td>${user.location}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.timezone}</td>
          <td>
            <button class='user-remove'>Remove</button>
          </td
        </tr>`;
        });
        document.querySelector('#root').innerHTML = `
      <div class='search'>
        <div class='search-div'>
          Search by name:
        </div>
        <input
          class="search-input"
          id="search"
          type="search"
          placeholder="Enter user name..."
        />
      </div>
      <table class="users-table">
        <thead class="table-header">
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Timezone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${layout}  
        </tbody>
      </table>
      <div class="load-more">
        <div class="load-more-info">
          Displayed ${this.displayedUsers} 
          users out of ${this.users.length}
        </div>
        <button class="load-more-btn" for="load-more">
          LOAD MORE
        </button>
      </div>`;
    }
    load() {
        this.displayedUsers += 5;
        this.create();
    }
}