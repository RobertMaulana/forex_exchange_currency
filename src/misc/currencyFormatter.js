const formatter = curr => {
    const round = Math.round(curr * 1000) / 1000
    return round.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export default formatter