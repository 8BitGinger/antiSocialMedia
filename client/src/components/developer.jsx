import React from 'react';
import {
  CardMeta,
  CardHeader,
  CardContent,
  Card,
  Image,
  Icon,
  Grid,
} from 'semantic-ui-react';
import headshot from '../assets/about.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const DevCard = () => (
  <div className="center">
    <motion.div
      variants={fadeIn('down', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.4 }}
      id="about"
    >
      <Grid.Row className="page-picture">
        <a href="#dev">
          <div className="dev-banner"></div>
        </a>
        <h1>The Developer</h1>
      </Grid.Row>
      <Card className="about">
        <Image src={headshot} wrapped ui={false} />
        <CardContent className="low-card">
          <CardHeader>Ryan Fann</CardHeader>
          <CardHeader className="dev-title">
            Full Stack Web Developer
          </CardHeader>
          <div className="contact-strip">
            <CardMeta>
              <a target="blank" href="https://ryanfann.netlify.app/">
                <Icon name="briefcase" />
                port
              </a>
            </CardMeta>
            <CardMeta>
              <a target="blank" href="https://github.com/8BitGinger">
                <Icon name="github" />
                git
              </a>
            </CardMeta>
            <CardMeta>
              <a
                target="blank"
                href="https://www.linkedin.com/in/ryanfanntastic/"
              >
                <Icon name="linkedin" />
                link
              </a>
            </CardMeta>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
);

export default DevCard;
