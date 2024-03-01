import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export type User = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    user: string;
    password: string;
    token: string;
}

// search
export async function getUserList(user:string): Promise<User[]> {
    let data =[];
    if (user == "all" || user == ""){
      data = await client.get({ endpoint: "users" });
    }else{
        data = await client.get({ endpoint: "users", queries:{filters:'user[equals]'+user} });
    }
    return data.contents;
  }

  // craete
  export async function putUserList(username:string,password:string,token:string) {
    const senddata = `{ "user": "${username}", "password": "${password}", "token": "${token}" }`;
    console.log("craete:"+senddata);
    const response = await client.create({ endpoint: "users" , content:JSON.parse(senddata)}).then((res) => {
      console.log(res);
    });
    return {"res":response};
  }