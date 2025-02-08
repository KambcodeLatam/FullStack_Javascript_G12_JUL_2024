import 'dotenv/config'

export const sendMessage = async (req, res) => {
    const { message, model = 'gpt-4o-mini'  } = req.body
    const response = await fetch(process.env.OPENAI_BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            "model": model,
            "store": true,
            "messages": [
                {"role": "system", "content": "Eres un chef profesional experto en comida colombiana, quiero que con los ingredientes que tengo me des una receta, si te envio informacion que no sea comida dame un ejemplo de comida con la que si pudieramos cocinar,"},
                {"role": "user", "content": `mis ingredientes son: ${message}`}
            ]
        })
    })
    const data = await response.json()
    res.send(data.choices[0].message)
}
