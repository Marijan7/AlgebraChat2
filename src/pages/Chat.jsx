import React, { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { chatRef } from "../firebase";
import { UserAuth } from "../context/Auth";
import Send from "../components/Send";
import Input from "../components/Input";
import Recieve from "../components/Recieve";

const Chat = () => {
      const [messages, setMessages] = useState([]);
      const { user } = UserAuth();

      useEffect(() => {
            onValue(chatRef, (snapshot) => {
                  const data = snapshot.val();
                  const messageArray = data && Object.values(data);
                  setMessages(messageArray);
            });
      }, []);

      return (
            <div className="  flex justify-center items-center bg-amber-300 h-screen">
                  <div className=" bg-chat-background relative pb-11 lg:rounded-l-3xl w-full box-border shadow-2xl shadow-zinc-700 overflow-hidden lg:w-4/5 lg:h-3/4 h-full flex">
                        <div className=" flex flex-col grow overflow-y-auto scrollbar-thin  ">
                              {messages?.map((message, index) =>
                                    message.sender === user.displayName ? (
                                          <Send
                                                key={index}
                                                message={message.message}
                                                time={message.time}
                                                name={message.sender}
                                          />
                                    ) : (
                                          <Recieve
                                                key={index}
                                                message={message.message}
                                                time={message.time}
                                                name={message.sender}
                                          />
                                    )
                              )}
                              <div className="absolute bottom-0 w-full">
                                    <Input />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Chat;
