export const setFormatDate = (dateStr) => {
    const date = new Date(dateStr);
    //console.log(date);
    const formattedDate = date.toLocaleDateString('es-CL', {year: 'numeric', month: 'long', day: 'numeric'});
    //console.log(formattedDate);
    return formattedDate
}