const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
};
console.log(we.are.the.best)

const hello = {
    world: "Hello World"
}
console.log(hello.world)

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
                                academy: "Koda Academy"
                            }
                        }
                    ]
                }
            ]
        ]
    ]
};
console.log(obj.str[3][1][2].man[0].tech.academy);

const my = [
    {
        favourite: [
            {
                artist: {
                    is: "Sherina"
                }
            },
            {
                bike: {
                    is: "Wimcycle"
                }
            },
            {
                car: {
                    is: "Daihatsu"
                }
            },
            {
                fruit: {
                    is: "Food"
                }
            }
        ]
    }
];
console.log(my[0].favourite[3].fruit.is)

const num = {
    first: 30,
    second: 2
}
console.log(num.first + num.second)