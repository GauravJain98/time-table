tables = {
    'B101': [
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    ],
    'B102': [
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    ],
    'B103': [
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
        [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    ]
}
day = parseInt(process.argv[2])
time = parseInt(process.argv[3])
if (typeof (day) != 'number' || typeof (time) != 'number' || day > 5 || day < 1 || time < 1 || time > 10 || process.argv.length != 4) {
    console.log("Input Format")
    console.log("node table.js <day> <time>")
    console.log("day:")
    console.log("   1:mon")
    console.log("   2:tue")
    console.log("   3:wed")
    console.log("   4:thu")
    console.log("   5:fri")
    console.log("time:")
    console.log("   1: 8:40-9:35")
    console.log("   2: 9:35-10:30")
    console.log("   3: 10:30-11:25")
    console.log("   4: 11:25-12:20")
    console.log("   5: 12:50-1:45")
    console.log("   6: 1:45-2:30")
    console.log("   7: 2:30-3:35")
    console.log("   8: 3:35-4:30")
    console.log("   9: 4:40-5:35")
    console.log("   10: 5:35-6:30")
    process.exit(1)
}
day--
time--

for (table in tables) {
    if (tables[table][day][time] === 1) {
        console.log(table)
    }
}
console.log("End")