import React from "react";

function Messages() {
  return (
    <div>
      <h1>Messages</h1>
      <form>
        <div>
          <input type="text" name="message" placeholder="Leave us a message" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Messages;