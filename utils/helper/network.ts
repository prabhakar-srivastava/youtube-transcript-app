import axios from 'axios'

const baseUrl = 'https://api.assemblyai.com/v2'

const headers = {
    // replace assembly ai  api key with aauthentic key in .env file
    authorization: process.env.API_KEY
}


export async function upload_file(id: string) {
    const data = {
        audio_url: `https://www.youtube.com/watch?v=${id}`
    }
    const url = `${baseUrl}/transcript`
    const response = await axios.post(url, data, { headers: headers })
    console.log(response.data, "transcript 1");
    const transcriptId = response.data.id
    return generate_transcript(transcriptId)
}

async function generate_transcript(transcriptId: string) {
    // console.log("generating transcript");
    const pollingEndpoint = `${baseUrl}/transcript/${transcriptId}`
    // console.log(pollingEndpoint, "generating transcript 12");

    while (true) {
        const pollingResponse = await axios.get(pollingEndpoint, {
            headers: headers
        })
        const transcriptionResult = pollingResponse.data
        // console.log(transcriptionResult, "trans");

        if (transcriptionResult.status === 'completed') {
            // console.log(transcriptionResult.words)
            return transcriptionResult
            // break
        } else if (transcriptionResult.status === 'error') {
            console.error(`Transcription failed: ${transcriptionResult.error}`)
        } else {
            await new Promise((resolve) => setTimeout(resolve, 3000))
        }
    }
}

