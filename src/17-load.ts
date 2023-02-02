import _ from 'lodash';

const data = [
  {
    userName: 'nico',
    role: 'admin',
  },
  {
    userName: 'Valentina',
    role: 'seller',
  },
  {
    userName: 'Zulema',
    role: 'seller',
  },
  {
    userName: 'Santi',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role)

console.log(rta);

const rtav = 1 + '1';

console.log(rtav);
