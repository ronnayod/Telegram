async function sendMessage() {
    // const token = "7227587259:AAG8WNvSOVBO6BGCAmZzDI1v0C3xmySNH7M"; // ใส่ Token ของบอท
    // const chatId = "7736061719"; // ใส่ Chat ID
    const token = document.getElementById("token").value // ใส่ Token ของบอท
    const chatId = document.getElementById("chatId").value // ใส่ Chat ID
    const message = document.getElementById("message").value;

    if (!token ) {
      alert("กรุณากรอกToken");
      return;
    }
    else if (!chatId ) {
      alert("กรุณากรอกChatId");
      return;
    }
    else if (!message ) {
      alert("กรุณากรอกข้อความ");
      return;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        alert("ส่งข้อความเรียบร้อยแล้ว!");
        document.getElementById("message").value = "";
      } else {
        alert("การส่งข้อความล้มเหลว");
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาด: " + error.message);
    }
  }