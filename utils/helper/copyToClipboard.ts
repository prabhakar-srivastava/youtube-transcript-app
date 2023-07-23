export const copyClipboard = (data: string) => {
    try {
        navigator.clipboard.writeText(data)
    } catch (error) {
        console.log('Error writing clipboard', error);

    }
}

