export const query = (content)=> {
    return({
    "model": "gpt-3.5",
    "messages": [{"role": "user", "content": `Please provide ten questions along with question types for ${content}, if the question type has multiple choices mention the choices in an array. Always mention the question type and choices after the question with a sepeartor ":-:"(sepearator should be none other than ":-:") between each of them(like: question:-:questionType:-:choices:-:mandatory). A question should be always followed by question type followed by choices, if there is no choices please mention it as empty array. Always mention the choices in a choices array.The question types should be one of TextInput, MultiChoice, YesNo, OpinionScale, DateTime, Scale, Ranking, NumberInput, EmailInput. OpinionScale and Scale question do not contain text choices. Also mention if the question is mandatory/not mandatory after the choices with ":-:" seperator`}]
    });
  }