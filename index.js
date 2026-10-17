// Mengakses objek we.are.the.best
const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
};
console.log(we.are.the.best);

// Mengakses objek hello.world
const hello = {
    world: "Hello World"
};
console.log(hello.world);

// Mengakses objek obj.str[3][1][2].man[0].tech.academy
const obj = {
    str: [
        null,
        null,
        null,
        [
            null,
            [
                null,
                null,
                {
                    man: [
                        {
                            tech: {
                                academy: "Tech Academy"
                            }
                        }
                    ]
                }
            ]
        ]
    ]
};
console.log(obj.str[3][1][2].man[0].tech.academy);

// Mengakses array my[0].favourite[3].fruit.is
const my = [
    {
        favourite:  [
            null,
            null,
            null,
            {
                fruit: {
                    is: "Apple"
                }
            }
        ]
    }
];
console.log(my[0].favourite[3].fruit.is);

// Mengalkulasi num.first[1] + num.second[2]
const num = {
    first: [
        null,
        13
    ],
    second: [
        null,
        null,
        19
    ]
};
console.log(num.first[1] + num.second[2]);