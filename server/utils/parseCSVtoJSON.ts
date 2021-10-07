interface I_CSV<TValue> {
    [id: string]: TValue
}

const parseCSVtoJSOn = (csv: string) => {
    const csvLines = csv.split('\n');
    if (csvLines.length === 0) return [];   // empty csv

    let header = csvLines.slice(0, 1)[0].split(',')
        .map(headerVal => headerVal.trim())
    let data = csvLines.slice(1, csvLines.length);
    let json = data.map(line => {
        if (line.trim() === "") return {};
        let jsonOfCSVLine: I_CSV<string> = {} 
        line.split(',').forEach((cell, idx) => {
            const headerValue = header[idx];
            cell = cell.trim();
            jsonOfCSVLine[headerValue] = cell;
        })
        return jsonOfCSVLine;
    }).filter(o => Object.keys(o).length > 0)   // remove empty objects

    return json;
}

export default parseCSVtoJSOn;