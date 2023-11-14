import { url } from "../constants/constants";
export const createSurvey = async (name, client) => {
    return await client.request.post(`${url}/v3/surveys`,{options:{
        headers:{
          "Authorization":"Bearer <%=iparams.surveysparrow_api_key%>"
        }
      }},
        {
          "name": name,
          "survey_type": "ClassicForm"
        }
      );
}