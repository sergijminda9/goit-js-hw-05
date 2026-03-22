const getUserNames = users => users.map(user => user.name);

console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },

    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
);
// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
