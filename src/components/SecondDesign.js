import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const SecondDesign = () => {
    return (
        <div class="container-b">

            <h1 className='template' style={{ fontWeight: '600' }}>Templates
                <Link to='/'>
                    <CloseIcon className='close-icon' />
                </Link>
            </h1>
            <h1 className='template'>Choose a title from</h1>
            <div class="business-idea">
                <h2>I made an app that uses Machine Learning to detect & undo photoshopped/edited images</h2>
                <p class="upvotes">1,000 upvotes</p>
            </div>

            <div class="business-idea">
                <h2>I made a website that removes all the clutter from recipe sites and just shows the instructions (www.JustTheRecipe.app)</h2>
                <p>999 upvotes</p>
            </div>
            <Link to='/dumy' style={{ textDecoration: 'none' }}>
                <div
                    className="business-idea"
                >
                    <h2>I made a website where you have to guess if a Trump tweet is real or fake. I compiled 40 crazy real tweets and 40 fake tweets. It’s surprisingly hard!</h2>
                    <p className="upvotes">998 upvotes</p>
                </div>
            </Link>
            <div class="business-idea">
                <h2>I made a website that removes all the clutter from recipe sites and just shows the instructions (www.JustTheRecipe.app)</h2>
                <p class="upvotes">999 upvotes</p>
            </div>

            <div class="business-idea">
                <h2>I made an app that uses Machine Learning to detect & undo photoshopped/edited images</h2>
                <p>1,000 upvotes</p>
            </div>

            <div class="business-idea">
                <h2>I made a website that removes all the clutter from recipe sites and just shows the instructions (www.JustTheRecipe.app)</h2>
                <p class="upvotes">999 upvotes</p>
            </div>

            <div class="business-idea">
                <h2>I made an app that uses Machine Learning to detect & undo photoshopped/edited images</h2>
                <p>1,000 upvotes</p>
            </div>

            <div class="business-idea">
                <h2>I made a website that removes all the clutter from recipe sites and just shows the instructions (www.JustTheRecipe.app)</h2>
                <p class="upvotes">999 upvotes</p>
            </div>
        </div>
    )
}

export default SecondDesign