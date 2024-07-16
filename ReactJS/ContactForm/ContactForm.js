"use strict";

const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

function ContractForm() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          message: msg,
        }),
      });
      const text = await response.text();
      alert(text);
    } catch (error) {
      alert("Error submitting form!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          name="name"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea
          id="message-input"
          name="message"
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        ></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

ReactDOM.render(<ContractForm />, document.getElementById("root"));
