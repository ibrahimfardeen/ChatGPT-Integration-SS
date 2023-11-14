import {chatGptToken, chatGptUrl } from '../constants/constants';
export async function generateQuestion(body, client){
    const result = await client.request.post(chatGptUrl,{options:{
      headers:{
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${chatGptToken}`
      }
    }},body);
    console.log(result);
    return JSON.parse(result).body;
  }