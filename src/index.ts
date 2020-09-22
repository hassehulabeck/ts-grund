interface Jersey {
    playerNumber: number;
    playerName: string;
    primaryColor: string;
    secondaryColor?: string;
    sponsorLogo?: string;
    size: Size;
}

interface isRetiredFunction {
    (jersey: Jersey): boolean;
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
    secondaryColor?: string;
    sponsorLogo?: string;

    constructor(jersey: Jersey) {
        this.playerName = jersey.playerName;
        this.playerNumber = jersey.playerNumber;
        this.primaryColor = jersey.primaryColor;
        this.size = jersey.size;
        this.secondaryColor = jersey.secondaryColor;
        this.sponsorLogo = jersey.sponsorLogo;
    }
}

let myJersey: Jersey = {
    playerName: "Andersson",
    playerNumber: 52,
    primaryColor: "red",
    size: Size.xl,
    sponsorLogo: "slfkjsdf",
};

let newJersey = new PlayerJersey(myJersey);

console.log(newJersey);

(window as any).newJersey = newJersey;

console.log("Storlek: " + Size[myJersey.size]);

let retiredNumbers: number[] = [2, 3, 52];

let isNumberRetired: isRetiredFunction;

isNumberRetired = function (jersey: Jersey): boolean {
    return retiredNumbers.includes(jersey.playerNumber);
};

console.log(isNumberRetired(myJersey));
