const getStartAsPercent = (time: string) => {
    const startDate = new Date(time);
    const startMinutes = (startDate.getHours()-1) * 60 + startDate.getMinutes();
    const startAsPercent = (startMinutes / (24 * 60)) * 100;
    return startAsPercent
}

export default getStartAsPercent;