import sendMessage from "./sendMessage.js"

export default (req, res) => {
    req.on("data", async data => {
        data = JSON.parse(data)

        if(!data.number || !data.email || !data.name || !data.ip) {
            res.end(JSON.stringify({
                code: 304,
                msg: "Не указаны все поля"
            }))
        }


        res.end(JSON.stringify({
            code: 200,
            msg: "Ваша заявка отправлена"
        }))
        
        sendMessage(
            data.ip,
            data.name,
            data.email,
            data.number,
        )
    })
}