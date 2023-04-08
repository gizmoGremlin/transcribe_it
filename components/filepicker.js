import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FilePicker = () => {
    const [loading, setLoading] = useState(false);
const [convertedText, setConvertedText] = useState("");

    const [formData, setFormData] = useState(null);

    const sendAudio = async () => {
        if(loading){
            return
        }

        setLoading(true);
        console.log("form data" + formData)

       const res= await fetch("https://api.openai.com/v1/audio/transcriptions", {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ""}`,
            },
            method: "POST",
            body: formData,
          });
     
        const data = await res.json();
        setLoading(false);
        console.log(data.text)
        setConvertedText("texty "+data.text);
      
      };
      
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the accepted files
    const file = acceptedFiles[0];
    const data = new FormData();
    data.append("file", file);
    data.append("model", "whisper-1");
    data.append("language", "en");
    setFormData(data);

    // check if the size is less than 25MB
    if (file.size > 25 * 1024 * 1024) {
      alert("Please upload an audio file less than 25MB");
      return;
    }
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>     <button onClick={sendAudio} >
    Send Audio
  </button>
    
    <div {...getRootProps()}>
   
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or <a>click</a> to select files</p>
      )}
    </div>
  </>

  );
};

export default FilePicker;