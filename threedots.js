const ages = [12, 14, 16, 18];
const ages2 = [15, 16, 12, 19];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
const allAges3 = [ages + ages2 + 5 + ages3];
const allAges4 = [ages, ages2, 5, ages3];

console.log(allAges);
console.log(allAges2);
console.log(allAges3);
console.log(allAges4);


const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 700, 850]
const maximum = Math.max(business, minister, sochib);
console.log("maximum : "+maximum);

const maximum2 = Math.max(...takaPoisa);
console.log("maximum2 : "+maximum2);