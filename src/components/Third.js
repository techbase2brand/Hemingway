import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Third() {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/dumy')
    }
    const handleClick = () => {
        navigate('/4th-page')
    }
    return (
        <Card className='card-one'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='rewrite-this'>
                    Rewrite this <CloseIcon className='close-icon' onClick={handleClose} />
                </Typography>
                <Typography variant="body2" color="text.secondary" className='rewrite-para'>
                    I made a website where you have to guest if a Trump tweet is real or fake. I compiled 40 crazy real tweets and 40 fake tweets. It’s surprisingly hard!
                </Typography>
                <Typography variant="body2" color="text.secondary" className='rewrite-para2'>
                    As a Reddit title for
                </Typography>
                <Button variant="contained" className='button-confirm' onClick={handleClick}>
                    Confirm
                </Button>
            </CardContent>

        </Card>
    );
}
