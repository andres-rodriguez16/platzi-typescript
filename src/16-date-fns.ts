import { subDays, format } from 'date-fns';

const date = new Date(2002, 2, 30);

const rta = subDays(date, 22);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
