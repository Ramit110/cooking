
onmessage = async (message) => {
  const request = new Request(message.data);
  try {
    const response = await fetch(request);
    if (!response.ok) {
      console.error(response);
      this.postMessage(null);
    }

    const json = await response.json();
    postMessage(json);
  }
  catch (error) {
    console.error(error.message);
    postMessage(null);
  };
}
