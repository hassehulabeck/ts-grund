interface Jersey {
    playerNumber: number;
    playerName: string;
    primaryColor: string;
    secondaryColor?: string;
    sponsorLogo?: string;
    size: Size;
}

enum Size {
    xs,
    s,
    m,
    l,
    xl,
    xxl,
}

class PlayerJersey implements Jersey {
    playerName: string;
    playerNumber: number;
    primaryColor: string;
    size: Size;

    constructor(jersey: Jersey) {
        this.playerName = jersey.playerName;
        this.playerNumber = jersey.playerNumber;
        this.primaryColor = jersey.primaryColor;
        this.size = jersey.size;
    }
}

let myJersey: Jersey = {
    playerName: "Andersson",
    playerNumber: 52,
    primaryColor: "red",
    size: Size.xl,
};

let newJersey = new PlayerJersey(myJersey);

console.log(newJersey);

console.log("Storlek: " + Size[myJersey.size]);

let retiredNumbers: number[] = [2, 3, 52];

function isNumberRetired(jersey: Jersey): boolean {
    return retiredNumbers.includes(jersey.playerNumber);
}

console.log(isNumberRetired(myJersey));
