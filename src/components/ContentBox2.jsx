import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContentBox2 = () => {
  return (
    <div className="box2" id="box2Id">
      <Card
        className="card"
        sx={{
          maxWidth: 345,
          backgroundColor: "#283747",
          borderRadius: "10px",
          m: 2,
          color: "#D0D3D4 ",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://i.pinimg.com/564x/9c/4f/30/9c4f3022188ed2d798ecca6fc0a5840c.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Branding
          </Typography>
          <Typography variant="body2" className="secondText" color="#D0D3D4 ">
            Branding gives your business a personality. And customers become
            loyal to a brand if they relate to the brand’s personality. Your
            brand can be trustworthy, luxurious, passionate, tasty, fun,
            innovative, caring, professional, or safe.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card
        className="card"
        sx={{
          maxWidth: 345,
          backgroundColor: "#283747",
          borderRadius: "10px",
          m: 2,
          color: "#D0D3D4 ",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://i.pinimg.com/564x/77/8e/25/778e25e3e735343d07ba772dceed5951.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Soft Skills
          </Typography>
          <Typography variant="body2" className="secondText" color="#D0D3D4 ">
            There may not be an "I" in team, but there is an "I" in disengaged.
            What does this have to do with leadership? Well, regardless of what,
            why and where you lead, you -- as the leader -- are directly
            responsible for the engagement of those who follow you.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card
        className="card"
        sx={{
          maxWidth: 345,
          backgroundColor: "#283747",
          borderRadius: "10px",
          m: 2,
          color: "#D0D3D4 ",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://i.pinimg.com/564x/90/f6/0b/90f60b399f20139a28bf35fe854dd780.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hard Skills
          </Typography>
          <Typography variant="body2" className="secondText" color="#D0D3D4 ">
            During your interview, it’s important to talk about your experience,
            goals, and skills – specifically hard skills. That’s because
            employers are eager to learn about what you’ve acquired over the
            course of your professional life. But what exactly are they? Hard
            skills are related to tasks and processes. They are generally taught
            through
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card
        className="card"
        sx={{
          maxWidth: 345,
          backgroundColor: "#283747",
          borderRadius: "10px",
          m: 2,
          color: "#D0D3D4 ",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://i.pinimg.com/564x/1a/21/c4/1a21c43ae1ead2390783b0811912e1c1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Education
          </Typography>
          <Typography variant="body2" className="secondText" color="#D0D3D4 ">
            The future of education needs a leader with an edge. It needs a bold
            innovator with the knowledge and passion necessary for bringing
            large-scale change. It needs a Shark. NSU helps you move education
            forward at school, district or national levels with an Ed.D. in
            Educational Leadership. Challenge yourself to solve real-world
            problems through project-based planning and implementation
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card
        className="card"
        sx={{
          maxWidth: 345,
          backgroundColor: "#283747",
          borderRadius: "10px",
          m: 2,
          color: "#D0D3D4 ",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://i.pinimg.com/564x/f6/86/ba/f686ba7d50bbcf6fc6d127350a805ac1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hobbies
          </Typography>
          <Typography variant="body2" className="secondText" color="#D0D3D4 ">
            If you’re here, you know that spending time on a great hobby can
            transform and enrich your life. Hobbies can help you learn a new
            skill, introduce you to like-minded people, trigger more laughter,
            and satisfy your curiosity while giving you better stories to tell.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card
        className="card"
        sx={{
          maxWidth: 345,
          backgroundColor: "#283747",
          borderRadius: "10px",
          m: 2,
          color: "#D0D3D4 ",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image="https://i.pinimg.com/564x/43/f3/3d/43f33df6195bab6f5ee7fb2d5c48ae98.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Experience
          </Typography>
          <Typography variant="body2" className="secondText" color="#D0D3D4 ">
            When searching for a new job, you’ll come across many job postings
            that ask for different levels of work experience. As your career
            develops, having a thorough understanding of job experience levels
            can help you choose the positions that will keep you on the right
            career path.
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default ContentBox2;
