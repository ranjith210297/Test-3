import React, { useState } from "react";
import * as ml5 from "ml5";
import {useCallback, useMemo } from "react";
import ImageCapture from "react-image-data-capture";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import GaugeChart from "react-gauge-chart";
import Loader from "react-loader-spinner";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  const chartStyle = {
    height: 150,
    width: 300,
  };
  console.log(label, confidence);
  return (
    <div>
      <h3>
        <b>Leaf Disease</b>
      </h3>
      <h5 style={{ color: "#ffd11a" }}>{label}</h5>
      <h3>
        <b>Accuracy</b>
      </h3>

      <GaugeChart
        style={chartStyle}
        id="gauge-chart3"
        nrOfLevels={20}
        arcWidth={0.3}
        percent={confidence}
        textColor="red"
      />
    </div>
  );
};

function TakePicture() {
  const [showImgCapture, setShowImgCapture] = useState(true);
  const config = useMemo(() => ({ video: true }), []);
  /*
    { video: true } - Default Camera View
    { video: { facingMode: environment } } - Back Camera
    { video: { facingMode: "user" } } - Front Camera
  */
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);

  
  const [result,setResult] = useState([]);
  const onCapture = (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    // Unmount component to stop the video track and release camera
    setShowImgCapture(false);
  };
  const onError = useCallback((error) => {
    console.log(error);
  }, []);

  // imgFile can be used as a file upload form submission
  const formData = new FormData();
  formData.append("file", imgFile);

  const classifier = ml5.imageClassifier("../../model/model.json", modelLoaded);
  function modelLoaded() {
    console.log("Model Loaded!");
  }
  function classifyImg() {
    classifier.classify(document.getElementById("img"), (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      setResult(results);
    });
  }

  const toggle = () => {
    classifyImg();
    setResult([]);
  };

  // const ImageThumb = ({ imgSrc }) => {
  //   return (
  //     <img
  //       style={{ objectFit: "cover" }}
  //       src={imgSrc}
  //       id="imgSrc"
        
  //       // id="image"
  //       // width="150px"
  //       // height="150px"
  //       alt={imgSrc}

        
  //     />
      
  //   );
  // };
    
  


 return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card
            bg="transparent"
            text="dark"
            border="success"
            className="text-center"
            style={{
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "55vh",
              maxHeight: "55vh",
            }}
          >
            <Card.Header>Capture Image</Card.Header>
            {/* <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            > */}
              {/* <input
                className="form-control"
                input="image"
                id="inp"
                type="file"
                onChange={handleUpload}
              />
              <br /> */}

<>
      {showImgCapture && (
        <ImageCapture
          onCapture={onCapture}
          onError={onError}
          width={300}
          userMediaConfig={config}
        />
      )}

      {imgSrc && (
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} id="img" alt="captured-img" />

        </div>
      )}
    </>
              {/* <div>{imgFile && <ImageThumb image={imgFile} />}</div> */}
              <div>
                <br />

                {/* Button for classify */}
                <Button
                  id="button"
                  className="btn btn-success"
                  onClick={() => toggle()}
                >
                  <span className="sr-only">Classify...</span>
                </Button>

              </div>
            {/* </Card.Body> */}
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card
            bg="transparent"
            text="dark"
            border="success"
            className="text-center"
            style={{
              borderRadius: "2%",
              borderWidth: "3px",
              minHeight: "55vh",
              maxHeight: "55vh",
            }}
          >
            <Card.Header>Predicted Output</Card.Header>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "centerloader ",
              }}
            >
              {result.length > 0 ? (
                <div>
                  <Chart data={result[0]} />
                </div>
              ) : (
                <Loader type="Oval" color="#02b875" height={100} width={100} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );






};

 

export default TakePicture;
