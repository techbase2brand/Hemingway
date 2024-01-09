import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 320;

export default function FirstDesign() {


    return (
        <Box sx={{ display: 'flex', variant: "h6" }}>
            <h1 className='coffey'>
                Coffey
            </h1>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography paragraph>
                    <div
                        className='titles'
                    >
                        <span style={{ background: '#D1F2FF' }}>Coffey helps you</span> Write
                        <span style={{ background: '#C7FFDD' }}> Catchy</span>{' '}
                        <span style={{ background: '#EDDFFF' }}>Reddit titles so that more</span>{' '}
                        <span style={{ background: '#FFEFD0' }}>people</span> see{' '}
                        <span style={{ background: '#FFD9D9' }}>your post.</span>
                    </div>
                    <div className='anchor-field'>
                        <div>
                            <Link to='/second' style={{ color: '#2E58FF' }}>
                                Start with a template
                            </Link>
                        </div>
                        <span>or</span>
                        <div className='anchor-field-2'>
                            <a href="#" style={{ color: '#2E58FF' }}>
                                Write from scratch
                            </a>
                        </div>
                    </div>
                </Typography>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: '#EAEAEA'
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Button variant="contained" className='button-para'>
                    Paraphrase
                </Button>
                <Link to='/second' style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ m: 7 }}>Browse Templates</Typography>
                </Link>
                <div style={{ marginLeft: '35px' }}>
                    <p className='read'>Readibility</p>
                    <p className='grade'>Grade 6</p>
                    <p className='grade' style={{ color: '#84899D' }}>Good</p>
                </div>

                <List sx={{ maxWidth: 360, bgcolor: 'background.paper', margin: '19px 30px', paddingTop: '0px', paddingBottom: '0', borderRadius: '10px', textAlign: 'left', lineHeight: '14px' }}>
                    <p className='frame-open'><span className='frame'>6</span> seconds</p>
                    <p className='frame-open'><span className='frame'>133</span> words</p>
                    <p className='frame-open'><span className='frame'>757</span> characters</p>
                </List>
                <div className='paragraph'>
                    <span
                        className='number-size'
                    >
                        2
                    </span>
                    <span className='format-text'>adverbs, meeting the goal of 2 or fewer.</span>
                </div>
                <div className='paragraph' style={{ background: '#C7FFDD' }}>
                    <span
                        className='number-size'
                    >
                        1
                    </span>
                    <span className='format-text'>use of passive voice, meeting the goal of 2 or fewer.</span>
                </div>
                <div className='paragraph' style={{ background: '#EDDFFF' }}>
                    <span
                        className='number-size'
                    >
                        1
                    </span>
                    <span className='format-text'>phrase has a simpler alternative.</span>
                </div>
                <div className='paragraph' style={{ background: '#FFEFD0' }}>
                    <span
                        className='number-size'
                    >
                        1
                    </span>
                    <span className='format-text'>of 11 sentences is hard to read.</span>
                </div>
                <div className='paragraph' style={{ background: '#FFD9D9' }}>
                    <span
                        className='number-size'
                    >
                        1
                    </span>
                    <span className='format-text'>of 11 sentences is very hard to read.</span>
                </div>
            </Drawer>
        </Box>
    );
}
