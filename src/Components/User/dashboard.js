import React, { useState } from "react";
import TwitterLineChart from "./Charts/Linechart";
import TwitterPieChart from "./Charts/PieChart";
import { Container, Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VideoComp from "./YoutubeVideo/VideoComponent";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
function Dashboard() {
  const [happy, sethappy] = useState(15);
  const [sad, setSad] = useState(65);
  const [neutral, setNeutral] = useState(20);
  const [tweeter, setTweeter] = useState("Obama ");
  const [tweetContent, setTweet] = useState(
    "Here lies the latest tweet content...."
  );
  const [tweetDT, setTweetDT] = useState("time and date");
  const [youtubeDescription, setYoutubeDescription] = useState(
    "Youtube Video Description Lies here..."
  );

  return (
    <Container>
      <h2 style={{ fontSize: "60px", marginBottom: 30 }}>Dashboard</h2>
      <Row>
        <h3>Twitter Analysis </h3>
        <FaTwitter color="blue" size="2.2em" style={{ marginLeft: 10 }} />
      </Row>
      <Row class="Row">
        <Col sm className="Col" style={{ backgroundColor: "#eee" }}>
          <h3
            style={{
              textAlign: "center",
              padding: 7,
              backgroundColor: "#ffe",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            Top Trending Data
          </h3>
          <p>
            <br />
            <h4>Latest Topic: </h4>
            <br />
            The Latest Trending topic right now is <strong>Donald Trump</strong>
            <br />
            <br />
            <h4>Latest Tweet: </h4>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                This was tweeted at ( {tweetDT} )
              </label>
              <br />
              <strong>{tweeter} Tweeted:</strong>
              <textarea
                disabled={true}
                value={tweetContent}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              />
            </div>
          </p>
          <br />
        </Col>

        <Col className="Col" sm style={{ backgroundColor: "#eee" }}>
          <TwitterLineChart />
        </Col>
      </Row>
      <Row class="Row" style={{ marginBottom: 30 }}>
        <Col sm className="Col" style={{ backgroundColor: "#eee" }}>
          <h3
            style={{
              textAlign: "center",
              padding: 7,
              backgroundColor: "#ffe",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            People Emotional State
          </h3>
          <h4>
            {" "}
            Happy (<CountUp end={happy} duration={7} />
            %){" "}
          </h4>
          <ProgressBar
            animated
            variant="success"
            now={happy}
            label={`(${happy}%)`}
          />
          <br />
          <h3>
            {" "}
            Nuetral (<CountUp end={neutral} duration={7} />
            %){" "}
          </h3>
          <ProgressBar
            animated
            variant="info"
            now={neutral}
            label={`(${neutral}%)`}
          />
          <br />
          <h3>
            {" "}
            Sad (<CountUp end={sad} duration={7} />
            %){" "}
          </h3>
          <ProgressBar
            animated
            variant="warning"
            now={sad}
            label={`(${sad}%)`}
          />
          <br />
        </Col>

        <Col className="Col" sm style={{ backgroundColor: "#eee" }}>
          <TwitterPieChart />
        </Col>
      </Row>
      <Row>
        <h3 style={{ marginBottom: 10 }}> Youtube Analysis </h3>
        <FaYoutube color="red" size="2.2em" style={{ marginLeft: 10 }} />
      </Row>
      <Row class="Row">
        <Col sm className="Col" style={{ backgroundColor: "#eee" }}>
          <h3
            style={{
              textAlign: "center",
              padding: 7,
              backgroundColor: "#ffe",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            Video Details
          </h3>
          <p>
            <br />
            <h3>Latest News: </h3>
            <br />
            The Latest News on flaan channel right now is{" "}
            <strong>Pewds being scammed</strong>
            <br />
            <br />
            <h3>Video Title: </h3>
            The Video title is{" "}
            <strong> Pewdiepie has Quit Youtube AGAIN?!?!?!?!??!</strong>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <br />
              <strong>Video Description: </strong>
              <textarea
                disabled={true}
                value={youtubeDescription}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              />
            </div>
          </p>
          <br />
        </Col>

        <Col className="Col" style={{ backgroundColor: "#eee" }}>
          <VideoComp />
          <br />
          <h4>
            {" "}
            <strong style={{ marginLeft: 10 }}> Youtuber : </strong>PewDiePie
          </h4>
        </Col>
      </Row>
      <Row class="Row">
        <Col sm className="Col" style={{ backgroundColor: "#eee" }}>
          <h3
            style={{
              textAlign: "center",
              padding: 7,
              backgroundColor: "#ffe",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            People Emotional State
          </h3>
          <h4>
            {" "}
            Happy (<CountUp end={happy} duration={7} />
            %){" "}
          </h4>
          <ProgressBar
            animated
            variant="success"
            now={happy}
            label={`(${happy}%)`}
          />
          <br />
          <h3>
            {" "}
            Nuetral (<CountUp end={neutral} duration={7} />
            %){" "}
          </h3>
          <ProgressBar
            animated
            variant="info"
            now={neutral}
            label={`(${neutral}%)`}
          />
          <br />
          <h3>
            {" "}
            Sad (<CountUp end={sad} duration={7} />
            %){" "}
          </h3>
          <ProgressBar
            animated
            variant="warning"
            now={sad}
            label={`(${sad}%)`}
          />
          <br />
        </Col>

        <Col className="Col" sm style={{ backgroundColor: "#eee" }}>
          <TwitterPieChart />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
