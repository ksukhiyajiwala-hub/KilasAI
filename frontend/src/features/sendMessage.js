import React from "react";
import api from "../../utils/axios";

async function sendMessage(payload) {
  try {
    const { data } = await api.post("/api/agent/chat", payload);
    console.log("Send Message response", data);
    return data;
  } catch (error) {
    console.log("send message error", error);
    return null;
  }
}

export default sendMessage;
