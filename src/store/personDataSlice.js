import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    genero: "male",
    nascimento: "1972-08-31T00:25:23.668Z",
    idade: "24",
    city: "Lexington",
    country: "USA",
    state: "Kentucky",
    numberStreet: "536",
    nameStreet: "Woodbine Dr",
    email: "daryl@gmail.com",
    title: "Mrs",
    first: "Daryl",
    last: "Stone",
    id: "16565656",
    phone: "158888-7897",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
    large: "https://randomuser.me/api/portraits/men/95.jpg",
  },
];

export const personDataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    adicionarPessoa: (state, action) => {
      let novaPessoa = action.payload;
      state.push({
        genero: novaPessoa.gender,
        nascimento: novaPessoa.date,
        idade: novaPessoa.age,
        city: novaPessoa.city,
        country: novaPessoa.country,
        state: novaPessoa.state,
        numberStreet: novaPessoa.street.number,
        nameStreet: novaPessoa.street.name,
        email: novaPessoa.email,
        title: novaPessoa.title,
        first: novaPessoa.first,
        last: novaPessoa.last,
        id: novaPessoa.id.value,
        phone: novaPessoa.phone,
        thumbnail: novaPessoa.thumbnail,
        medium: novaPessoa.medium,
        large: novaPessoa.large,
      });
    },
  },
});

export const { adicionarPessoa } = personDataSlice.actions;

export default personDataSlice.reducer;
