import { createContext, useContext, useEffect, useState } from 'react';
import { getUserById } from '@/helpers/data';
const ChatContext = createContext(undefined);
export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext can only be used within ChatProvider');
  }
  return context;
};
export const ChatProvider = ({
  children
}) => {
  const [activeChat, setActiveChat] = useState();
  const [offcanvasStates, setOffcanvasStates] = useState({
    showChatList: false,
    showUserProfile: false,
    showVoiceCall: false,
    showVideoCall: false,
    showUserSetting: false
  });
  const changeActiveChat = async userId => {
    const user = await getUserById(userId);
    if (user) setActiveChat(user);
  };
  const toggleChatList = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showChatList: !offcanvasStates.showChatList
    });
  };
  const toggleUserProfile = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showUserProfile: !offcanvasStates.showUserProfile
    });
  };
  const toggleUserSetting = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showUserSetting: !offcanvasStates.showUserSetting
    });
  };
  const toggleVoiceCall = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showVoiceCall: !offcanvasStates.showVoiceCall
    });
  };
  const toggleVideoCall = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showVideoCall: !offcanvasStates.showVideoCall
    });
  };
  const chatList = {
    open: offcanvasStates.showChatList,
    toggle: toggleChatList
  };
  const chatProfile = {
    open: offcanvasStates.showUserProfile,
    toggle: toggleUserProfile
  };
  const voiceCall = {
    open: offcanvasStates.showVoiceCall,
    toggle: toggleVoiceCall
  };
  const videoCall = {
    open: offcanvasStates.showVideoCall,
    toggle: toggleVideoCall
  };
  const chatSetting = {
    open: offcanvasStates.showUserSetting,
    toggle: toggleUserSetting
  };
  useEffect(() => {
    changeActiveChat('101');
  }, []);
  return <ChatContext.Provider value={{
    chatSetting,
    activeChat,
    changeActiveChat,
    chatList,
    chatProfile,
    videoCall,
    voiceCall
  }}>
      {children}
    </ChatContext.Provider>;
};