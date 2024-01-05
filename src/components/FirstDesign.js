import React from 'react';

export default function FirstDesign() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 2 }}>
                <h1 className='coffey'>Coffey</h1>
                <div
                 className='titles'
                >
                    <span style={{ background: '#D1F2FF' }}>Coffey helps you</span> Write
                    <span style={{ background: '#C7FFDD' }}> Catchy</span>{' '}
                    <span style={{ background: '#EDDFFF' }}>Reddit titles so that more</span>{' '}
                    <span style={{ background: '#FFEFD0' }}>people</span> see{' '}
                    <span style={{ background: '#FFD9D9' }}>your post.</span>
                </div>
                {/* <div className='anchor-field'>
                    <div>
                        <a href="#" style={{ color: '#2E58FF' }}>
                            Start with a template
                        </a>
                    </div>
                    <span>or</span>
                    <div>
                        <a href="#" style={{ color: '#2E58FF' }}>
                            Write from scratch
                        </a>
                    </div>
                </div> */}
            </div>
            <div
                className='sidebar-tab'
            >
                <button
                    style={{
                        width: '256px',
                        height: '60px',
                        top: '32px',
                        left: '1152px',
                        borderRadius: '12px',
                        padding: '14px 32px',
                        gap: '8px',
                        backgroundColor: '#2E58FF',
                        color: '#FFFFFF',
                        margin: '34px'
                    }}
                >
                    Paraphrase
                </button>
                <p
                    className='browse'
                >
                    Browse Templates
                </p>
                <div style={{
                    margin: '16px'
                }}>
                    <p style={{
                        fontFamily: 'Geist',
                        fontSize: '24px',
                        fontWeight: '700',
                        lineHeight: '32px',
                        letterSpacing: '0px',
                        textAlign: 'left',
                    }}>Readibility</p>
                    <p style={{
                        fontFamily: 'Geist',
                        fontSize: '24px',
                        fontWeight: '600',
                        letterSpacing: '0px',
                        textAlign: 'left',
                        color: '#0F9A46'
                    }}>Grade 6</p>
                    <p style={{
                        fontFamily: 'Geist',
                        fontSize: '24px',
                        fontWeight: '600',
                        letterSpacing: '0px',
                        textAlign: 'left',
                        color: '#84899D'
                    }}>Good</p>
                </div>

                <div
                    style={{
                        width: '14pc',
                        height: '73px',
                        padding: '16px',
                        borderRadius: '10px',
                        border: '1px solid #F2F2F2',
                        background: '#FFFFFF',
                        gap: '4px',
                        margin: '15px',
                        textAlign: 'left'
                    }}
                >
                    <p className='frame-open'><span className='frame'>6</span> seconds</p>
                    <p className='frame-open'><span className='frame'>133</span> words</p>
                    <p className='frame-open'><span className='frame'>757</span> characters</p>

                </div>
                <div>
                    <div className='paragraph'>
                        <span
                            className='number-size'
                        >
                            2
                        </span>
                        <span>adverbs, meeting the goal of 2 or fewer.</span>
                    </div>
                    <div className='paragraph' style={{ background: '#C7FFDD' }}>
                        <span
                            className='number-size'
                        >
                            1
                        </span>
                        <span >use of passive voice, meeting the goal of 2 or fewer.</span>
                    </div>
                    <div className='paragraph' style={{ background: '#EDDFFF' }}>
                        <span
                            className='number-size'
                        >
                            1
                        </span>
                        <span>phrase has a simpler alternative.</span>
                    </div>
                    <div className='paragraph' style={{ background: '#FFEFD0' }}>
                        <span
                            className='number-size'
                        >
                            1
                        </span>
                        <span>of 11 sentences is hard to read.</span>
                    </div>
                    <div className='paragraph' style={{ background: '#FFD9D9' }}>
                        <span
                            className='number-size'
                        >
                            1
                        </span>
                        <span>of 11 sentences is very hard to read.</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
