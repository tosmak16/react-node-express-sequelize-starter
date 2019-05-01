const inputFileUploadHandler = (event, functionTobeCalled) => {
  const reader = new window.FileReader();
  const file = event.target.files[0];

  reader.onloadend = () => {
    functionTobeCalled(reader.result);
  };

  reader.readAsDataURL(file);
};

export default inputFileUploadHandler;
