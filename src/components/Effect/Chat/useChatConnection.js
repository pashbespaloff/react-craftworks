import {useEffect} from "react";

export default function useChatConnection(room, encryptionStatus) {
  useEffect(() => {
    const connection = createConnection(room, encryptionStatus);
    connection.connect();
    return () => connection.disconnect();
  }, [room, encryptionStatus]);
};

const createConnection = (roomTitle, isEncrypted) => {
  const encryptionStatus = isEncrypted ? "encrypted" : "unencrypted";
  return {
    connect: () => console.log(`✅ connecting to room "${roomTitle}" (${encryptionStatus})...`),
    disconnect: () => console.log(`❌ disconnected from room "${roomTitle}" (${encryptionStatus})`)
  };
};