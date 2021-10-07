// takes file and checks if it has a certain extension
const checkFiletype = (filename: string, extension: string) : boolean => {
    const filename_arr = filename.split('.');
    const file_extension = filename_arr[filename_arr.length-1]
    return file_extension === extension
}

export default checkFiletype