export const getRandomId = (longNumber: number) => {
    return new Date().getTime().toString().substr(-longNumber);
}