type Student = {
    id: number
    name: string
}

type Friends = {
    [key: string]: string[]
}

export const students: Student[] = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Charley" },
]

export const friends: Friends = {
    1: ["Oliver", "Jack", "Oscar"],
    2: ["Jack", "Lewis", "Thomas"],
    3: ["William", "Michael", "Lewis"],
    4: ["Oscar", "James", "William"],
}

console.log(friends[students[0].id][3])