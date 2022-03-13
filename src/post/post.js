import React from 'react';
import { Avatar, Card, CardHeader, CardContent, Typography, Paper } from '@mui/material';
import Comments from '../comments'
import { stringAvatar, relativeTime } from '../functions';
import './post.css'

const Post = () => {

    const post = document.__article
    const { author, date, text } = post

    return (
        <Paper className='post-card' elevation={5}>
            <Card sx={{ maxWidth: 500}} elevation={0}>
                <CardHeader
                    avatar={
                        <Avatar {...stringAvatar(`${author}`)} />
                    }
                    title={<Typography variant="body1" sx={{fontSize: '20px'}}>
                        {author}
                    </Typography>}
                    subheader={relativeTime(date)}
                >
                </CardHeader>
                <CardContent>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
            <Comments />
        </Paper>
    )

}

export default Post