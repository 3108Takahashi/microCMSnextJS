'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
import {User,getUserList} from "@/libs/client";



export default function Home() {
  // お知らせ一覧の読み込み
  /*
  const [userList, setUserList] = useState<User[]>([]);
  useEffect(() => {
    getUserList().then((userList: User[]) => {
      setUserList(userList)
      console.log(userList)
    })
  }, []);
  */

  const [userList, setUserList] = useState<User[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/userapi?user=testx")
        .then((res) => res.json())
        .then((data:User[]) => {
          setUserList(data)
          console.log(data);
        });
      })();
  },[]);

  const postTest = async () => {
    const res = await fetch("/userapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ユーザ名固定で送ってみる
      body: JSON.stringify({ "user": "testx", "password":"testx", "token": "testx"})
    });
  }
  

  return (
    <div>
      <h1>ユーザーリスト</h1>
      
      <ul>
        {userList.map((user: User) => (
          <li key={user.id}>
              {user.user}
          </li>
        ))}
      </ul>
      <br />
      <div>
        <button onClick={postTest}>登録テスト(押してね)</button>
      </div>
      </div>

  )
  }
