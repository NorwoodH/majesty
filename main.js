
const tributeChest = []
const queens = []


const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    };
   queens.push(queenObject);
};

createQueen(1, "Athena Perez");
createQueen(2, "Charisse Ford");
createQueen(3, "Jenna Solis");
createQueen(4, "Ramona");
createQueen(5, "Monica Dinglehopper");

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

for (const queen of queens) {
    const hail = hailTheQueen(queen.name);
    //console.log(hail);
}

const payTribute = (tributeID, tributeDescription, queenId) => {
    const tribute ={
        id: tributeID,
        description: tributeDescription,
        queenId: queenId
    }
    tributeChest.push(tribute)
    //console.log(tribute)
}

payTribute(1, "Barrel of wine", 5)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 2)
payTribute(5, "Cool sword", 4)
/*
const invokeTribute = (queenId) => {
    const tributesForQueen = tributeChest.filter((tribute) => tribute.queenId === queenId);
    if (tributesForQueen.length === 0) {
        console.log(` ${queenId}`);
    } else {
        console.log(` ${queenId}:`);
        tributesForQueen.forEach((tribute) => {
            console.log(`  ${tribute.description}`);
        });
    }
};
invokeTribute(1);
*/
for (const queenObject of queens){
    for(const tribute of tributeChest){
        if(tribute.queenId === queenObject.id){

            console.log(`${queenObject.name} obtained ${tribute.description}`)
        }
        
    }
}


