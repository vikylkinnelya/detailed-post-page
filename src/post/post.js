import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardHeader, CardContent, Typography, Paper, Skeleton, Tooltip } from '@mui/material';
import Comments from '../comments'
import { stringAvatar, relativeTime, datePrettier } from '../functions';
import './post.css'

const Post = () => {

    const [post, setPost] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setPost(document.__article)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <Paper className='post-card' elevation={5}>
            {post !== undefined &&
                <Card sx={{ maxWidth: 500 }} elevation={0}>
                    <CardHeader
                        avatar={
                            loading ? <Skeleton animation="wave" variant="circular" width={40} height={40} /> :
                                <Avatar {...stringAvatar(`${post.author}`)} />
                        }
                        title={loading ?
                            <Skeleton animation="wave"
                                height={30}
                                width="80%" /> :
                            <Typography variant="body1" sx={{ fontSize: '20px' }}>
                                {post.author}
                            </Typography>}
                        subheader={loading ?
                            <Skeleton animation="wave"
                                height={20}
                                width="30%" /> :
                            <Tooltip title={`${datePrettier(post.date)}`} placement="bottom-start">
                                <div>{relativeTime(post.date)}</div>
                            </Tooltip>
                        }
                    >
                    </CardHeader>
                    <CardContent sx={{ width: 500 }}>
                        {loading ?
                            <>
                                <Skeleton animation="wave"
                                    height={15} width="100%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave"
                                    height={15} width="100%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave"
                                    height={15} width="100%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave"
                                    height={15} width="100%" style={{ marginBottom: 6 }} />
                            </>
                            :
                            <Typography variant="body1">
                                {post.text}
                            </Typography>}

                    </CardContent>
                </Card>
            }
            <Comments />
        </Paper >
    )

}

export default Post