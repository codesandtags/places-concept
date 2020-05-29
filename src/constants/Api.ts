export const API = {
    MAPS_API_KEY: 'AIzaSyB2XHz1vx57pucaQke1rZirDNeZMK_39VQ',
    GET_IMAGE_URL: (lat: number, lng: number) => {
        const options = [
            `center=${lat},${lng}`,
            'zoom=18',
            'size=600x300',
            'maptype=roadmap',
            `key=${API.MAPS_API_KEY}`,
            `markers=color:blue%7Clabel:A%7C${lat},${lng}`
        ]

        return `https://maps.googleapis.com/maps/api/staticmap?${options.join('&')}`;
    }
}