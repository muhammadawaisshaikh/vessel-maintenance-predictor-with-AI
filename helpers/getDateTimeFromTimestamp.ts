export const getDateTime = (timestamp: number): { formattedDate: string; formattedTime: string } => {
    // Create a new Date object with the timestamp
    const date = new Date(timestamp*1000);

    // Extract date components
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-based, so we add 1
    const day = date.getDate();

    // Extract time components
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the date and time as needed
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Return formatted date and time
    return { formattedDate, formattedTime };
};
