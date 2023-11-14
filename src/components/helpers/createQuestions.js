import { url, seperator } from "../constants/constants";
export default async function createQuestions(len, questionsArray, surveyId, client){
    for (let i = 0; i < len; i++) {
      if (questionsArray[i].startsWith(" ")) {
        continue;
      }
      var { splitString, type } = splitBySeperator(questionsArray, i);
      let originalChoices = [];
      originalChoices = extractOriginalChoices(originalChoices, splitString);
      let choices = [];
      choices = generatePayloadForChoices(originalChoices, choices);
      const isRequired = splitString[3] === "Mandatory" || splitString[3] === "mandatory";
      let body = {};
      body = assignBody(type, body, surveyId, splitString, isRequired, choices);
      await createQuestion(client, body);
    }
  }

function generatePayloadForChoices(originalChoices, choices) {
    if (originalChoices?.length) {
        choices = originalChoices.map(str => {
            return { "text": str };
        });
    }
    return choices;
}

function extractOriginalChoices(originalChoices, splitString) {
    try {
        originalChoices = JSON.parse(splitString[2].replace(/'/g, '"'));
    } catch (error) {
        console.log('JSON parse error ');
    }
    return originalChoices;
}

function splitBySeperator(questionsArray, i) {
    const splitString = questionsArray[i].split(`${i + 1}.`)[1].split(seperator);
    let type = splitString[1].trim();
    type = typeCheck(type);
    return { splitString, type };
}

async function createQuestion(client, body) {
    await client.request.post(`${url}/v3/questions`, {
        options: {
            headers: {
                "Authorization": "Bearer <%=iparams.surveysparrow_api_key%>"
            }
        }
    },
        body
    );
}

function assignBody(type, body, surveyId, splitString, isRequired, choices) {
    if (type === "MultiChoice" || type === "RankOrder") {
        body = {
            "survey_id": surveyId,
            "question": {
                "text": splitString[0],
                "type": type,
                "required": isRequired,
                "choices": choices
            }
        };
    } else {
        body = {
            "survey_id": surveyId,
            "question": {
                "text": splitString[0],
                "type": type,
                "required": isRequired,
            }
        };
    }
    return body;
}

function typeCheck(type) {
    if (type === 'Scale') {
        type = "OpinionScale";
    } else if (type === "Ranking") {
        type = "RankOrder";
    }
    return type;
}
