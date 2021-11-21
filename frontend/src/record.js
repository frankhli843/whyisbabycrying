export const recordAudio = (timeMS) => new Promise((resolve, reject) => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
                resolve(audioChunks)
            });

            setTimeout(() => {
                mediaRecorder.stop();
            }, timeMS);
        });
});