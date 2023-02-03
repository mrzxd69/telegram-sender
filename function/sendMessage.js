import config from '../config.js'

export default async (ip, name, email, number) => {
    const message = `✅ Новая%20заявка%21%0A%0Aip:%20${ip}%0AИмя:%20${name}%0AНомер:%20${number}%0AПочта:%20${email}`

    let data = await fetch(config.apiUrl + config.botToken + '/sendMessage?chat_id=' + config.chatId + '&text=' + message)
    data = await data.json()
    console.log(data)
}