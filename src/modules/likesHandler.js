import { INVOLVEMENT_API_URL } from "../globals";

export const postLikes = async (data)=>{
    await fetch(`${INVOLVEMENT_API_URL}/likes`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });
    

}

export const getLikes = async ()=>{
    const response = await fetch(`${INVOLVEMENT_API_URL}/likes`);
    const data = await response.json();
    console.log(data);
    return data;


}




