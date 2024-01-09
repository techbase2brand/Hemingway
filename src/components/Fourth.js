import CloseIcon from '@mui/icons-material/Close';

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Fourth = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/dumy')
    }
    return (
        <section className="setall">
            <div className="container-4th">
                <div className="ITOM">
                    <h3 id="or-pr">Original <CloseIcon className='close-icon' onClick={handleClose}/></h3>
                    <h4 className="manage">I made a website where you have to guest if a Trump tweet is real or fake. I compiled
                        40
                        crazy real tweets and 40 fake tweets. It's surprisingly hard!</h4>
                </div>
                <div className="bar-1">
                    <div className="control-txt">
                        <fieldset className="feildsss">
                            <legend>GENERATE TITLE 1</legend>
                            <div className="base-tamp">
                                <p className="hed-33">I built a tool that instantly creates professional email marketing
                                    templates
                                    for you.</p>
                                <div className="base-tamp-txt">
                                    <h2 className="princegauravaj-id">Base tamplate</h2>
                                    <p className="gauravaj221">#7-1 built a tool with GPT-3 to reply to emails for me</p>
                                </div>
                                <div className="base-tamp">
                                    <div className="base-tamp-txt">
                                        <h2 className="love">Explatation</h2>
                                        <p className="gauravaj">This rewritten title maintains the "I built a tool" format from
                                            the
                                            base template. The focus is shifted from replying to emails (in the base
                                            template)
                                            to creating email marketing templates, closely mirroring the structure and
                                            intent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="control-txt">
                        <fieldset className="feildsss">
                            <legend>GENERATE TITLE 2</legend>
                            <div className="base-tamp">
                                <p className="hed-33">I built a tool that instantly creates professional email marketing
                                    templates
                                    for you.</p>
                                <div className="base-tamp-txt">
                                    <h2 className="princegauravaj-id">Base tamplate</h2>
                                    <p className="gauravaj221">#7-1 built a tool with GPT-3 to reply to emails for me</p>
                                </div>
                                <div className="base-tamp">
                                    <div className="base-tamp-txt">
                                        <h2 className="love">Explatation</h2>
                                        <p className="gauravaj">This rewritten title maintains the "I built a tool" format from
                                            the
                                            base template. The focus is shifted from replying to emails (in the base
                                            template)
                                            to creating email marketing templates, closely mirroring the structure and
                                            intent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="control-txt">
                        <fieldset className="feildsss">
                            <legend>GENERATE TITLE 3</legend>
                            <div className="base-tamp">
                                <p className="hed-33">I built a tool that instantly creates professional email marketing
                                    templates
                                    for you.</p>
                                <div className="base-tamp-txt">
                                    <h2 className="princegauravaj-id">Base tamplate</h2>
                                    <p className="gauravaj221">#7-1 built a tool with GPT-3 to reply to emails for me</p>
                                </div>
                                <div className="base-tamp">
                                    <div className="base-tamp-txt">
                                        <h2 className="love">Explatation</h2>
                                        <p className="gauravaj">This rewritten title maintains the "I built a tool" format from
                                            the
                                            base template. The focus is shifted from replying to emails (in the base
                                            template)
                                            to creating email marketing templates, closely mirroring the structure and
                                            intent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="btn">
                        <button className="btn-mob">Rewrite Again</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fourth