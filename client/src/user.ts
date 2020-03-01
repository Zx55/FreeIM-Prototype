export interface IUser {
    userId: string,
    token: string,
    receiver: string,
}

export const getUser = (str: string): IUser => {
    switch (str) {
        case "a":
        case "A":
            return {
                userId: "123456789",
                token: "qwertyuiop",
                receiver: "987654321",
            };
        case "b":
        case "B":
            return {
                userId: "987654321",
                token: "poiuytrewq",
                receiver: "123456789",
            };
        default:
            return undefined;
    }
};