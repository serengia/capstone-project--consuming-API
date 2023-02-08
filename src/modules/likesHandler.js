import { INVOLVEMENT_API_URL } from "../globals";

const postLikes = async (data)=>{
    await fetch(`${INVOLVEMENT_API_URL}/likes`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });
    console.log('Added successfully');

}

export default postLikes;


