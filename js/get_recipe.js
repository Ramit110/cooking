
onmessage = async (message) => {
  console.log(message.data);
  const request = new Request(message.data);
  try {
    const response = await fetch(request);
    if (!response.ok) {
      console.error(response);
      this.postMessage(null);
    }

    console.log(response.json());
    postMessage(response.json());
  }
  catch (error) {
    console.error(error.message);
    postMessage(null);
  };
}
