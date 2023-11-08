import React, { useEffect, useRef, useState } from 'react';
import OpenAI from 'openai';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Drawer,
  Fab,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import { delteFirstFour } from './ProjectServices';

//todo: add token optimization function to prevent token from being used up
export default function DemoChat() {
  const ownerContext = `Site owner context:
  Name: Lê Trung Vĩ
  Age: 19
  Languages: Vietnamese, English
  Education: second year student at FPT University
  Hobbies: Reading, playing games, watching movies, listening to music, learning new things
  Tech stack:
  - Frontend: ReactJS, JavaScript, HTML, CSS, Bootstrap, MaterialUI,SCSS
  - Backend: NodeJS, ExpressJS, MySQL
  - Database: MySQL
  - Version control: Git, GitHub
  Socials:
  - LinkedIn: https://www.linkedin.com/in/vile75/
  - GitHub: https://github.com/vidz231
  - Phone: +84945678808`;
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: 'true',
  });

  const [messages, setMessages] = useState([
    {
      role: 'system',
      content:
        "You are a site owner's assisstant. ONLY answer question related to the site onwer context.DO NOT use any of the world knowledge to answer the question. Only answer the question based on the context provided" +
        ownerContext +
        +'if encounter irrelevant question REPLY with i cant reply to this question',
    },
  ]);
  const [input, setInput] = useState('');

  async function getChatCompletion(message) {
    if (message === 'end') {
      setMessages([
        ...messages,
        {
          role: 'system',
          content: 'Thank you for chatting with me. Have a nice day!',
        },
      ]);
      setMessages([
        {
          role: 'system',
          content:
            "You are a site owner's assisstant. ONLY answer question related to the site onwer context.DO NOT use any of the world knowledge to answer the question. Only answer the question based on the context provided" +
            ownerContext +
            +'if encounter irrelevant question REPLY with i cant reply to this question',
        },
      ]);
      return;
    }

    // const words = message.split(/\s+/);

    const newMessages = [...messages, { role: 'user', content: message }];
    setMessages(delteFirstFour(newMessages));

    const chatCompletion = await openai.chat.completions.create({
      messages: newMessages,
      model: 'gpt-3.5-turbo',
      max_tokens: 200,
    });

    setMessages([
      ...newMessages,
      {
        role: 'assistant',
        content: chatCompletion.choices[0].message.content,
      },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getChatCompletion(input);
    setInput('');
  }
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        disabled={true}
        color="primary"
        aria-label="add"
        onClick={handleDrawerOpen}
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <ChatIcon />
      </Fab>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '20vw',
          }}
        >
          <Card sx={{ flexGrow: 1, overflow: 'auto' }}>
            <CardContent>
              <Typography variant="h6" color={'primary.main'}>
                this is a demo chatbot. please do not ask any question other
                than the site owner context type 'end' to end the conversation
              </Typography>
              {messages.map(
                (message, index) =>
                  index !== 0 && (
                    <Typography key={index} variant="body2" gutterBottom>
                      <Typography variant="h6" color={'primary.main'}>
                        {message.role === 'user' ? 'You:' : 'AI: '}
                      </Typography>
                      {message.content}
                    </Typography>
                  ),
              )}
              <div ref={messagesEndRef} />
            </CardContent>
          </Card>
          <Card>
            <CardActions>
              <TextField
                fullWidth
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' ? handleSubmit(e) : null)}
              />
              <IconButton color="primary" onClick={handleSubmit}>
                <SendIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Drawer>
    </div>
  );
}
