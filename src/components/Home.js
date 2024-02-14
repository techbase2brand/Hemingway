import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayMode, setDisplayMode] = useState('list');
  const handleBoxClick = (templateContent) => {
    setInputText(templateContent);
    setDisplayMode('single'); // Change display mode to 'single' to show only the template content
  };
  useEffect(() => {
    const fetchTemplates = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/templates');
        const data = await response.json();
        setTemplates(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="coffey text-left">Coffey</h1>
      {displayMode === 'list' ? (
        <>
          <h1 className="coffey text-left">Coffey</h1>
          <div className="row mt-5">
            <div className="col-md-4 m-auto">
              <h3 className="inputText mb-4">
                <div className="inputText" id="output" dangerouslySetInnerHTML={{ __html: outputText }}></div>
              </h3>
              <a className="link" data-toggle="modal" data-target="#exampleModal">Start with a template</a>
              <b className="ml-2 mr-2">or</b>
              <Link to="/coffey" className="link">write from scratch</Link>
            </div>
          </div>
          {/* Modal for templates */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Templates</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {templates.map((template, index) => (
                    <div key={index} className="border p-3 border-rounded" data-dismiss="modal" onClick={() => handleBoxClick(template.template_content)}>
                      <h5 className="text_heading">{template.template_content}</h5>
                      <p className="upvote">{template.upvotes} upvotes</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // This section renders when a template is selected
        <div className="template-content">
          <h2>Selected Template</h2>
          <div dangerouslySetInnerHTML={{ __html: inputText }} />
          <button onClick={() => setDisplayMode('list')}>Back to templates</button> {/* Button to go back to the list view */}
        </div>
      )}
      <Sidebar inputText={inputText} />
    </div>
  );
}
