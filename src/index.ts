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

let myJersey: Jersey = {
    playerName: "Andersson",
    playerNumber: 52,
    primaryColor: "red",
    size: Size.xl,
};
