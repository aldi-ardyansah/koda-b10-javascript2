# JavaScript 2

## Membuat Program

### Mengakses objek we.are.the.best
```javascript
const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
};
console.log(we.are.the.best);
```

### Mengakses objek hello.world
```javascript
const hello = {
    world: "Hello World"
};
console.log(hello.world);
```

### Mengakses objek obj.str[3][1][2].man[0].tech.academy
```javascript
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
```

### Mengakses array my[0].favourite[3].fruit.is
```javascript
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
```

### Mengakses hasil num.first[1] + num.second[2]
```javascript
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
```