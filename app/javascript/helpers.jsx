export function formatTime(centiseconds) {
    const mins = Math.floor(centiseconds / 6000)
    const secs = Math.floor((centiseconds - (mins * 6000)) / 100)
    const csecs = centiseconds - (mins * 6000) - (secs * 100)
    return [`${mins < 10 ? '0' : ''}${mins}`,
        `${secs < 10 ? '0' : ''}${secs}`,
        `${csecs < 10 ? '0' : ''}${csecs}`]
}
