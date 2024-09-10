
const getGameBackgroundColor = (baseColor: string): string => {
    return `linear-gradient(180deg, ${baseColor} 0%, rgba(0, 0, 0, 0) 100%)`;
}

export default getGameBackgroundColor;