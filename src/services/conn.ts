const mongoose = require('mongoose')

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://root:<LTittBNnYnl3LSYi>@cluster0.wofeoxy.mongodb.net/?retryWrites=true&w=majority"
        )
    } catch (error) {
        console.log(`Erro: ${error}`)
    }    
}

module.exports = main;

