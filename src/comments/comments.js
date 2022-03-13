import React, { useEffect, useState } from 'react'
import { List, ListItem, Avatar, ListItemAvatar, ListItemText, Divider, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { stringAvatar, relativeTime } from '../functions';
import './comments.css'

const Comments = () => {
    const [loading, setLoading] = useState(false)
    const [moreBtnIsVisible, setMoreBtnVisible] = useState(true)
    const [comments, setComments] = useState()

    const fetchComments = () => {
        const comm = document.__comments
        const moreComm = document.__moreComments
        return [...comm, ...moreComm]
    }

    function getComments() {
        setComments(() => fetchComments().slice(0, 2))
    }

    function getMore() {
        setMoreBtnVisible(false)
        setComments(() => fetchComments())
    }

    const imitateFetch = (func) => {
        setLoading(true)
        setTimeout(() => {
            func()
            setLoading(false)
        }, 4000)
    }

    useEffect(() => {
        imitateFetch(getComments)
    }, [])

    return (
        <div className='comments-list'>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} >
                <Divider>
                    {moreBtnIsVisible ?
                        <LoadingButton loading={loading} onClick={() => imitateFetch(getMore)}>
                            More comments
                        </LoadingButton> :
                        <Typography variant="body1" sx={{fontSize: '15px'}}>
                            Comments
                        </Typography>
                    }
                </Divider>
                {comments != null && comments.length > 0 && comments.map((comment, idx) => (
                    < ListItem key={idx} >
                        <ListItemAvatar>
                            <Avatar
                                sx={{ width: 27, height: 27, fontSize: '15px' }}
                                {...stringAvatar(`${comment.author}`)}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={comment.author}
                            secondary={
                                <>
                                    {relativeTime(comment.date)} <br />
                                    {comment.text}
                                </>
                            }
                        >
                        </ListItemText>
                    </ListItem>
                ))}
            </List >
        </div >
    )
}

export default Comments