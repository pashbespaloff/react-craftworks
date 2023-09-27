import React, {useState} from 'react';
import {chatRooms} from "./chatRooms";
import Switcher from './Switcher';
import Text from './Text';
import ChatRoomsSelect from './ChatRoomsSelect';
import useChatConnection from "./useChatConnection";
import useNotifications from "./useNotifications";

export default function Chat() {
  const [activeChatRoom, setActiveChatRoom] = useState(chatRooms[0]);
  const [theme, setTheme] = useState("light");
  const [isEncrypted, setEncryption] = useState(false);

  const handleThemeSwitch = () => setTheme(prev => prev === "dark" ? "light" : "dark");
  const handleEncryptionSwitch = () => setEncryption(prev => !prev);

  useChatConnection(activeChatRoom, isEncrypted);
  useNotifications(activeChatRoom, theme);

  return (
    <>
      <Switcher onChange={handleThemeSwitch}>use dark theme</Switcher>
      <Switcher onChange={handleEncryptionSwitch}>enable encryption</Switcher>
      <Text>choose the chat room:</Text>
      <ChatRoomsSelect setActiveChatRoom={setActiveChatRoom} />
      <Text>welcome to the {activeChatRoom} room</Text>
    </>
  )
};