import React, { useState } from 'react';
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";
import { GoogleGenerativeAI } from "@google/generative-ai";
import detectcss from './detectcss.module.scss'
import Markdown from 'react-markdown'
import accorcss from './accordion.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Detect() {
  const [errormsg, setErrormsg] = useState('Error in image processing');

  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [geminiDisc, setGeminiDisc] = useState(null);
  const genAI = new GoogleGenerativeAI("AIzaSyCVhKLvwOpQa6S-zUP3_3lMB-z_7ltpgQ8");


  const [openAcc, setOpenAcc] = useState(false)
  const fileTypes = ["JPG", "PNG", "GIF"];

  const [fileData, setFileData] = useState(null);
  const [detectionResult, setDetectionResult] = useState(null);

  const loadImageBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = async (file) => {
    if (file) {
      try {
        const imageData = await loadImageBase64(file);
        setFileData(imageData);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }
  }

  // const handleImageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     try {
  //       const imageData = await loadImageBase64(file);
  //       setFileData(imageData);
  //     } catch (error) {
  //       console.error('Error loading image:', error);
  //     }
  //   }
  // };
  const notify = () => toast.warn(`${errormsg}`);
  // const notify2 = () => toast.warn(`Error detecting diseases:', ${error.message}`);

  const handleDetectClick = async () => {
    if (fileData) {
      try {
        setShowLoading(!showLoading2)
        const response = await axios({
          method: 'POST',
          url: 'https://detect.roboflow.com/plants-diseases-detection-and-classification/12',
          params: {
            api_key: 'NuVKki2nV2l1R8EEhXRj', // Replace 'your_api_key_here' with your actual API key
          },
          data: fileData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        setDetectionResult(response.data);
        setShowLoading(!showLoading2)
      } catch (error) {
        console.error('Error detecting diseases:', error.message);
        setErrormsg(`Error detecting diseases:', ${error.message}`);
        notify();
      }
    } else {
      console.error('No image uploaded.');
      setErrormsg('No Image Detected !!!')
      notify();
    }
  };

  async function run() {
    setShowLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `What is ${detectionResult.predictions[0].class} and give its cure if it is a plant diseases. Please use easy english and `

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setGeminiDisc(text);
    console.log(text);
  }

  return (
    <>
      <ToastContainer />
      <div className={`${detectcss.container} flexverti`}>
        <h1>Just upload the image of observed disease and get the cure on a snap !!</h1>
        {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}
        <div className={detectcss.inputdiv}></div>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        <div className={detectcss.showimg}>
          {fileData && <img src={fileData} alt="Uploaded" />}</div>
        <button onClick={handleDetectClick} className={detectcss.btn1}>Detect Diseases</button>
        <h4 onClick={run} className={`${detectcss.invisible} ${detectcss.btn1}`}>Get Cures with AI</h4>
        {showLoading && !detectionResult && (<div className={detectcss.loader}></div>)}
        {detectionResult && (
          <div className={detectcss.results}>
            <h3>Detection Result:</h3>
            {/* <pre>{JSON.stringify(detectionResult, null, 2)}</pre>/ */}
            <p>{detectionResult.predictions.length >= 1 ? (detectionResult.predictions[0].class) : 'No disease detected'}</p>


            <div className={accorcss.accordion}>
              <div className={`${accorcss['accordion-item']} ${openAcc ? accorcss.open : ''} flexverti`}>
                <div className={`${accorcss.title} flexhori`} onClick={() => { setOpenAcc(!openAcc) }}>
                  Description of Disease
                  {openAcc ? <i className="ri-arrow-drop-up-line"></i> : <i className="ri-arrow-drop-down-line"></i>}
                </div>
                {showLoading && !geminiDisc && detectionResult.predictions.length >= 1 ? (<div className={detectcss.loader}></div>) : ""}
                <div className={accorcss.content}>
                  {/* {openItems.includes(index) && item.content} */}
                  {geminiDisc && (<Markdown>{geminiDisc}</Markdown>)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
