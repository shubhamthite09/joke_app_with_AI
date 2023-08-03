require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/",(req,res)=>{
    res.send("welcome");
})
app.get("/ask",async(req,res)=>{
    console.log();
    let ans = await checkTheAns(req.query.que);
    res.send(ans);
})

        

async function checkTheAns(que){
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content:`can you tail me joke on ${que}` }]
        });
        responce = chatCompletion.data.choices[0].message.content

        return responce;
}

app.listen(7890,()=>{
    console.log(7890);
})
