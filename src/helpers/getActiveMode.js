export const getActiveMode = ( mode ) => {
    const ballLeft =  mode ? '37' : '5';
    const sunColor =  mode ? '#727272' : '#FBBF24';
    const moonColor =  mode ? '#0d419d' : '#727272';
    return { ballLeft, sunColor, moonColor }
}
