// ResumeTemplatePreview.js
import React from 'react';

function ResumeTemplatePreview(props) {
  const TemplateComponent = props.TemplateComponent;
console.log(TemplateComponent)
  return (
    <div>
      <h3>{props.template.name}</h3>
      {TemplateComponent && <TemplateComponent />}
    </div>
  );
}

export default ResumeTemplatePreview;
