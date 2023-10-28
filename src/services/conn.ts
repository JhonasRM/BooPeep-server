async function conn() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://root:<LTittBNnYnl3LSYi>@cluster0.wofeoxy.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log('Conectado ao Banco!')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }    
}

export default conn

