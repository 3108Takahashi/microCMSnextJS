import {User,getUserList,putUserList} from "@/libs/client";
import { NextResponse,NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const userfilter = searchParams.get('user') || "all";
    const res = await getUserList(userfilter);
    //console.log(JSON.stringify(typeof res));
    return NextResponse.json(res);
  }

  // MicroCMS登録
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body.user)
  try{
    const res = await putUserList(body.user,body.password,body.token);
  }
  catch(e){
    console.log(e);
  }
  return NextResponse.json({status: "ok"});
}